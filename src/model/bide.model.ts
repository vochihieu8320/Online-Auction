
import mongoose from 'mongoose';

const Bide = new mongoose.Schema(
    {
        productID: 
        { 
            type: String,
            required: true
        },
        //giá để vào sản phẩm
        max_price:{
            type: String,
            required: true
        }
    },
    { timestamps: true}
)

const model = mongoose.model('Bide', Bide);
export default model;
