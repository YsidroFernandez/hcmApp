import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-new-visit',
  templateUrl: './new-visit.page.html',
  styleUrls: ['./new-visit.page.scss'],
})
export class NewVisitPage implements OnInit {

  
  public data = [
    {
      id: 1,
      owner: "Roberto Ceron",
      code: "BPB11",
    },
    {
      id:2,
      owner: "Roberto Ceron",
      code: "PB12",
    },
    {
      id:3,
      owner: "Roberto Cervantes",
      code: "PBA11",
    },
    {
      id:4,
      owner: "Juan Robertson",
      code: "PBC11",
    }
  ]


  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  goToRequest(){
    this.router.navigate(['new-visit-solictud']);
  }

}
