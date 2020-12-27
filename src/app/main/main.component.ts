import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  titlez: string = 'This is a property binding [] message from main component to font-size component'

  sizeChosenFromFSComponent: string = '3em'
  fontSizeFromFSComponent: number = 3

  constructor() { }

  ngOnInit(): void {
  }

  // from font-size (changeMainFont) TO main.html "sizeChanged($event)"
  sizeChanged(e) {
    console.log(e) // number  
    this.sizeChosenFromFSComponent = `${e}em`
    this.fontSizeFromFSComponent = e
  }
}
