import { Express } from 'express';
import swaggerUi from 'swagger-ui-express';
import baseInfo from './baseInfo.json';
import servers from './servers.json';
import paths from './paths';
import components from './components';

const swaggerDoc = Object.assign(baseInfo, servers, components, paths);

const swagger = (app: Express) => {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
};

export default swagger;
