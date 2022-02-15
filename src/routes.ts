import { Router } from 'express';
import {
  createVideoController,
  getAllVideosController,
  deleteCategoryController,
  updateCategoryController,
  createCategoryController,
  getAllCategoriesController,
} from './controllers';

const routes = Router();

routes.get('/categories', getAllCategoriesController)
routes.put('/categories/:id', updateCategoryController)
routes.post('/categories', createCategoryController)
routes.delete('/categories/:id', deleteCategoryController)

routes.post('/videos', createVideoController)
routes.get('/videos', getAllVideosController)

export default routes