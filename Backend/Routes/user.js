import express from "express"
import User from "../Models/User.js";
const route=express.Router();
import passport from "passport";
import ensureAuthenticated from "../Middleware/ensureAuthenticated.js";

route.get("/userid",ensureAuthenticated,async(req,res)=>{
  try{
    const result=req.user._id;
    console.log(result);
    res.json({userId:result});
  }catch(err){
    res.status(500).json({error:"Not Found"});
  }
})

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

route.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    if (err) {
      return res.status(404).json({ error: "Error" });
    }
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    req.login(user, (err) => {
      if (err) return next(err);
      return res.json({ success: true, user: user });
    });
  })(req, res, next);
});


export default route;