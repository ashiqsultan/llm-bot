import { Router } from 'express';
import pong from '../controller/pong';
import chatcontroller from '../controller/chat';
import tempembeddingtest from '../controller/tempembeddingtest';
import createArticle from '../controller/createArticle';
import semanticSearch from '../controller/semanticSearch';
import getAllArticles from '../controller/getAllArticles';
import getArticleById from '../controller/getArticleById';

let routes = Router();

// Health check route. Returns 200
routes.get('/ping', pong);

routes.post('/chat', chatcontroller);
routes.post('/test-embedding', tempembeddingtest);
routes.post('/semanticSearch', semanticSearch);

routes.post('/article', createArticle);
routes.get('/article', getAllArticles);
routes.get('/article/:id', getArticleById);

export default routes;
