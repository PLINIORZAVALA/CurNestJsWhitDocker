import { Injectable } from '@nestjs/common';
import { Tuit } from './tuit.entity';
import { find } from 'rxjs';
import { measureMemory } from 'vm';

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
        return this.tuits.find((item) => item.id === id);
    }

    createTuit(message: string): void{
        this.tuits.push({
            id: (Math.floor(Math.random() * 2000) + 1).toString(),
            message,
        });
    }

    updateTuit(id: string, message: any) {
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
