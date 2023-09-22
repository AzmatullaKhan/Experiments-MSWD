const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("./models/UserSchema");

const port = process.env.PORT || 4000;
const Uri = "mongodb+srv://gowtham:abcd1234@mswd-class.gygsuak.mongodb.net/users";

const app = express();
app.use(express.json());

mongoose.connect(Uri, { useNewUrlParser: true, useUnifiedTopology: true });
const conn = mongoose.connection;
conn.on("error", console.error.bind(console, "Error while connecting to the database"));
conn.once("open", function () {
  console.log("Connected to the database......");
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, POST, GET, PUT, PATCH, DELETE"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/adduser", async (request, response) => {
  console.log('In addUser');
  const newUser = new UserModel(request.body);

  try {
    const existingUser = await UserModel.findOne({ email: newUser.email }); // Check if a user with the same email exists
    
    if (existingUser) {
      console.log(`Existing user ${existingUser}`);
      return response.json({ success: false, message: "User with this email already exists" });
    } else {
      await newUser.save();
      response.json({ success: true, message: "User added successfully" });
    }
  } catch (error) {
    console.error(error);
    response.status(500).json({ success: false, message: "Error adding user" });
  }
});


app.get("/users", async (req, res) => {
  try {
    console.log('Find() method');
    console.log(await UserModel.find({})); // Use await here
    const users = await UserModel.find({});
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server is started at ${port}`);
});
