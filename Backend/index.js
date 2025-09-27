import express from "express";
import mongoose from "mongoose";
import session from "express-session";
import LocalStrategy from "passport-local";
import passport from "passport";
import User from "./Models/User.js";
import pet from "./Routes/pet.js";
import user from "./Routes/user.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = 3000;

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["*"],
  credentials: true,
};

app.use(cors(corsOptions));

main()
  .then((res) => {
    console.log("Connection successfull");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fureverHome");
}

const sessionOptions = {
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    secure:false,
  },
};
app.use(express.json());
app.use(session(sessionOptions));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use("/v1/users", user);
app.use("/v1/pets", pet);

app.get("/", (req, res) => {
  res.send("Working");
});

app.listen(port, () => {
  console.log("Listening to port 3000");
});
