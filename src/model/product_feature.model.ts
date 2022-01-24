import mongoose from 'mongoose';

var Product_feature = new mongoose.Schema(
    {
        productID: 
        {
            type: String,
            required: true,
            minlength:3,
            maxlength:50,
        },
        message:{
            type: String,
            minlength:3,
            maxlength:50,
        }
    }
)

const model = mongoose.model('Product_feature', Product_feature);
export default model;