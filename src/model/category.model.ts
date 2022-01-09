
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
        parentID:{
            type: String,
            minlength:3,
            maxlength:50,
        }
    }
)

const model = mongoose.model('Category', Category);
export default model;