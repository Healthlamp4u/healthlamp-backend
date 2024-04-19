const mongoose = require('mongoose')

const ReplySchema = new mongoose.Schema({
    reply: { type: String },
    repliedBy: { type: String },
    repliedOn: { type: Date, default: Date.now }
})

const EnquirySchema = new mongoose.Schema({
    sender: { type: String },
    senderName: { type: String },
    senderProfile: { type: String },
    receiver: { type: String },
    receiverName: { type: String },
    message: { type: String },
    replies: [ReplySchema],
    date: { type: Date, default: Date.now() }
})

const Enquiry = mongoose.model('Enquiry', EnquirySchema)
module.exports = Enquiry