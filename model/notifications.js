const mongoose = require('mongoose')

const NotificationSchema = new mongoose.Schema({
    senderId: { type: String },
    recipientId: { type: String },
    title: { type: String },
    message: { type: String },
    type: { type: String },
    date: { type: Date, default: Date.now() }
})

const Notification = mongoose.model('Notification', NotificationSchema)
module.exports = Notification