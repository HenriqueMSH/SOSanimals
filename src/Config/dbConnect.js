import mongoose from "mongoose";

async function conectaDataBase() {
    mongoose.conect("mongodb+srv://matheusartur1919:<Lwb7y5wBAaZhk1HX>@cluster0.5qpqivx.mongodb.net/sosanimals?retryWrites=true&w=majority&appName=Cluster0")

    return mongoose.connection;
}

export default conectaDataBase;