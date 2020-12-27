import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-font-size',
  templateUrl: './font-size.component.html',
  styleUrls: ['./font-size.component.css']
})
export class FontSizeComponent implements OnInit {
  @Input() loveMessage
  @Output() changeMainFont = new EventEmitter<number>()

  currentFontSize: string = '3em'

  constructor() { }

  ngOnInit(): void {
  }

  fontSizeChanged($event) {
    const fontSize = parseInt($event.target.value)
    // console.log(fontSize) 
    this.currentFontSize = `${fontSize}em`
    this.changeMainFont.next(fontSize)
  }
}
