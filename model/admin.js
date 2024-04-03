const  mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({
    name: { type: String },
    profile: { type: String },
    gender: { type: String },
    email: { type: String },
    phone: { type: String },
    address: { type: String },
    password: { type: String }
})

const Admin = mongoose.model('Admin', AdminSchema)
module.exports = Admin