import mongoose from "mongoose";



const connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@cluster0-shard-00-00.j66cg.mongodb.net:27017,cluster0-shard-00-01.j66cg.mongodb.net:27017,cluster0-shard-00-02.j66cg.mongodb.net:27017/DOCTOR_PATIENT_RECORDS?ssl=true&replicaSet=atlas-9c5mt6-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
        console.log("database connected successfully")
    } catch (error) {
        console.log("Error: ", error.message)
    }
  
};

export default connection;