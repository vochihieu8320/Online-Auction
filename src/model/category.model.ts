
import mongoose from 'mongoose';

const Category = new mongoose.Schema(
    {
        name: 
        { 
            type: String,
            maxlength: 50,
            required: true
        },
       
        parentID:{
            type: String,
        }
    },
    { timestamps: true}
)

const model = mongoose.model('Category', Category );
export default model;
