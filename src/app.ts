import express, { Request, Response } from "express";
import cors from "cors"
// import { UserRoutes } from "./app/modules/user/user.route";
import { router } from "./app/routes";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
import cookieParser from "cookie-parser";
import passport from "passport";
import expressSession from "express-session";
import { envVars } from "./app/config/env";
import "./app/config/passport";
// import { envVars } from "./app/config/env";
// import httpStatus from 'http-status-codes';

const app = express();

app.use(expressSession({
    secret: envVars.EXPRESS_SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(express.json());
// for vercel deployment
app.set("trust proxy", 1);
// eta Cloudinary(image er form data) er jonno
app.use(express.urlencoded({ extended: true }))

// ekhane link dite hoy
app.use(cors({
    origin: envVars.FRONTEND_URL,
    credentials: true
}));

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "Welcome to Tour Management System Backend"
    })
})

app.use(globalErrorHandler)

app.use(notFound)

export default app;