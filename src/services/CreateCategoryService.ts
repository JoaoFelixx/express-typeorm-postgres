import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

interface CategoryRequest {
  name: string;
  description: string;
}

export class CreateCategoryService {

  async execute({ description, name }: CategoryRequest): Promise<Category | Error> {
    const repo = getRepository(Category)

    const categoryAlreadyExists = await repo.findOne({ name });

    if (categoryAlreadyExists) return new Error('Category already exists');

    const category = repo.create({
      name, 
      description,
    })

    await repo.save(category);

    return category;
  }
}