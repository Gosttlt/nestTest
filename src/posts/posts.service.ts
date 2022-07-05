import { FilesService } from './../files/files.service';
import { PostModel } from './posts.model';
import { CreatPostDto } from './create-post.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(PostModel) private postRepository: typeof PostModel,
    private filesService: FilesService,
  ) {}
  async createPost(dto: CreatPostDto, image: any) {
    const fileName = await this.filesService.createFile(image);
    const post = await this.postRepository.create({ ...dto, image: fileName });
    return post;
  }
}
