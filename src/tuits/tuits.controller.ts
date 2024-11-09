import { Controller, Get, Param } from '@nestjs/common';

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
}
