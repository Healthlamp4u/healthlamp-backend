const User = require('../model/user');

const userController = {
    getAllUsers: async (req, res) => {
        try {
            const userResponse = await User.find({});
            if (!userResponse) return res.status(400).json({ msg: "Error in fetching user" });
            return res.status(200).json(userResponse);
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    getUserById: async (req, res) => {
        try {
            const userId = req.params.userId;

            const userResponse = await User.findOne({ _id: userId });
            if (!userResponse) return res.status(400).json({ msg: "User not found" });

            return res.status(200).json(userResponse);
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    getUserByEmail: async (req, res) => {
        try {
            const email = req.body.email;

            const userResponse = await User.findOne({ email });
            if (!userResponse) return res.status(400).json({ msg: "User not found" });

            return res.status(200).json(userResponse);
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    createUser: async (req, res) => {
        try {
            const payload = req.body.payload;
            
            if (!payload) return res.status(400).json({ msg: "Payload cannot be null" });

            const newUser = new User(payload);
            const userResponse = await newUser.save();
            if (!userResponse) return res.status(400).json({ msg: "Error in creating user" });

            return res.status(200).json(userResponse);
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    updateUser: async (req, res) => {
        try {
            const payload = req.body.payload;
            if (!payload) return res.status(400).json({ msg: "Payload cannot be null" });

            const id = payload._id;
            if (!id) return res.status(400).json({ msg: "User ID cannot be null" });

            const updatedUser = await User.findOneAndUpdate({ _id: id }, payload, { new: true });
            if (!updatedUser) return res.status(400).json({ msg: "Error in updating user" });

            return res.status(200).json(updatedUser);
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const id = req.params.userId;
            if (!id) return res.status(400).json({ msg: "User ID cannot be null" });

            const deleteUserResponse = await User.findByIdAndDelete({ _id: id });
            if (!deleteUserResponse) return res.status(400).json({ msg: "Error in deleting user" });

            return res.status(200).json({ msg: "User deleted successfully" });
        } catch (err) {
            return res.status(500).json(err);
        }
    }
};

module.exports = userController;
