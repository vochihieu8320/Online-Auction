
import mongoose from 'mongoose';

var Product = new mongoose.Schema(
    {
        Pro_Id: 
        {
            type: String,
            required: true,
            minlength:3,
            maxlength:50,
        },
        name: 
        {
            type: String,
            required: true,
            minlength:3,
            maxlength:50,
        },
        seller:
        {
            type: String,
            minlength: 8,
        },
        Real_price: 
        {
            type: String,
            required: false,
            length: 11
        },
        date_add:
        {
            type: String,
            required: false,
            minlength: 5,
            maxlength : 50
        },
        date_bid:
        {
            type: String,
            required: false,
            minlength: 0
        },
        category:
        {
            type: String,
            required: false,
            minlength: 0
        },
        buynow_price:
        {
            type: String,
            required: false,
            minlength: 0
        },
        descipt:[{
            status:{
                type: String,
                required: false,
                minlength: 0
            },
            date_buy:{
                type: String,
                required: false,
                minlength: 0
            },
        }]
    },
    { timestamps: true,collection:'Product'}
)

module.exports = mongoose.model('Product', Product);
