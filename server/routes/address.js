const router = require("express").Router();
const Address = require("../models/address");
const verifyToken = require("../middlewares/verify-token");
const axios = require("axios");

router.post("/addresses", verifyToken, async (req, res) => {
  try {
    let address = new Address();
    address.user = req.decoded._id;
    address.country = req.body.country;
    address.fullName = req.body.fullName;
    address.city = req.body.city;
    address.state = req.body.state;
    address.zipCode = req.body.zipCode;
    address.phoneNumber = req.body.phoneNumber;
    address.deliverInstructions = req.body.deliverInstructions;
    address.securityCode = req.body.securityCode;

    await address.save();
    res.json({
      success: true,
      message: "Successfully added an address",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

router.get("/addresses", verifyToken, async (req, res) => {
  try {
    let addresses = await Address.find({ user: req.decoded._id });

    res.json({
      success: true,
      addresses: addresses,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

router.get("/countries", async (req, res) => {
  try {
    let response = await axios.get("https://restcountries.com/v2/all");

    res.json(response.data);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});


router.put("/addresses/:id", verifyToken, async (req, res) => {
  try {
    let foundAddress = await Address.findOne({ _id: req.params.id });
    if (foundAddress) {

      if(req.body.country)address.country = req.body.country;
      if(req.body.fullName)address.fullName = req.body.fullName;
      if(req.body.city)address.city = req.body.city;
      if(req.body.state)address.state = req.body.state;
      if(req.body.zipCode)address.zipCode = req.body.zipCode;
      if(req.body.phoneNumber)address.phoneNumber = req.body.phoneNumber;
      if(req.body.deliverInstructions)address.deliverInstructions = req.body.deliverInstructions;
      if(req.body.securityCode)address.securityCode = req.body.securityCode;
        
      await foundAddress.save();

      res.json({
        success: true,
        message: "Succesfully updated the address"
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
