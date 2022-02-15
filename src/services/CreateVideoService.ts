import { getRepository } from "typeorm";
import { Video } from "../entities/Video";
import { Category } from "../entities/Category";

interface VideoRequest {
  name: string;
  description: string;
  duration: number;
  category_id: string;
}

export class CreateVideoService {

  async execute({ 
    name, 
    duration, 
    description, 
    category_id ,
  }: VideoRequest): Promise<Video | Error> {
    const repoVideos = getRepository(Video)
    const repoCategory = getRepository(Category)

    const hasId = await repoCategory.findOne(category_id); 

    if (!hasId) return new Error('Category does not exists');

    const video = repoVideos.create({
      name, 
      description,
      duration,
      category_id,
    })

    await repoVideos.save(video);

    return video;
  }
}