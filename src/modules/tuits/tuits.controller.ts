import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { TuitsService } from './tuits.service';
import { Tuit } from './tuit.entity';

@Controller('tuits')
export class TuitsController {
  constructor(private readonly tuitsService: TuitsService) {}

  @Get()
  getTuits(@Query() filterQuery): Tuit[] {
    const { rearchTerm, orderBy } = filterQuery;

    return this.tuitsService.getTuits();
  }

  @Get(':id') // Ruta para obtener un tuit específico
  getTuit(@Param('id') id: string): Tuit { // Añadido el parámetro id en @Param
    return this.tuitsService.getTuit(id);
  }

  @Post()
  createTuit(@Body('message') message: string){
    return this.tuitsService.createTuit(message);
  }

  @Patch(':id')
  updateTuit(@Param('id') id: string, @Body('message') tuit): Tuit {
    return this.tuitsService.updateTuit(id, tuit);
  }

  @Delete(':id')
  removeTuit(@Param('id') id: string) {
    return this.tuitsService.removeTuit(id);
  }
}
