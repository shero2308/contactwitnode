const { default: mongoose } = require('mongoose');
const MongoDB = require('mongoose');

const ContactSchema = MongoDB.Schema({
    user_id: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref:'User'
    },
    name: {
        type: String,
        required: [true, 'Please add a name'],
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
    },
    phone: {
        type: String,
        required: [true, 'Please add a phone number'],
    },
}, { timestamps: true });

module.exports = MongoDB.model('Contact', ContactSchema);