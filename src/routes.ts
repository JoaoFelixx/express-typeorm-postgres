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

routes.get('/categories', getAllVideosController)
routes.put('/categories/:id', updateCategoryController)
routes.post('/categories', createCategoryController)
routes.delete('/categories/:id', deleteCategoryController)

routes.post('/videos', createVideoController)
routes.get('/videos', getAllCategoriesController)

export default routes