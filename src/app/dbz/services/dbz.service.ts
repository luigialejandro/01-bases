import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Gokú',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500,
        }
      ];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }
    
    //constructor() {
    //    console.log('servicio inicializado');
    //}

    agregarPersonaje( personaje: Personaje ) {
      this._personajes.push( personaje );
    }

}