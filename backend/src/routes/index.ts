import { Router } from "express";
import pong from "../controller/pong";
import chatcontroller from "../controller/chat";

let routes = Router();

// Health check route. Returns 200
routes.get("/ping", pong);

routes.post("/chat", chatcontroller);


export default routes;
