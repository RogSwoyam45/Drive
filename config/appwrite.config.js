const { Client, Storage } = require('appwrite');
const multer = require('multer');


const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT) 
    .setProject(process.env.APPWRITE_PROJECT_ID) 
    .setSession('');
    // .setKey(process.env.APPWRITE_API_KEY);
    // .setBucket(process.env.APPWRITE_STORAGE_BUCKET_ID);

const storage = new Storage(client);

const upload = multer({ dest: storage })

module.exports = {storage , upload};