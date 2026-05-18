import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {type:String, unique:true,  required:true},
  description: {type:String, required:true},
  date: {type:String  , default:new Date().toISOString().split("T")[0]},
  genre: {type:String, required:true},
  imageURL: {type:String, required:true}, 
  rating: {type:Number, default:1, min:1, max:5}, 
  cast: {type:[String], required:true},
  plot: {type:String, required:true},
}, {timestamps:true});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
