
import mongoose from 'mongoose';

var Category = new mongoose.Schema(
    {
        cate_id:{
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
        parentID:{
            type: String,
            required: true,
            minlength:3,
            maxlength:50,
        }
    },
    { timestamps: true,collection:'Category'}
)

module.exports = mongoose.model('Category', Category);
