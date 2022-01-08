
import mongoose from 'mongoose';

var Category = new mongoose.Schema(
    {
        name: 
        {
            type: String,
            required: true,
            minlength:3,
            maxlength:50,
        },
        ParentID:{
            type: String,
            required: true,
            minlength:3,
            maxlength:50,
        }
    },
    { timestamps: true,collection:'Category'}
)

module.exports = mongoose.model('Category', Category);
