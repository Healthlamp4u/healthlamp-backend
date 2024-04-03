const Admin = require("../model/admin")

const adminController = {
    getAdminById: async (req, res) => {
        try {
            const id = req.params.id
            const adminResponse = await Admin.findOne({ _id: id })
            if (!adminResponse) return res.status(404).json({ msg: "Admin record not found" })
            return res.status(200).json(adminResponse)
        } catch (err) {
            console.log(err)
            return res.status(500).json(err);
        }
    },
    getAdminByEmail: async (req, res) => {
        try {
            const email = req.body.email
            const adminResponse = await Admin.findOne({ email })
            if (!adminResponse) return res.status(404).json({ msg: "Admin record not found" })
            return res.status(200).json(adminResponse)
        } catch (err) {
            console.log(err)
            return res.status(500).json(err);
        }
    },
    createAdmin: async (req, res) => {
        try {
            const payload = req.body.payload
            if (!payload) return res.status(400).json({ msg: "Payload cannot be null" });

            const newAdmin = new Admin(payload)
            const adminResponse = await newAdmin.save()
            if (!adminResponse) return res.status(404).json({ msg: "Error while creating admin" })
            return res.status(200).json(adminResponse)
        } catch (err) {
            console.log(err)
            return res.status(500).json(err);
        }
    },
    updateAdmin: async (req, res) => {
        try {
            const payload = req.body.payload;
            console.log(payload)

            if (!payload) return res.status(400).json({ msg: "Payload cannot be null" });

            const id = payload._id;
            if (!id) return res.status(400).json({ msg: "Admin ID cannot be null" });

            const updatedAdmin = await Admin.findOneAndUpdate({ _id: id }, payload);
            if (!updatedAdmin) return res.status(400).json({ msg: "Error in updating admin" });

            return res.status(200).json(updatedAdmin);
        } catch (err) {
            console.log(err)
            return res.status(500).json(err);
        }
    },
    deleteAdmin: async (req, res) => {
        try {
            const id = req.params.adminId;
            if (!id) return res.status(400).json({ msg: "Admin ID cannot be null" });

            const deleteAdminResponse = await Admin.findByIdAndDelete({ _id: id });
            if (!deleteAdminResponse) return res.status(400).json({ msg: "Error in deleting admin" });

            return res.status(200).json({ msg: "Admin deleted successfully" });
        } catch (err) {
            console.log(err)
            return res.status(500).json(err);
        }
    }
}

module.exports = adminController