
import mongoose from 'mongoose';

var Inbox = new mongoose.Schema(
    {
        owner: 
        {
            type: String,
            required: true,
            minlength:3,
            maxlength:50,
        },
        content:
        {
            type: String,
            required: true,
            minlength: 8,
        },
        status: 
        {
            type: String,
            required: true,
        }
    },
)
const model = mongoose.model('Inbox', Inbox);
export default model;
