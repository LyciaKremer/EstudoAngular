import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  firstname = "John";

  person = {
    firstname: "john",
    lastname: "bro",
    age: 20,
    address: "Rua sem nome, 115"

  }

  constructor() { }

  ngOnInit(): void {
  }

}
