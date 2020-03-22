const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: { type: String, required: true, },
    //lastName: { type: String, required: true },
    email: { type: String, required: true, },
    subject: { type: String, required: true },
});

module.exports = mongoose.model('ContactUs', contactSchema);