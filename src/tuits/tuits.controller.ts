import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';

@Controller('tuits')
export class TuitsController {//resive peticiones http:...
    @Get()
    getTuits(): string {
        return 'Hello from Tuitter';
    }

    @Get(':id') //tuit1
    getTuit(@Param('id') id: string): string{//Decorador que se obtiene desde el cliente
        return `Your tuit id is ${id}`;
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    createTuit(@Body('message')  message: string){
        return `Your tuit was ${message}`;
    }

    @Patch(':id')
    updateTuit(@Param('id') id: string, @Body() tuit): string {
        return `The tuir ${id} has been update`;
    }

    @Delete(':id')
    deleteTuit(@Param('id') id: string): string {
        return `The tuir ${id} has been delete`;
    }
}
