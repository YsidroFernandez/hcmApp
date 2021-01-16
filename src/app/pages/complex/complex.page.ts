import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


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
      code: "BPB11",
      admin: false
    },
    {
      id:2,
      title: "Complex 2",
      code: "A2",
      admin: false,
    },
    {
      id:3,
      title: "Complex 2",
      code: "ADMIN",
      admin: true
    }
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goToDetail(item){
    console.log(item)
    this.router.navigate(['complex-detail',item]);
  }

}
