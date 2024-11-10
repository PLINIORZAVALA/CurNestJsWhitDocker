import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { TuitsService } from './tuits.service';
import { Tuit } from './tuit.entity';
import { CreateTuitDtoTs, UpdateTuitDtoTs } from './dto';

@Controller('tuits')
export class TuitsController {
  constructor(private readonly tuitsService: TuitsService) {}

  @Get()
  getTuits(@Query() filterQuery): Tuit[] {
    const { rearchTerm, orderBy } = filterQuery;

    return this.tuitsService.getTuits();
  }

  @Get(':id') // Ruta para obtener un tuit específico
  getTuit(@Param('id') id: string): Tuit { 
    return this.tuitsService.getTuit(id);
  }

  @Post()
  createTuit(@Body() message: CreateTuitDtoTs): void{
    console.log(message instanceof CreateTuitDtoTs);
    
    return this.tuitsService.createTuit(message);
  }

  @Patch(':id')
  updateTuit(
    @Param('id') id: string, 
    @Body() tuit: UpdateTuitDtoTs): Tuit {
    return this.tuitsService.updateTuit(id, tuit);
  }

  @Delete(':id')
  removeTuit(@Param('id') id: string) {
    return this.tuitsService.removeTuit(id);
  }
}
