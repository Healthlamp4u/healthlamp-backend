const UserApplication = require("../model/userApplication");

const UserApplicationController = {
    getApplicationByGymId: async (req, res) => {
        try {
            const gymId = req.params.gymId;

            const userApplicationResponse = await UserApplication.find({ gymId });
            if (!userApplicationResponse) return res.status(400).json({ msg: "Applications not found" });

            return res.status(200).json(userApplicationResponse);
        } catch (err) {
            console.log(err)
            return res.status(500).json(err);
        }
    },
    createUserApplication: async (req, res) => {
        try {
            const payload = req.body.payload;

            if (!payload) return res.status(400).json({ msg: "Payload cannot be null" });

            const newUserApplication = new UserApplication(payload);
            const userApplicationResponse = await newUserApplication.save();
            if (!userApplicationResponse) return res.status(400).json({ msg: "Error in creating gym application" });

            return res.status(200).json(userApplicationResponse);
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    checkExistingApplication: async (req, res) => {
        try {
            const { gymId, userId } = req.body.payload
            const existingApplication = await UserApplication.findOne({ userId, gymId })
            if (!existingApplication) {
                return res.status(200).json(false)
            } else if (existingApplication.length === 0) {
                return res.status(200).json({ status: false })
            }
            return res.status(200).json({ status: true, details: existingApplication })
        } catch (err) {
            console.log(err)
        }
    },
    updateUserApplication: async (req, res) => {
        try {
            const payload = req.body.payload;

            if (!payload) return res.status(400).json({ msg: "Payload cannot be null" });

            const id = payload._id;
            if (!id) return res.status(400).json({ msg: "Application ID cannot be null" });

            const updatedApplication = await UserApplication.findOneAndUpdate({ _id: id }, payload, { new: true });
            if (!updatedApplication) return res.status(400).json({ msg: "Error in updating application" });

            return res.status(200).json(updatedApplication);
        } catch (err) {
            console.log(err)
            return res.status(500).json(err);
        }
    },
    deleteUserApplication: async (req, res) => {
        try {
            const id = req.params.applicationId;
            if (!id) return res.status(400).json({ msg: "Application ID cannot be null" });

            const deleteuserApplicationResponse = await UserApplication.findByIdAndDelete({ _id: id });
            if (!deleteuserApplicationResponse) return res.status(400).json({ msg: "Error in deleting application" });

            return res.status(200).json({ msg: "Application deleted successfully" });
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

module.exports = UserApplicationController