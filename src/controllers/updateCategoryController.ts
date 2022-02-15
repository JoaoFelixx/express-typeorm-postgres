import { Request, Response } from 'express';
import { UpdateCategoryService } from '../services/UpdateCategoryService';

export async function updateCategoryController(request: Request, response: Response) {
	try {
		const {
			params: { id },
			body: { name, description }
		} = request;

		const service = new UpdateCategoryService();

		const result = await service.execute({ id, name, description });

		if (result instanceof Error) return response.status(204).json(result.message);

		return response.sendStatus(204)
	} catch (err) {
		return response.sendStatus(400)
	}
} 