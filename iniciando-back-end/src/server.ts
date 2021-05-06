import 'reflect-metadata';
import express, { json } from 'express';
import './database';
import routes from './routes';
import uploadConfig from './config/upload';

const app = express();
app.use(json());
app.use('/files', express.static(uploadConfig.directory))
app.use(routes);


app.listen(3333, () => {
  console.log(' server started in port 3333');
});
