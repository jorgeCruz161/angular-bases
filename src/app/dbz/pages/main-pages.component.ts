import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main',
    templateUrl: './main-pages.component.html',
    styleUrls: ['./main-pages.component.css']
})

export class MainPagesComponent{
    
    constructor(
        private dbzService: DbzService
    ) { }

    get characters(): Character[] { return[ ...this.dbzService.characters]; }

    onDeleteCharacter(id: string): void {
        this.dbzService.deleteCharacterById(id);
    }   

    onNewCharacter( character: Character): void {
        this.dbzService.addCharacter(character);
    }

}