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

  complex : any;
  user : any;
  constructor(
    private router : Router,
    private params : ActivatedRoute
  ) { }

  ngOnInit() {
    this.complex = this.params.snapshot.paramMap['params'];
    console.log(this.complex)
    this.user = localStorage.getItem('usuario')
  }

  goToRequest(){
    this.router.navigate(['new-visit-solictud']);
  }

}
