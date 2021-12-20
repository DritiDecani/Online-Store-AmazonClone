const router = require("express").Router();
const Product = require("../models/product");

const upload = require("../middlewares/upload-photo");
//POST
router.post("/products", upload.single("photo"), async (req, res) => {
  try {
    let product = new Product();
    product.title = req.body.title;
    product.description = req.body.description;
    product.photo = req.file.location;
    product.stockQuantity = req.body.stockQuantity;

    await product.save();

    res.json({
      status: true,
      message: "Succesfully saved",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.nessage,
    });
  }
});

//GET
//GET single
//PUT update
//Delete
module.exports = router;
