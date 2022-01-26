import Auction from '../model/aution.model';
import Auction_History from '../model/auction_history.model'
const mongoose = require("mongoose");
import bide_success from '../email_template/bide_success';
import seller_success from '../email_template/seller_success'
import mailService from '../service/mail.service'
import mail from "../mailer/mailer";
import Product from "../model/product.model"
import User from "../model/user.model"
import Bide from '../model/bide.model'

class AutionController {
    async getAuctions(req :any, res :any){
        try {
            const {productID} = req.query
            if (!productID){
                res.sendStatus(400)
            }
            else{
                const actions = await Auction.find({productID: productID });
                res.json(actions);
            }
        } catch (error) {
            console.log(error);
            res.sendStatus(400)
        }
    }
    
    async createAuctions(req :any, res :any){
        try {
            const result = await Auction.create(req.body);
            res.json(result);
        } catch (error) {
            console.log(error);
            res.sendStatus(400)
        }
    }


    async auction_history(req :any, res :any){
        try {
            const productID = req.body.productID
            const ObjectId = mongoose.Types.ObjectId;

            const result =  await Auction_History.aggregate([
                {
                    $match: {productID: productID}
                },
                { $addFields: { "user": {
                    $toObjectId: "$userID"
                }}},
                {
                    $lookup:
                    {
                       
                        from: "users",
                        localField:"user",
                        foreignField: "_id",
                        as: "owner"
                    }
                },
                {$unwind: { path: "$owner", preserveNullAndEmptyArrays: true }},
            ]);
            res.json(result)
        } catch (error) {
            console.log(error);
            res.sendStatus(400)
        }
    }

    async update(req :any, res :any){
        const auctionID = req.params.auctionID;
        try {
            const auction = <any> await Auction.findByIdAndUpdate(auctionID, {status: req.body.status});
            if(req.body.status == 2)
            {
                //thong bao cho seller 
                //email tempate
                const product = <any> await Product.findById(auction.productID);
                const holder = <any> await User.findById(auction.holderID);
                const seller = <any> await User.findById(product.seller);
                const form_seller = {
                    name: seller.name,
                    product_name: product.name,
                }
                const seller_success_template = seller_success.seller_success_template(form_seller);
                const mail_options = mailService.mail_options(seller.email, seller_success_template, "Sell product successfully");
                //conect mail server
                const transporter = mail.connect()
                //send mail
                mailService.send_mail(transporter, mail_options)
                //send mail for bider
                const form_bide = {
                    name: holder.name,
                    product_name: product.name,
                }
                const bide_success_template = bide_success.bide_success_template(form_bide);
                const mail_options_bide = mailService.mail_options(holder.email, bide_success_template, "Bide product successfully");
                mailService.send_mail(transporter, mail_options_bide)
            }
            res.json({status: 200})
        } catch (error) {
            console.log(error);
            res.sendStatus(400)
        }
    }

    async user_winners(req: any, res: any)
    {
        const userID = req.query.userID;
        const skip = req.query.skip;
        const limit = req.query.limit;
        try {
            const result = await Auction.aggregate([
                {
                    $match: {holderID: userID, status: 2}
                },
                { $addFields: { "product": { $toObjectId: "$productID" }}},
                {
                    $lookup:
                    {
                       
                        from: "Product",
                        localField:"product",
                        foreignField: "_id",
                        as: "productInfo"
                    }
                },
                {$unwind: { path: "$productInfo", preserveNullAndEmptyArrays: true }},
                { $addFields: { "sellerInfo": { $toObjectId: "$productInfo.seller" }}},
                {
                    $lookup:
                    {
                       
                        from: "users",
                        localField:"sellerInfo",
                        foreignField: "_id",
                        as: "sellerDetail"
                    }
                },
                {$unwind: { path: "$sellerDetail", preserveNullAndEmptyArrays: true }},
                {
                    $skip: +skip
                },
                {
                    $limit: +limit
                }       
            ])
        const count = await Auction.count({holderID: userID, status: 2})
        res.json({data:result, count: count})

        } catch (error) {
            console.log(error);
            res.sendStatus(500)            
        }
    }

    async update_auction_when_reject(req :any, res :any)
    {
        try {
            const auctionID = req.params.auctionID;
            const auction = <any> await Auction.findByIdAndUpdate(auctionID, {status: 0});
            res.json({status: 200})
        } catch (error) {
            console.log(error);
            res.sendStatus(500)
        }
    }
}


export default new AutionController
