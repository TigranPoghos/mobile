const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crypto = require("crypto");
const nodemailer = require("nodemailer");

const app = express();
const port = 8081;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require("jsonwebtoken");
const { error } = require("console");

mongoose.connect("mongodb+srv://Tigran2002:Tigran2002@cluster0.ydaj62f.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("connected to MongoDB");
}).catch((err) => {
    console.log("error connecting to MongoDB", err);
});


app.listen(port, () => {
    console.log("Server is running on port 8081");
});


const User = require("./models/user");


//function to send Verification email to the user
const sendVerificationEmail = async (email, verificationToken) => {
    //create a nodemailer transport
    const transporter = nodemailer.createTransport({
        //configure the email service
        service: "gmail",
        auth: {
            user: "tigran2002poghosyan@gmail.com",
            pass: "",
        }
    })

    //compose the email message
    const mailOptions = {
        from: "tigran2002poghosyan@gmail.com",
        to: email,
        subject: "Email Verification",
        text: `Please the following link to verify your email : http://localhost:8081/verify/${verificationToken}`
    }


    //send the email
    try {
        await transporter.sendMail(mailOptions)
    } catch (error) {
        console.log("Error sending verification email", error)
    }
}



//endpoint to register in the app
app.post("/register", async (req, res) => {
    try {
        const { name, surname, address, email, password } = req.body;

        //check if the email already registered
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already registered" });
        }

        //create a new user
        const newUser = new User({ name, surname, address, email, password });

        //generate and store the verification token
        newUser.verificationToken = crypto.randomBytes(20).toString("hex");

        //safe the user to the database
        await newUser.save();

        //send verification email to the user
        sendVerificationEmail(newUser.email, newUser, verificationToken)
    } catch (error) {
        console.log("error registering user", error);
        res.status(500).json({ message: "Registration failed" });
    }
})



//endpoint to verify email
app.get("/verify/:token", async(req,res) => {
    try {
        const token = req.params.token;

        //find the token with the given verification token
        const user = await User.findOne({verificationToken: token});
        if (!user) {
            return res.status(404).json({message: "Invalide verification token"})
        }

        //mark the user as verified
        user.verified = true;
        user.verificationToken = undefined;

        await user.save();

        res.status(200).json({message:"Email verified successfully"});
    } catch(error) {
        res.status(500).json({message: "Email verification failed"});
    }
})