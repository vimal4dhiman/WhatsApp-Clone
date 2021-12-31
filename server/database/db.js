import mongoose from "mongoose";

const connection = async (USERNAME, PASSWORD) => {
  const URL = `mongodb+srv://vimaldhiman:${PASSWORD}@chatapp.1k8to.mongodb.net/WHATSAPPCLONE?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    });
    console.log(`Database connected successfully`);
  } catch (error) {
    console.log(`Error while connecting MongoDB `, error);
  }
};

export default connection;
