const admin = require('firebase-admin')

const firebaseAdmin = {
    getUsers: async (req, res) => {
        try {
            const response = await admin.auth().listUsers();
            return res.json(response)
        } catch (err) {
            return res.status(500).json(err)
        }
    },
    getUserByEmail: async (req, res) => {
        try {
            const email = req.body.email
            const user = await admin.auth().getUserByEmail(email);
            if (!user) return res.status(400).json({ msg: "User does not exist in firebase" })
            return res.json(user)
        } catch (err) {
            return res.status(500).json(err)
        }
    },
    deleteUser: async (req, res) => {
        try {
            const email = req.body.email
            const user = await admin.auth().getUserByEmail(email);
            if (!user) return res.status(400).json({ msg: "User does not exist in firebase" })
            await admin.auth().deleteUser(user.uid);
            res.status(200).json({msg: 'User deleted successfully'});
        } catch (err) {
            return res.status(200).json(err)
        }
    }
}

module.exports = firebaseAdmin