import mongoose from "mongoose";

const connectDb = async () => {
  if (mongoose.connections[0].readyState) {
    return;
  }
  mongoose
    .connect(
      "mongodb+srv://vercel-admin-user:1@cluster0.3o51ig0.mongodb.net/OnlineVoting"
    )
    .then(() => console.log("Database connected!"))
    .catch((err) => console.log(err));
};
export default connectDb;
