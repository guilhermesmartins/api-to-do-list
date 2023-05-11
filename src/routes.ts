import { Router, Request, Response } from 'express';
import {
  getTasks,
  saveTask,
  getTask,
  updateTask,
  finishedTask,
} from './controller/TasksController';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'Hello world' });
});

routes.get('/tasks', getTasks);
routes.get('/tasks/:id', getTask);
routes.post('/tasks', saveTask);
routes.put('/tasks/:id', updateTask);
routes.patch('/tasks/:id', finishedTask);

export default routes;
