
// const {storage} = require('../config/appwrite.config');

const storage = multer.memoryStorage();    
const upload = multer({
    storage: storage,
    
});

module.exports = upload;