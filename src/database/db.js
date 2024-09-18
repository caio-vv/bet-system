import mongoose from "mongoose";

const mongoDB = process.env.MONGODB;
const database = process.env.DATABASE;

const main = async () => {
  try {
    await mongoose.connect(mongoDB + database);
    console.log("conectado");
  } catch (error) {
    console.log(error);
  }
};

main();

export default mongoose;
