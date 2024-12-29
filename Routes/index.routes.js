const express = require('express');
const filemodel =require('../models/file.model');
const authmiddleware = require('../middlewares/auth');
const {storage , upload} = require('../config/appwrite.config');
const router = express.Router();


router.get('/home' , authmiddleware,(req , res) => {
    res.render('home');
})


router.post('/upload', upload.single('file'), async (req, res) => {
    res.send(req.files.file, req.body);
    
});






module.exports =router;