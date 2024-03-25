const Notification = require("../model/notifications")

const notificationController = {
    getNotificationByRecipientId: async (req, res) => {
        try {
            const recipientId = req.params.recipientId
            const response = await Notification.find({ recipientId })
            if (!response) return res.status(404).json({ msg: "No notifications of this id found" })
            return res.status(200).json(response)

        } catch (err) {
            console.log(err)
        }
    },
    createNotification: async (req, res) => {
        try {
            const payload = req.body.payload
            const newNotification = new Notification(payload)
            const response = await newNotification.save()
            if (!response) return res.status(400).json({ msg: "Error while creating notification" })
            return res.status(200).json(true)

        } catch (err) {
            console.log(err)
        }
    },
    deleteNotification: async (req, res) => {
        try {
            const id = req.params.id
            const response = await Notification.findByIdAndDelete({ _id: id })
            if (!response) return res.status(400).json({ msg: "Error while deleting notification" })
            return res.status(200).json({ msg: "Notification deleted successfully" })

        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = notificationController