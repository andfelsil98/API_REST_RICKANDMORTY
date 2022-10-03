import { Component, OnInit } from '@angular/core';
//services
import { ElementService } from 'src/app/services/element.service';
import { ActivatedRoute } from '@angular/router';


//interfaces
import { Result } from '../../models/rickandmorty.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  elements: Result[] = [];
  // characterId: number | null = null;
  // character: Result[] | null = null;

  constructor(
    private elementService: ElementService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.readCharacters();
  }

  readCharacters () {
    this.elementService.getAllCharacters()
    .subscribe (data => {
      // this.elements = data;
      console.log(data.results);
      this.elements = data.results;
      // console.log(data.results[0].status);

    })
  }

  // readOneCharacter() {
  //   this.route.paramMap
  //     .pipe(
  //       switchMap((params) => {
  //         this.characterId = Number(params.get('id'));
  //         if (this.characterId) {
  //           return this.elementService.getOneCharacter(this.characterId);
  //         }
  //         return [null];
  //       })
  //     )
  //     .subscribe((data) => {
  //       if (data){
  //         this.character = data.results;
  //       }
  //     });
  // }

}
