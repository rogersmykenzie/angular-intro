import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {
  @Input() name:string;
  @Input() nickname:string;
  @Input() charID:string | number;
  @Output() deleteChar = new EventEmitter();
  constructor() { }

  ngOnInit() {

  }

  delete() {
    this.deleteChar.emit(this.charID)
  }

}
