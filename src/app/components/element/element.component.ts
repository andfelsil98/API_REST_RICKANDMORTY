import { Component, OnInit, Input } from '@angular/core';
import { Element } from '../../models/element.model';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  @Input() element: Element = {
    id: 0,
    name: '',
    status: '',
    species: '',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
