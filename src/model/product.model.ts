
import mongoose from 'mongoose';

var Product = new mongoose.Schema(
    {
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
        price: 
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
        categoryID:
        {
            type: String,
            required: false,
            minlength: 0
        },
        buy_now_price:
        {
            type: String,
            required: false,
            minlength: 0
        },
        description:{
            type: String,
        },
        img: {
            type: String,
        }
    },
    { timestamps: true,collection:'Product'}
)
const model = mongoose.model('Product', Product);
export default model;
