const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express()

mongoose.connect('mongodb+srv://root:md28KwCEyVrjKh5@amazonclone.pjais.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
 (err) =>{
    if (err){
        console.log(err);
    }else{
        console.log("Connected to the Database")
    }
  }
);

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//retrive
app.get('/',(req , res) =>{
    res.json("Hello amazon clone");
});
//send data from frontend to backend
app.post("/" , (req, res)=>{
    console.log(req.body.name);

});

app.listen(3000, err => {
    if (err) {
        console.log(err);
    } else {
        console.log("Listening on PORT", 3000);
    }
});