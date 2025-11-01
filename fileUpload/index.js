//app create
const exrpress = require('express');
const app = exrpress();

//dotenv config
const dotenv = require('dotenv');
dotenv.config();

//port
const PORT = process.env.PORT || 8000;

//json middleware
app.use(exrpress.json());

//file upload middleware 
const fileUpload = require('express-fileupload');
app.use(fileUpload());

//cloudinary config
const {cloudinaryConnect} = require('./config/cloudinary');
cloudinaryConnect();

//database config
const dbConnect = require('./config/database');
dbConnect();

//route
const fileRoute = require('./routes/fileRoute');

//route mounting
app.use('/api/v1', fileRoute);

//server listening
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



