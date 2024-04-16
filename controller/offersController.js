const Offers = require("../model/offers");

const OffersController = {
    getAllOffers: async (req, res) => {
        try {
            const offerResponse = await Offers.find({})
            if (!offerResponse) return res.status(400).json({ msg: "Error in fetching Offers" });
            return res.status(200).json(offerResponse)
        } catch (err) {
            console.log(err)
        }
    },

    getOfferById: async (req, res) => {
        try {
            const OfferId = req.params.OfferId;

            const offerResponse = await Offers.findOne({ _id: OfferId });
            if (!offerResponse) return res.status(400).json({ msg: "Offer not found" });

            return res.status(200).json(offerResponse);
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    createOffer: async (req, res) => {
        try {
            const payload = req.body.payload;

            if (!payload) return res.status(400).json({ msg: "Payload cannot be null" });

            const newOffer = new Offers(payload);
            const offerResponse = await newOffer.save();
            if (!offerResponse) return res.status(400).json({ msg: "Error in creating Offer" });

            return res.status(200).json(offerResponse);
        } catch (err) {
            return res.status(500).json(err);
        }
    },

    updateOffer: async (req, res) => {
        try {
            const payload = req.body.payload;

            if (!payload) return res.status(400).json({ msg: "Payload cannot be null" });

            const id = payload._id;
            if (!id) return res.status(400).json({ msg: "Offer ID cannot be null" });

            const updatedOffer = await Offers.findOneAndUpdate({ _id: id }, payload, { new: true });
            if (!updatedOffer) return res.status(400).json({ msg: "Error in updating Offer" });

            return res.status(200).json(updatedOffer);
        } catch (err) {
            console.log(err)
            return res.status(500).json(err);
        }
    },

    deleteOffer: async (req, res) => {
        try {
            const id = req.params.offerId;
            if (!id) return res.status(400).json({ msg: "Offer ID cannot be null" });

            const deleteofferResponse = await Offers.findByIdAndDelete({ _id: id });
            if (!deleteofferResponse) return res.status(400).json({ msg: "Error in deleting Offer" });

            return res.status(200).json({ msg: "Offer deleted successfully" });
        } catch (err) {
            return res.status(500).json(err);
        }
    }
}

module.exports = OffersController