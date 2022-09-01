import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
} from '@nestjs/common';
import { StoryUpdateDto } from './dto/update.dto';
import StoryService from './story.service';

@Controller('news')
export default class StoryController {
  constructor(private storyService: StoryService) {}

  @Get(':storyId')
  getAll(@Param('storyId') storyId: number) {
    return this.storyService.getAll(storyId);
  }

  @Put(':storyId')
  update(@Param('storyId') storyId: number, @Body() data: StoryUpdateDto) {
    return this.storyService.update(storyId, data);
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.storyService.delete(id);
  }
}
