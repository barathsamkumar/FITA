import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent {


  num1: string = '';
  num2: string = '';
  num3: string = '';
  result: number = 0;

  Total() {
    this.result = parseInt(this.num1) + parseInt(this.num2)+parseInt(this.num3);

  }
  constructor() {

  }

  ngOnInit(): void {

  }


}
