const express=require("express");
const app=express();


app.use("/user",[
    (req,res,next)=>{
        console.log("handling the route user!!");
        
        next();
         
    },
    (req,res,next)=>{
        console.log("hanlding the route user2");
        // res.send("2nd response");
        next();
    },
],[
     (req,res,next)=>{
        console.log("hanlding the route user3");
        // res.send("3rd response");
        next();
    },
     (req,res,next)=>{
        console.log("hanlding the route user4");
        res.send("4th response");
        next();
    },
])

app.listen(7777,()=>{
    console.log("server is running on port 7777");
})