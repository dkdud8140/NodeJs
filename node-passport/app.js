 import createError from "http-errors";
 import express from "express";
 import path from "path";
 import cookieParser from "cookie-parser";
 import logger from "morgan";
 
 import session from "express-session";
 import passport from "passport";
 import passportConfig from "./modules/PassportConfig.js";
 
 import indexRouter from "./routes/index.js";
 import usersRouter from "./routes/users.js";
 import cors from "cors";
 import mongoose from "mongoose";
 
 const dbConn = mongoose.connection;
 dbConn.once("open", () => {
   console.log("mongoDB OK!!");
 });
 dbConn.on("error", () => {
   console.err;
 });
 mongoose.connect("mongodb://localhost:27017/users");
 
 const app = express();
 
 const whiteURL = ["http://localhost:3000"];
 const corsOption = {
   origin: (origin, callback) => {
	 const isWhiteURL = whiteURL.indexOf(origin) !== -1;
	 callback(null, isWhiteURL);
   },
   credentials: true,
 };

 app.disable("x-powered-by");
 app.set("views", path.join("./views"));
 app.set("view engine", "pug");
 
 app.use(logger("dev"));
 app.use(express.json());
 app.use(express.urlencoded({ extended: false }));
 app.use(cookieParser());
 app.use(express.static(path.join("./public")));
 
 const oneDay = 1000 * 60 * 60 * 24;
 app.use(
   session({
	 secret: "aa1234",
	 resave: false,
	 saveUninitailized: true,
	 cookie: { secure: false, httpOnly: false, maxAge: oneDay }, 
   })
 );
 app.use(passport.initialize());
 app.use(passport.session());
 passportConfig();
 app.use((req, res, next) => {
   res.header("Access-Controll-Allow-Origin", "http://localhost:3000");
   next();
 });
 app.use(cors(corsOption));
 app.use("/", indexRouter);
 app.use("/users", usersRouter);
 app.use(function (req, res, next) {
   next(createError(404));
 });

 app.use(function (err, req, res, next) {
   // set locals, only providing error in development
   res.locals.message = err.message;
   res.locals.error = req.app.get("env") === "development" ? err : {};
 
   // render the error page
   res.status(err.status || 500);
   res.render("error");
 });
 
 export default app;