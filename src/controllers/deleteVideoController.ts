import { Request, Response } from 'express';
import { DeleteCategoryService } from '../services/DeleteCategoryService';

export async function deleteCategoryController(request: Request, response: Response) {
	try {
		const { id } = request.params;

		const service = new DeleteCategoryService();

		const result = await service.execute(id);

		if (result instanceof Error) return response.status(204).json(result.message);

		return response.sendStatus(204)
	} catch (err) {
		return response.sendStatus(400)
	}
}