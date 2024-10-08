import express from 'express';
import morgan from 'morgan';
import config from './config';
import IAppRes from './types/IAppRes';
import routes from './routes';
import cors from 'cors';

// Create Express server
const app = express();

// Set PORT
app.set('port', config.port);

// parse json request body
app.use(express.json());
// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// Logger
app.use(morgan('dev'));

// Enable CORS
app.use(cors(config.corsOptions));

// Route Handlers
app.use('/', routes);

// 404 Handler
app.use(function (req, res, next) {
  const status = 404;
  const message = 'Resource not found';
  const errorResponse: IAppRes = {
    data: [],
    isError: true,
    errMsg: message,
  };
  res.status(status).send(errorResponse);
});

// Server Error 500 Handler
// Calling next(error) in any of the routes will call this function
app.use(
  (
    error: Error,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) => {
    // Incase of 500 Server Error
    // The Error is only logged in server and not sent to frontend
    console.error(error);
    const status = 500;
    const message =
      process.env.NODE_ENV === 'development'
        ? error.message
        : 'API Server Error';
    const errorResponse: IAppRes = {
      data: [],
      isError: true,
      errMsg: message,
    };
    res.status(status).send(errorResponse);
  }
);

export default app;