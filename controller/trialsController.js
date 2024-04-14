const Trials = require("../model/trials")

const trialsController = {
    getTrialsByGymId: async (req, res) => {
        try {
            const gymId = req.params.gymId
            const trials = await Trials.find({ gymId })
            if (!trials) {
                return res.status(404).json({ msg: "No Trials Found For This Gym" })
            }
            return res.status(200).json(trials)
        } catch (err) {
            console.log(err)
        }
    },
    getTrialsByUserId: async (req, res) => {
        try {
            const userId = req.params.userId
            const trials = await Trials.find({ userId })
            if (!trials) {
                return res.status(404).json({ msg: "No Trials Found For This User" })
            }
            return res.status(200).json(trials)
        } catch (err) {
            console.log(err)
        }
    },
    checkExistingTrials: async (req, res) => {
        try {
            const { gymId, userId } = req.body
            const existingTrial = await Trials.findOne({ userId, gymId })
            if (!existingTrial) {
                return res.status(200).json(false)
            } else if (existingTrial.length === 0) {
                return res.status(200).json({ status: false })
            }
            return res.status(200).json({ status: true, details: existingTrial })
        } catch (err) {
            console.log(err)
        }
    },
    createTrial: async (req, res) => {
        try {
            const { userId, gymId, date, time } = req.body
            const payload = { userId, gymId, date, time, status: 'pending' }
            const newTrial = new Trials(payload)
            const response = await newTrial.save()
            if (!response) return res.status(400).json({ msg: "Error in creating trial" })
            return res.status(200).json(response)

        } catch (err) {
            console.log(err)
        }
    },
    updateTrial: async (req, res) => {
        try {
            const payload = req.body.payload;
            if (!payload) return res.status(400).json({ msg: "Payload cannot be null" });

            const id = payload._id;
            if (!id) return res.status(400).json({ msg: "Trial ID cannot be null" });

            const updatedTrial = await Trials.findOneAndUpdate({ _id: id }, payload, { new: true });
            if (!updatedTrial) return res.status(400).json({ msg: "Error in updating trial" });

            return res.status(200).json(updatedTrial);

        } catch (err) {
            console.log(err)
        }
    },
    deleteTrial: async (req, res) => {
        try {
            const id = req.params.trialId;
            if (!id) return res.status(400).json({ msg: "Trial ID cannot be null" });

            const deleteTrialResponse = await Trials.findByIdAndDelete({ _id: id });
            if (!deleteTrialResponse) return res.status(400).json({ msg: "Error in deleting trial" });

            return res.status(200).json({ msg: "Trial deleted successfully" });
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

module.exports = trialsController