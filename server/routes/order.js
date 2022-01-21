const router = require("express").Router();
const verifyToken = require("../middlewares/verify-token");
const Order = require("../models/order");

router.get("/orders", verifyToken, async (req, res) => {
    try {
        let products = await Order.find({ owner: req.decoded._id})
            .deepPopulate("owner products.productID.owner")
            .exec();
        res.json({
            success: true,
            products: products
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
})

module.exports = router;