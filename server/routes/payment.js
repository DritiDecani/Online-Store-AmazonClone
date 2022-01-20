const router = require("express").Router();
const moment = require("moment");
const stripe=require("stripe");
const verifyToken=reuire("../middlewares/verify-token");
const Order=require("../models/order");

const SHIPMENT = {
    normal: {
        price: 13.98,
        days: 7
    }, 
    fast: {
        price: 49.98,
        days: 3
    }
};

function shipmentPrice(shipmentOption) {
    let estimated = moment().add(shipmentOption.days, "d").format("dddd MMMM Do")

    return { estimated, price: shipmentOption.price }
}

router.post("/shipment", (req, res) => {
    let shipment;
    if(req.body.shipment === "normal") {
        shipment = shipmentPrice(SHIPMENT.normal);
    } else {
        shipment = shipmentPrice(SHIPMENT.fast);
    }

    res.json({ 
        success: true,
        shipment: shipment
    });
});

router.post("/payment",(req,res)=>{
    let totalPrice=Math.round(req.body.totalPrice*100);
    stripe.costumers
    .create({
        email:req.body.decoded.email
    })
    .then(costumer=>{
        return stripe.costumers.createSource(costumer.id,{
            source:"tok_visa"
        });
    })
    .then(source=>{
        return stripe.charges.create({
            amount:totalPrice,
            currency:"eur",
            costumer:source.costumer
        });
    })
    .then(async charge=>{
        let order=new Order();
        let cart=req.body.cart;

        cart.map(product=>{
            order.products.push({
                productID:product._id,
                quantity:parseInt(product.quantity),
                price:product.price
            });
        })
        order.owner=req.decoded._id;
        order.estimatedDelivery=req.body.estimatedDelivery;
        await order.save();

    })

    .catch(err=>{
        res.status(500).json({
            succes:false,
            message:err.message
        });
    });
});


module.exports = router;