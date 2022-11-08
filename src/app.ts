import express from 'express';
import config from 'config';
import connect from './utils/connect';
import logger from './utils/logger';
import { routes } from './routes';

const port = config.get<string>("port");
const app = express();

app.listen(port, async () => {
    logger.info(`App is Running at http://localhost:${port}}`);
    
    // await connect();

    routes(app);
});

