const express=require("express");
const mongoose=require("mongoose");
const app=express();
const port=8000;
//adding middlewares
app.use(express.json());
//get request
app.get("/",(req,res)=>{
    res.send(`<h1>this is heading</h1>`)
})
//post request
app.post("/car",(req,res)=>{
    res.send("response posted")
})


app.listen(port,()=>{
    console.log("App started");
})
mongoose.connect("mongodb://localhost:27017/backendfirstapp",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log("error connecting to db ",err);

})

