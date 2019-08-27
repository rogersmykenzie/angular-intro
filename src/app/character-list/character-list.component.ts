import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters = [];
  constructor() { }

  ngOnInit() {
    axios.get("https://www.breakingbadapi.com/api/characters").then(response => {
      this.characters = response.data;
      console.log(this.characters)
    })
  }

  onDelete(e) {
    let index = this.characters.findIndex(val => val.char_id == e)
    this.characters.splice(index,1);
  }

}
