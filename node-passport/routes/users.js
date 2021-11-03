import express from "express";
import passport from "passport";
const router = express.Router();
import Users from "../models/User.js";

router.get("/", function (req, res, next) {
  res.send("respond with a resource"); });

router.post("/", (req, res) => {
	if (req.user) { res.json(req.user); } 
	else { res.json([]); } });

router.post("/login", passport.authenticate("local"), (req, res) => {
  console.log(req.user);
  res.json({ userid: req.user.userid, password: req.user.password }); });

router.post("/join", async (req, res) => {
	const { userid, password, email } = req.body;
  const userVO = new Users(req.body);
  userVO.save((err, data) => { res.json(data); });
});

router.post("/logout", async (req, res) => {
  await req.logout();
  await req.session.destroy((err)=>{
	res.send({ message: "logout OK!!" });
  })
  
});
export default router;