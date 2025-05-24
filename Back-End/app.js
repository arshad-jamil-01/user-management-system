const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())

mongoose.connect("mongodb://localhost:27017/first-project")
.then(()=>{
    console.log("connected to mongodb")
}).catch((err)=>{
    console.log(err)
});


const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})

const UserModel = mongoose.model("user", userSchema);


app.get("/", async (req, res)=>{
    await UserModel.find()
    .then((users)=>{
        res.status(200).json({message:"user fetched successfully", users})
    })
    .catch((err)=>{
        res.status(500).json({message:"user not fetched", err})
    })
});


app.post("/CreateUser", async (req, res)=>{

    const {name, email, age} = req.body;
    const users = new UserModel({
        name,
        email,
        age
    })
     await users.save()
    .then((users)=>{
        res.status(200).json({message:"user created successfully", users})
    })
    .catch((err)=>{
        res.status(500).json({message:"user not created", err})
    })
});


app.get("/getUser/:id",  (req, res) => {
    const id = req.params.id;
    UserModel.findById(id)
    .then((users)=>{
        res.status(200).json({message:"user fetched successfully", users})
    })
    .catch((err)=>{
        res.status(500).json({message:"user not fetched", err})
    })
});



app.put("/UpdateUser/:id", async (req, res) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({ message: "User updated", user: updatedUser });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: "Update failed", error });
  }
});



app.delete("/deleteUser/:id", async (req, res)=>{

     const id = req.params.id;
    try{
     const deletedUser = await UserModel.findByIdAndDelete(id)
     res.status(200).json({
        message:"user Delete succesfully",
        deletedUser
     })
    }catch(err){
      err
    }
})



app.listen(3000, ()=>{
    console.log("server is running om port:3000")
})



