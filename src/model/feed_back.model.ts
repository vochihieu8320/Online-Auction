import mongoose from 'mongoose';

const FeedBack = new mongoose.Schema(
    {
        userID:
        {
            type: String,
            required: true
        },
        message: 
        { 
            type: String,
            required: true
        },
        ownerID:
        {
            type: String,
            required: true
        }

    },
    { timestamps: true}
)

const model = mongoose.model('FeedBack', FeedBack);
export default model;
