import mongoose from 'mongoose';

var Otp = new mongoose.Schema(
    {
        email: 
        {
            type: String,
            required: true,
            minlength:3,
            maxlength:50,
        },
        otp:{
            type: String,
            minlength:3,
            maxlength:50,
        }
    }
)

const model = mongoose.model('Otp', Otp);
export default model;