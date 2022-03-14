const router = require("express").Router();
const Contact = require("../models/Contact");

//POST
router.post("/contacts", async (req, res) => {
  try {
    const contact = new Contact({
      name:req.body.name,
      email:req.body.email,
      number:req.body.number,
      message:req.body.message,
    });
  
    await contact.save();

    res.json({
      success: true,
      message: "Successfully created a new Request",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

//GET request
router.get("/contacts", async (req, res) => {
  try {
    let contacts = await Contact.find();
    res.json({
      success: true,
      contacts: contacts,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;
