import { Request, Response } from 'express';
import { GetAllCategoriesService } from '../services/GetAllCategoriesService';

export async function getAllCategoriesController(request: Request, response: Response) {
	const service = new GetAllCategoriesService();

	const categories = await service.execute();

	return response.json(categories);
} 
