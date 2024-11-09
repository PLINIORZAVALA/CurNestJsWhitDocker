import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('tuits')
export class TuitsController {//resive peticiones http:...
    @Get()
    getTuits(): string {
        return 'Hello from Tuitter';
    }

    @Get(':id') //tuit1
    getTuit(@Query() filterQuery): string{//Decorador que se obtiene desde el cliente
        const { searchTerm, orderBy } = filterQuery;
        return `All ${searchTerm} tuits ordered by ${orderBy}`;
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    createTuit(@Body('message')  message: string){
        return `Your tuit was ${message}`;
    }

    @Patch(':id')
    updateTuit(@Param('id') id: string, @Body() tuit): string {
        return `The tuit ${id} has been update`;
    }

    @Delete(':id')
    deleteTuit(@Param('id') id: string): string {
        return `The tuit ${id} has been delete`;
    }
}
