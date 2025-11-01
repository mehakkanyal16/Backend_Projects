const File=require('../models/file');

//local fileUpload -> handler
exports.localFileUpload=async(req,res)=>{
    try{
        //fetch file
        const file=req.files.file;
        console.log("file:", file);
        let path=__dirname+ "/files/"+ Date.now() +`.${file.name.split(".")[1]}`;
        console.log("path:", path);
        file.mv(path, async(err)=>{
            if(err){
                return res.status(500).send({message:"File upload failed", err});
            }
    });
        res.status(200).json({
            success:true,
            message:"File uploaded successfully",
        });


    }catch(err){
        res.status(500).json({
            success:false,
            message:"File upload failed",
        });
    }
}