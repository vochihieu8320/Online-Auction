
import mongoose from 'mongoose';

const Auction = new mongoose.Schema(
    {
        //ID cua người đang giữ giá sản phẩm
        holderID: 
        { 
            type: String,
            required: true
        },
        productID: 
        { 
            type: String,
            required: true
        },
        //giá để vào sản phẩm
        min_price:{
            type: Number,
            required: true
        },
        //số lượt bider ra giá
        amount_bider_bide:{
            type: String,
        }
       
    },
    { timestamps: true}
)

const model = mongoose.model('Auction', Auction);
export default model;
