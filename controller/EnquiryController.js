const Enquiry = require("../model/enquiry")

const EnquiryController = {
    getEnquiryById: async (req, res) => {
        try {
            const id = req.params.id
            const enquiry = await Enquiry.find({ _id: id })
            if (!enquiry) return res.status(400).json({ msg: "No Enquiries found" })
            else {
                return res.status(200).json(enquiry)
            }
        } catch (err) {
            return res.status(500).json(err)
        }
    },
    getEnquiryBySenderrId: async (req, res) => {
        try {
            const senderId = req.params.id
            const enquiry = await Enquiry.find({ sender: senderId })
            if (!enquiry) return res.status(400).json({ msg: "No Enquiries found" })
            else {
                return res.status(200).json(enquiry)
            }
        } catch (err) {
            return res.status(500).json(err)
        }
    },
    getEnquiryByReceiverId: async (req, res) => {
        try {
            const receiverId = req.params.id
            const enquiry = await Enquiry.find({ receiver: receiverId })
            if (!enquiry) return res.status(400).json({ msg: "No Enquiries found" })
            else {
                return res.status(200).json(enquiry)
            }
        } catch (err) {
            return res.status(500).json(err)
        }
    },
    createEnquiry: async (req, res) => {
        try {
            const payload = req.body.payload;

            if (!payload) return res.status(400).json({ msg: "Payload cannot be null" });

            const newEnquiry = new Enquiry(payload);
            const enquiryResponse = await newEnquiry.save();
            if (!enquiryResponse) return res.status(400).json({ msg: "Error in sending message" });

            return res.status(200).json(enquiryResponse);
        } catch (err) {
            return res.status(500).json(err);
        }
    },
    updateEnquiry: async (req, res) => {
        try {
            const payload = req.body.payload;

            if (!payload) return res.status(400).json({ msg: "Payload cannot be null" });

            const id = payload._id;
            if (!id) return res.status(400).json({ msg: "Enquiry ID cannot be null" });

            const updatedEnquiry = await Enquiry.findOneAndUpdate({ _id: id }, payload, { new: true });
            if (!updatedEnquiry) return res.status(400).json({ msg: "Error in updating enquiry" });

            return res.status(200).json(updatedEnquiry);
        } catch (err) {
            console.log(err)
            return res.status(500).json(err);
        }
    },
    deleteEnquiry: async (req, res) => {
        try {
            const id = req.params.id;
            if (!id) return res.status(400).json({ msg: "Enquiry ID cannot be null" });

            const deleteEnquiryResponse = await Enquiry.findByIdAndDelete({ _id: id });
            if (!deleteEnquiryResponse) return res.status(400).json({ msg: "Error in deleting Enquiry" });

            return res.status(200).json({ msg: "Enquiry deleted successfully" });
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

module.exports = EnquiryController