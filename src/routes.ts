import { Router } from 'express';
import { createCategoryController } from './controllers/CreateCategoryController';
import { GetAllCategoriesController } from './controllers/GetAllCategoriesController';
import { DeleteCategoryController } from './controllers/DeleteCategoryController';
import { UpdateCategoryController } from './controllers/UpdateCategoryController';
import { createVideoController } from './controllers/CreateVideoController';
import { GetAllVideosController } from './controllers/GetAllVideosController';

const routes = Router();

routes.get('/categories', GetAllCategoriesController.handle)
routes.put('/categories/:id', UpdateCategoryController.handle)
routes.post('/categories', createCategoryController)
routes.delete('/categories/:id', DeleteCategoryController.handle)

routes.post('/videos', createVideoController)
routes.get('/videos', GetAllVideosController.handle)

export default routes