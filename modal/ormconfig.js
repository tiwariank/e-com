import mongoose  from "mongoose";

async function connection() {
    var db;
    try {
        db = await mongoose.connect("mongodb+srv://ankitt969:ank@5668@cluster0.ldxeu.mongodb.net/quizzes?retryWrites=true&w=majority",
         { useNewUrlParser: true },{ useUnifiedTopology: true },{ useUnifiedTopology: true });
        console.log("Connection Successful!");
        return db;
      
    } catch (e) {
        console.log("Connection failed !!");
    }
}

export default connection;