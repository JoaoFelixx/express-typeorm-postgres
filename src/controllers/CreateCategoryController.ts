import { Request, Response } from 'express';
import { CreateCategoryService } from '../services/CreateCategoryService';

export async function createCategoryController(request: Request, response: Response) {
	try {
		const { name, description } = request.body;

		const service = new CreateCategoryService();

		const result = await service.execute({ name, description })

		if (result instanceof Error) return response.status(400).json(result.message)

		return response.status(201).json(result)
	} catch (err) {
		console.log(err);
		return response.sendStatus(400)
	}
}