
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
        Price: 
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
            required: true,
            minlength: 0
        },
        img:
        {
            type: String,
            required: true,
        },
        img_sub:
        {
            type: String,
            required: false,
        },
        description: 
        {
            type: String
        }
    },
    { timestamps: true,collection:'Product'}
)

module.exports = mongoose.model('Product', Product);
