const mongoose = require('mongoose')

const FacilitySchema = new mongoose.Schema({
    images: [{ type: String }],
    title: { type: String },
    description: { type: String }
})
const EquipmentSchema = new mongoose.Schema({
    images: [{ type: String }],
    name: { type: String },
    description: { type: String }
})

const PricingSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    pricing: { type: String }
})

const GymSchema = new mongoose.Schema({
    name: { type: String },
    images: [{ type: String }],
    desc: { type: String },
    email: { type: String },
    altEmail: {type: String},
    phone: { type: String },
    altPhone: { type: String },
    sector: { type: String },
    locality: { type: String },
    city: { type: String },
    state: { type: String },
    maps: { type: String },
    facilities: [FacilitySchema],
    equipments: [EquipmentSchema],
    status: { type: String },
    clients: [{ type: String }],
    trainers: [{ type: String }],
    pricing: [PricingSchema],
    allowTrial: { type: Boolean, default: false },
    specializations: [{ type: String }]
})

const Gym = mongoose.model('Gym', GymSchema)

module.exports = Gym