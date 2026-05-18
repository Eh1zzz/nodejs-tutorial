import express from "express";
import path from "path";
import fs from "fs";  
import { fileURLToPath } from "url";
import mongoose from "mongoose";
import Movie from "./schema/movie.js";

console.log(import.meta.url);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));  

app.set("view engine", "ejs");  
app.set("views", path.join(__dirname, "templates"));  

app.use(express.static("public")); 

const MONGO_URI = process.env.MONGO_DB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};  

await connectDB();  

const save = "Donate to save the Planet";

app.get("/",(req,res)=>{
  const mongoURI   = process.env.MONGO_DB_URI;
  // console.log(mongoURI);
  res.render("index", {save});
});

// app.get("/about",(req,res)=>{
//   res.render("about");
// });

// app.get("/contact",(req,res)=>{
//   res.render("contact");
// });

app.post("/movie",(req,res)=>{
  const data = req.body;
  console.log(data);
  const {title, description, date, genre, imageURL, rating, cast, plot} = data;
  const movie = new Movie({title, description, date, genre, imageURL, rating, cast, plot});
  movie.save().then(()=>{
    return res.status(200).json({message:"Movie added successfully"});
  }).catch((error)=>{
    console.error("Save failed:",error.name, error.message);
    return res.status(500).json({message:"Failed to add movie"});
  });

});

app.get("/movie", async (req,res)=>{
  const movie = await Movie.find(); 
  return res.status(200).json(movie);
});

app.put("/movie/:id",async (req,res)=>{
  try{
    const {title, description, date, genre, imageURL, rating, cast, plot} = req.body;
    const movie = await Movie.findByIdAndUpdate(req.params.id, {title, description, date, genre, imageURL, rating, cast, plot}, {new: true});
    if(!movie){
      return res.status(404).json({message:"Movie not found"});
    }
    return res.status(200).json({message:"Movie updated successfully"});
  }catch(error){
    console.error("Update failed:",error.name, error.message);  
    return res.status(500).json({message:"Failed to update movie"});
  }
});

app.delete("/movie/:id",async (req,res)=>{
  try{
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if(!movie){
      return res.status(404).json({message:"Movie not found"});
    }
    return res.status(200).json({message:"Movie deleted successfully"});
  }catch(error){
    console.error("Delete failed:",error.name, error.message);  
    return res.status(500).json({message:"Failed to delete movie"});
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
}); 
