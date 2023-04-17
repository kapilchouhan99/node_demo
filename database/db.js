const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const dbUserName = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASS;
const url = `mongodb+srv://${dbUserName}:${dbPassword}@noti.iylbxd3.mongodb.net/noti?retryWrites=true&w=majority`;

exports.ConnectionWithMongodb = async () => {
  await mongoose
    .connect(url)
    .then(() => console.log("data base connect successfully"))
    .catch((error) => {
      console.log("data base not connect", error);
    });
};
