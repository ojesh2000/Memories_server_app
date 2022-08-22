import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import postRoutes from './Routes/posts.js'
import userRoutes from './Routes/users.js'
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(cors());//use cors before using anything else
app.use(bodyParser.json({ limit: "30mb" , extended: true }));  
app.use(bodyParser.urlencoded({ limit: "30mb" , extended: true }));
app.use("/posts" , postRoutes);
app.use("/user" , userRoutes);

app.get("/" , (req , res) => {
  res.send("Hello!! from backend");
});

const CONNECTION_URL = "mongodb+srv://Ojesh:sharma2000@posts.7rmrvae.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 1001;

mongoose.connect(CONNECTION_URL , { useNewUrlParser: true , useUnifiedTopology: true  })
  .then(() => {
    app.listen(PORT , () => console.log(`Server running on Port ${PORT}`));
  })
  .catch((error) => {
    console.log("error\n");
    console.log(error.message);
  });

   

