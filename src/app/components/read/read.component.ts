import { Component, OnInit } from '@angular/core';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  elements: Element[] = [];

  constructor(
    private elementService: ElementService
  ) { }

  ngOnInit(): void {
    this.readElements();
  }

  readElements () {
    this.elementService.getAllElement()
    .subscribe (data => {
      console.log(data);
    })
  }

}
