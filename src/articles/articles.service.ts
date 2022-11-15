import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Article } from './article.entity/article.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article) private articleRepository: Repository<Article>,
  ) {}

  async getArticles(): Promise<Article[]> {
    return await this.articleRepository.find();
  }

  async getArticle(id: number): Promise<Article[]> {
    return await this.articleRepository.find({
      select: ['title', 'content', 'author'],
      where: [{ id: id }],
    });
  }

  saveArticle(article: Article): Promise<Article> {
    return this.articleRepository.save(article);
  }

  deleteArticle(article: Article): void {
    this.articleRepository.delete(article);
  }
}
