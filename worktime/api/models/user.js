const { verify } = require("jsonwebtoken");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    surname: {
        type:String,
        required:true,
    },
    address: {
        type:String,
        required:true,
        unique:true,
    },
    email: {
        type:String,
        required:true,
        unique:true,
    },
    password: {
        type:String,
        required:true,
    },
    verified: {
        type:Boolean,
        default:false,
    },
    verificationToken:String,
    addresses:[
        {
            name:String,
            mobileNo:String,
            houseNo:String,
            street:String,
            landmark:String,
            city:String,
            country:String,
            postalCode:String,
        }
    ],
    orders: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order",
    },
    createdAd: {
        type:Date,
        default:Date.now,
    }
});


const User = mongoose.model("User", userSchema);

module.exports = User