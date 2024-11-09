import { Controller, Get } from '@nestjs/common';

@Controller('tuits')
export class TuitsController {//resive peticiones http:...
    @Get()
    getTuits() {
        return 'Hello from Tuitter';
    }
}
