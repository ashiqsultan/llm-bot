import { Router } from "express";
import pong from "../controller/pong";
import chatcontroller from "../controller/chat";
import tempembeddingtest from "../controller/tempembeddingtest";
import createRecord from "../controller/createRecord";
import semanticSearch from "../controller/semanticSearch";
import getAllArticles from "../controller/getAllArticles";
import getArticleById from "../controller/getArticleById";

let routes = Router();

// Health check route. Returns 200
routes.get("/ping", pong);

routes.post("/chat", chatcontroller);
routes.post("/test-embedding", tempembeddingtest);
routes.post("/createRecord", createRecord);
routes.post("/semanticSearch", semanticSearch);

routes.get("/articles",getAllArticles);
// routes.get("/articles/:id",getArticleById);

export default routes;
