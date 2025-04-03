const MongoDB = require('mongoose');

const ContactSchema = MongoDB.Schema({
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