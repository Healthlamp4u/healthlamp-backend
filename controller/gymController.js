const Gym = require("../model/gym")

const GymController = {
    getAllGyms: async (req, res) => {
        try {
            const gymResponse = await Gym.find({})
            if (!gymResponse) return res.status(400).json({ msg: "Error in fetching Gyms" });
            return res.status(200).json(gymResponse)
        } catch (err) {
            console.log(err)
        }
    },

    getGymById: async (req, res) => {
        try {
            const gymId = req.params.gymId;

            const gymResponse = await Gym.findOne({ _id: gymId });
            if (!gymResponse) return res.status(400).json({ msg: "Gym not found" });

            return res.status(200).json(gymResponse);
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    getGymByEmail: async (req, res) => {
        try {
            const email = req.body.email;

            const gymResponse = await Gym.findOne({ email });
            if (!gymResponse) return res.status(400).json({ msg: "Gym not found" });

            return res.status(200).json(gymResponse);
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    createGym: async (req, res) => {
        try {
            const payload = req.body.payload;

            if (!payload) return res.status(400).json({ msg: "Payload cannot be null" });

            const newgym = new Gym(payload);
            const gymResponse = await newgym.save();
            if (!gymResponse) return res.status(400).json({ msg: "Error in creating gym" });

            return res.status(200).json(gymResponse);
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    updateGym: async (req, res) => {
        try {
            const payload = req.body.payload;

            if (!payload) return res.status(400).json({ msg: "Payload cannot be null" });

            const id = payload._id;
            if (!id) return res.status(400).json({ msg: "User ID cannot be null" });

            const updatedGym = await Gym.findOneAndUpdate({ _id: id }, payload, { new: true });
            if (!updatedGym) return res.status(400).json({ msg: "Error in updating gym" });

            return res.status(200).json(updatedGym);
        } catch (err) {
            console.log(err)
            return res.status(500).json(err);
        }
    },

    deleteGym: async (req, res) => {
        try {
            const id = req.params.gymId;
            if (!id) return res.status(400).json({ msg: "gym ID cannot be null" });

            const deleteGymResponse = await Gym.findByIdAndDelete({ _id: id });
            if (!deleteGymResponse) return res.status(400).json({ msg: "Error in deleting gym" });

            return res.status(200).json({ msg: "Gym deleted successfully" });
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

module.exports = GymController