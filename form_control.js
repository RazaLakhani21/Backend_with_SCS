const express = require("express");
const morgan = require("morgan");
const userModel = require("./models/user");
const dbConnection = require("./config/db");
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("This is the Home Page");
});

app.get("/form", (req, res) => {
  res.render("form");
});

app.get("/register", (req, res) => {
  res.render("register");
});

// app.post("/register", async (req, res) => {
//   console.log("📦 Request Body Received:", req.body);  // already added

//   try {
//     const user = await userModel.create(req.body);
//     res.send("User registered successfully");
//   } catch (err) {
//     console.error("❌ Error creating user:", err);  // 👈 See the actual error here
//     res.status(500).send("Server Error: " + err.message); // Optional: Send error back
//   }
// });

app.post("/register", async (req, res) => {
  const { first, last, email, password, phone, country, about, updates } =
    req.body;

  const newUser = await userModel.create({
    first: first,
    last: last,
    email: email,
    password: password,
    phone: phone,
    country: country,
    about: about,
    updates: updates,
  });
  console.log("User Registered", req.body);
  res.send(newUser);
});

app.get("/get-users", (req, res) => {
  // userModel.find({first: 'a'}).then((users)=>{    // .find() -> this method will work as finding all users that are searched for.
  userModel
    .findOne({
      first: "1",
    })
    .then((users) => {
      // .findOne() -> this method will work as finding One user that is searched for.
      console.log(users);
      res.send(users);
    });
});

app.get("/update-user", async (req, res) => {
  await userModel.findOneAndUpdate({ first: "a" }, { email: "c@c.com" });
  res.send("user updated");
});

app.get("/delete-user", async (req, res) => {
  await userModel.findOneAndDelete({ first: "a" });
  res.send('User Deleted Successfully')
});

// not to show any private information like "Password" in the url, we'll use 'app.post' instead of 'app.get'

// app.get('/get-form-data', (req, res)=>{
app.post("/get-form-data", (req, res) => {
  // console.log(req.query);
  console.log(req.body);
  res.send("Data Recieved");
});

app.listen(3000);
