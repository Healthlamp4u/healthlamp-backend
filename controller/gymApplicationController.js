const GymApplication = require("../model/gymApplication");

const GymApplicationController = {
    getApplicationByGymId: async (req, res) => {
        try {
            const gymId = req.params.gymId;

            const gymApplicationResponse = await GymApplication.find({ gymId });
            if (!gymApplicationResponse) return res.status(400).json({ msg: "Applications not found" });

            return res.status(200).json(gymApplicationResponse);
        } catch (err) {
            console.log(err)
            return res.status(500).json(err);
        }
    },
    createGymApplication: async (req, res) => {
        try {
            const payload = req.body.payload;

            if (!payload) return res.status(400).json({ msg: "Payload cannot be null" });

            const newGymApplication = new GymApplication(payload);
            const gymApplicationResponse = await newGymApplication.save();
            if (!gymApplicationResponse) return res.status(400).json({ msg: "Error in creating gym application" });

            return res.status(200).json(gymApplicationResponse);
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    checkExistingApplication: async (req, res) => {
        try {
            const { gymId, trainerId } = req.body.payload
            const existingApplication = await GymApplication.findOne({ trainerId, gymId })
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
    updateGymApplication: async (req, res) => {
        try {
            const payload = req.body.payload;

            if (!payload) return res.status(400).json({ msg: "Payload cannot be null" });

            const id = payload._id;
            if (!id) return res.status(400).json({ msg: "Application ID cannot be null" });

            const updatedGym = await GymApplication.findOneAndUpdate({ _id: id }, payload, { new: true });
            if (!updatedGym) return res.status(400).json({ msg: "Error in updating application" });

            return res.status(200).json(updatedGym);
        } catch (err) {
            console.log(err)
            return res.status(500).json(err);
        }
    },
    deleteGymApplication: async (req, res) => {
        try {
            const id = req.params.applicationId;
            if (!id) return res.status(400).json({ msg: "Application ID cannot be null" });

            const deleteGymApplicationResponse = await GymApplication.findByIdAndDelete({ _id: id });
            if (!deleteGymApplicationResponse) return res.status(400).json({ msg: "Error in deleting application" });

            return res.status(200).json({ msg: "Application deleted successfully" });
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

module.exports = GymApplicationController