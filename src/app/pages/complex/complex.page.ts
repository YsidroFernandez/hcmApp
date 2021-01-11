import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complex',
  templateUrl: './complex.page.html',
  styleUrls: ['./complex.page.scss'],
})
export class ComplexPage implements OnInit {

  public data = [
    {
      id:1,
      title: "Complex 1",
      code: "BPB11"
    },
    {
      id:2,
      title: "Complex 2",
      code: "A2"
    },
    {
      id:1,
      title: "Complex 2",
      code: "ADMIN"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
