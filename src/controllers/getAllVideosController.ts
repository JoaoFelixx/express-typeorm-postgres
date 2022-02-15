import { Request, Response } from 'express';
import { GetAllVideosService } from '../services/GetAllVideosService';

export async function getAllVideosController(request: Request, response: Response) {
	try {
		const service = new GetAllVideosService();

		const categories = await service.execute();

		return response.json(categories);
	} catch (err) {
		return response.sendStatus(400)
	}
} 
