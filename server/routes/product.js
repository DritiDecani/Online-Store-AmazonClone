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
router.get("/products", async (req, res) => {
  try {
    let products = await Product.find();
    res.json({
      success: true,
      products: products,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

//GET single
router.get("/products/:id", async (req, res) => {
  try {
    let product = await Product.findOne({_id:req.params.id});
    res.json({
      success: true,
      product: product,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});
//PUT update
//Delete
module.exports = router;
