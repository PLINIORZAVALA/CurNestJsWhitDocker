import { Injectable, NotFoundException } from '@nestjs/common';
import { Tuit } from './tuit.entity';
import { find } from 'rxjs';
import { measureMemory } from 'vm';
import { CreateTuitDtoTs, UpdateTuitDtoTs } from './dto';

@Injectable() // Porveedor principal de nuestro tuits controller
export class TuitsService {
    private tuits: Tuit[] = [
        {
            id: '1',
            message: "Hello World fron Nest.js"
        }
    ];

    getTuits(): Tuit[] {
        return this.tuits;
    }

    getTuit(id: string) : Tuit {
        const tuit = this.tuits.find((item) => item.id === id);
        
        if (!tuit){
            throw new  NotFoundException("Resource not found")
        }

        return tuit;
    }

    createTuit({message}: CreateTuitDtoTs): void{
        this.tuits.push({
            id: (Math.floor(Math.random() * 2000) + 1).toString(),
            message,
        });
    }

    updateTuit(id: string, {message}: UpdateTuitDtoTs) {
        const tuit: Tuit = this.getTuit(id);
        tuit.message = message;

        return tuit;
    }

    removeTuit(id: string): void {
        const index = this.tuits.findIndex((tuit) => tuit.id === id)
        if (index >= 0) {
            this.tuits.splice(index, 1);
        }
    }
}
