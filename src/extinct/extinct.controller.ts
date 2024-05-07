import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExtinctService } from './extinct.service';
import { CreateExtinctDto } from './dto/create-extinct.dto';
import { UpdateExtinctDto } from './dto/update-extinct.dto';

@Controller('extinct')
export class ExtinctController {
  constructor(private readonly extinctService: ExtinctService) {}

  @Post()
  create(@Body() createExtinctDto: CreateExtinctDto) {
    return this.extinctService.create(createExtinctDto);
  }

  @Get()
  findAll() {
    return this.extinctService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.extinctService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExtinctDto: UpdateExtinctDto) {
    return this.extinctService.update(+id, updateExtinctDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.extinctService.remove(+id);
  }
}
