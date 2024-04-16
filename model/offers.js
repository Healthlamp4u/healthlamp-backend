const mongoose = require('mongoose')

const OffersSchema = new mongoose.Schema({
    type: { type: String },
    images: [{ type: String }],
    video: { type: String },
    videoName: { type: String },
    from: { type: String },
    to: { type: String }
})

const Offers = mongoose.model('Offers', OffersSchema)
module.exports = Offers