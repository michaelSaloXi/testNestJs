import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import CategoriesService from "./categories.service";
import { CreateCategoriesDto } from "./dto/create.dto";
import { UpdateCategoriesDto } from "./dto/update.dto";

@Controller('categories')
export default class CategoriesController {
    constructor(private categoriesService: CategoriesService){}

    @Get()
    getAll(){
        return this.categoriesService.getAll()
    }

    @Post()
    create(@Body() data: CreateCategoriesDto){
        return this.categoriesService.create(data)
    }
    @Put(':id')
    update(@Param('id') id: number,@Body() data: UpdateCategoriesDto){
        return this.categoriesService.update(id,data)
    }
    @Delete(':id')
    delete(@Param('id') id: number){
        return this.categoriesService.delete(id)
    }

}