import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//models
import { Result } from '../../models/rickandmorty.model';
@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  @Input() result: Result = {
    id: 0,
    name: '',
    image:''
  };

  @Output() showProduct = new EventEmitter<number>();//va a emitir un nuevo evento que va a contener un elemento de tipo string

  constructor() { }

  ngOnInit(): void {
  }
  onShowDetail() {
    this.showProduct.emit(this.result.id);//aqui es donde se especifica que elemento se va a transmitir en este caso el id del product que es un string
  }

}
