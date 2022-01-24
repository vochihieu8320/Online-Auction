import mongoose from 'mongoose';

var Love_list = new mongoose.Schema(
    {
        userID: 
        {
            type: String,
            required: true,
            minlength:3,
            maxlength:50,
        },
        productID:
        {
            type: String,
            required: true,
            minlength: 8,
        }
    },
)
const model = mongoose.model('Love_list', Love_list);
export default model;
