import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inp',
  templateUrl: './inp.component.html',
  styleUrls: ['./inp.component.css']
})
export class InpComponent implements OnInit {

  @Input() type = "text";
  @Input() placeHolder = "";
  @Input() value = "";

  constructor() { }

  ngOnInit(): void {
  }

}
