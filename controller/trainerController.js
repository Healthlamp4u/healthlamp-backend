const Trainer = require("../model/trainer")

const TrainerController = {
    getAllTrainers: async (req, res) => {
        try {
            const trainerResponse = await Trainer.find({})
            if (!trainerResponse) return res.status(400).json({ msg: "Error in fetching Trainers" });
            return res.status(200).json(trainerResponse)
        } catch (err) {
            console.log(err)
        }
    },

    getTrainerById: async (req, res) => {
        try {
            const trainerId = req.params.trainerId;

            const trainerResponse = await Trainer.findOne({ _id: trainerId });
            if (!trainerResponse) return res.status(400).json({ msg: "Trainer not found" });

            return res.status(200).json(trainerResponse);
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    getTrainerByEmail: async (req, res) => {
        try {
            const email = req.body.email;

            const trainerResponse = await Trainer.findOne({ email });
            if (!trainerResponse) return res.status(400).json({ msg: "Trainer not found" });

            return res.status(200).json(trainerResponse);
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    getTrainerByGymId: async (req, res) => {
        try {
            const gymId = req.params.gymId;

            const trainerResponse = await Trainer.find({ associatedGym: gymId });
            if (!trainerResponse) return res.status(400).json({ msg: "Trainer not found" });

            return res.status(200).json(trainerResponse);
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    createTrainer: async (req, res) => {
        try {
            const payload = req.body.payload;

            if (!payload) return res.status(400).json({ msg: "Payload cannot be null" });

            const newTrainer = new Trainer(payload);
            const trainerResponse = await newTrainer.save();
            if (!trainerResponse) return res.status(400).json({ msg: "Error in creating Trainer" });

            return res.status(200).json(trainerResponse);
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    updateTrainer: async (req, res) => {
        try {
            const payload = req.body.payload;

            if (!payload) return res.status(400).json({ msg: "Payload cannot be null" });

            const id = payload._id;
            if (!id) return res.status(400).json({ msg: "Trainer ID cannot be null" });

            const updatedTrainer = await Trainer.findOneAndUpdate({ _id: id }, payload, { new: true });
            if (!updatedTrainer) return res.status(400).json({ msg: "Error in updating Trainer" });

            return res.status(200).json(updatedTrainer);
        } catch (err) {
            console.log(err)
            return res.status(500).json(err);
        }
    },

    deleteTrainer: async (req, res) => {
        try {
            const id = req.params.trainerId;
            if (!id) return res.status(400).json({ msg: "Trainer ID cannot be null" });

            const deletetrainerResponse = await Trainer.findByIdAndDelete({ _id: id });
            if (!deletetrainerResponse) return res.status(400).json({ msg: "Error in deleting Trainer" });

            return res.status(200).json({ msg: "Trainer deleted successfully" });
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

module.exports = TrainerController