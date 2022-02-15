import { Request, Response } from 'express';
import { CreateVideoService } from '../services/CreateVideoService';

export async function createVideoController(request: Request, response: Response) {
	try {
		const { 
			name, 
			duration,
			description,  
			category_id,
		} = request.body;

		const service = new CreateVideoService();

		const result = await service.execute({ 
			name,
			duration, 
			description, 
			category_id 
		})

		if (result instanceof Error) return response.status(400).json(result.message)

		return response.status(201).json(result)
	} catch (err) {
		return response.sendStatus(400)
	}
}