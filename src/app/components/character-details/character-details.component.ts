import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs';
import { ElementService } from 'src/app/services/element.service';
import { Result, RickAndMorty } from 'src/app/models/rickandmorty.model';


@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

  characterId: number | null = null;
  character: Result | null = null;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private elementService: ElementService
  ) { }

  ngOnInit(): void {
    this.readOneCharacter();
  }


  readOneCharacter() {
    this.route.paramMap//ME PERMITE ACCEDER A LOS PARAMETROS OBLIGATORIOS Y OPCIONALES DE UNA RUTA
      .pipe(//TOMA UNO O MAS OPERADORES Y RETORNA UN OBSERVABLE
        switchMap((params) => {
          this.characterId = Number(params.get('id'));
          console.log(this.characterId)
          if (this.characterId) {
            return this.elementService.getOneCharacter(this.characterId);
          }
          return [null];
        })
      )
      .subscribe((data) => {
          this.character = data;
          console.log(data);
      });
  }

  goToBack() {
    this.location.back();
  }

  // obtainInfo() {

  // }


}
