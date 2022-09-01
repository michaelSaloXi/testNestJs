import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { CreateNewsDto } from "./dto/create.dto";
import { PaginationQueryDto } from "./dto/pagination.dto";
import { UpdateNewsDto } from "./dto/update.dto";
import NewsService from "./news.service";



@Controller('news')
export default class NewsController {
    constructor(private newsService: NewsService){}

    @Get()
    getAll(@Query() query: {page: number, limit: number}){
        return this.newsService.getAll(query)
    }

    @Post()
    create(@Body() data: CreateNewsDto){
        return this.newsService.create(data)
    }
    @Put(':id')
    update(@Param('id') id: number,@Body() data: UpdateNewsDto){
        return this.newsService.update(id,data)
    }
    @Delete(':id')
    delete(@Param('id') id: number){
        return this.newsService.delete(id)
    }

}