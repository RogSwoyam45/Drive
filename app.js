const express = require('express');
const userroutes = require('./Routes/user.routes');
const dotenv = require('dotenv');

dotenv.config();


const connectToDB = require('./config/db');
connectToDB();

const cookieParser = require('cookie-parser');


const indexrRouter = require('./Routes/index.routes');

const fileUpload = require('express-fileupload');
const {storage} = require('./config/appwrite.config');


const app = express();


app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.set ('view engine' , 'ejs');

app.use(fileUpload());
app.use('/user' , userroutes)
app.use(cookieParser());

app.use('/',indexrRouter)





// app.get('/register' , (req , res) => {
//     res.render('register');
// })




app.listen(3000 , () => {
    console.log('Server is running on port 3000');
})