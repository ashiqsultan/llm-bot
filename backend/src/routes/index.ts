import { Router } from "express";
import pong from "../controller/pong";
import chatcontroller from "../controller/chat";
import tempembeddingtest from "../controller/tempembeddingtest";

let routes = Router();

// Health check route. Returns 200
routes.get("/ping", pong);

routes.post("/chat", chatcontroller);
routes.post("/test-embedding", tempembeddingtest);


export default routes;
