const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require("path")


// Parse JSON request bodies
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));


//To check connection status
app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to the API!' });
});



// Define User schema and model
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    profession: String,
    password: String
});

const User = mongoose.model('User', userSchema);




// Define API endpoint for sign up
app.post('/backsignup', async (req, res) => {
    const { name, email, phone, profession, password } = req.body;

    // Connect to MongoDB
    await connectToDatabase();

    // Create a new user instance
    const newUser = new User({
        name,
        email,
        phone,
        profession,
        password
    });

    // Save the user to the database
    try {
        await newUser.save();
        res.json({ message: 'Signup successful' });
        console.log("User saved:", newUser);
    } catch (error) {
        console.error("Error saving user:", error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
