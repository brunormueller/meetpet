import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PetisService } from './petis.service';
import { CreatePetiDto } from './dto/create-peti.dto';
import { UpdatePetiDto } from './dto/update-peti.dto';

@Controller('petis')
export class PetisController {
  constructor(private readonly petisService: PetisService) {}

  @Post()
  create(@Body() createPetiDto: CreatePetiDto) {
    return this.petisService.create(createPetiDto);
  }

  @Get()
  findAll() {
    return this.petisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.petisService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePetiDto: UpdatePetiDto) {
    return this.petisService.update(+id, updatePetiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.petisService.remove(+id);
  }
}
