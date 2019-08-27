import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-test';
  name:string = "Adam Sandler";
  input:string = ""
  date:Date = new Date();
  
  constructor() {}

  updateUserInput(e) {
    this.input = e.target.value;
  }

  updateName() {
    this.name = this.input;
    this.input = ""
  }

}
