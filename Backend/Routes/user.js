import express from "express"
import User from "../Models/User.js";
const route=express.Router();
import passport from "passport";

route.get("/",(req,res)=>{
    console.log("Working");
    res.send("Yes");
});

route.post(
  "/signup",
  async (req, res) => {
    const {firstName, lastName, username, email, password } = req.body;
    console.log(email);
    console.log(req.body);
    try {
      const newUser = new User({ username, firstName, lastName, email });
      const registeredUser = await User.register(newUser, password);
      req.login(registeredUser, (err) => {
        if (err) return next(err);
        res.status(201).json({ message: "Signed In" });
      });
    } catch (err) {
      if (err.name === "UserExistsError") {
        return res.status(400).json({ error: "Username already exists" });
      } else if (err.keyPattern && err.keyPattern.email) {
        return res.status(400).json({ error: "Email id already in use" });}
      else return res.status(500).json({ error: "Internal server error" });
    }
  }
);

route.get("/checkauth", (req, res) => {
    console.log(req.user);
    console.log(req.isAuthenticated());
    res.send(req.isAuthenticated());
});

route.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(404).json({error:"Error"});
    }
    res.send("succesfull");
  });
});

route.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/login",
  }),
  async (req, res) => {
    console.log(req.isAuthenticated());
    try{
        res.send("Welcome! You are loggedin");
    }
    catch(err){
        console.log(err);
        res.status(404).json({error:"Invalid Credentials!!"});
    }
  }
);


export default route;