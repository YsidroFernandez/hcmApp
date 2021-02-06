import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receive-package',
  templateUrl: './receive-package.page.html',
  styleUrls: ['./receive-package.page.scss'],
})
export class ReceivePackagePage implements OnInit {

  public data = [
    {
      id: 1,
      owner: "Roberto Ceron",
      code: "BPB11",
      complex: "Complejo 1 Caseta A"
    },
    {
      id:2,
      owner: "Roberto Ceron",
      code: "PB12",
      complex: "Complejo 1 Caseta B"
    },
    {
      id:3,
      owner: "Roberto Cervantes",
      code: "PBA11",
      complex: "Complejo 2 Caseta A"
    },
    {
      id:4,
      owner: "Juan Robertson",
      code: "PBC11",
      complex: "Complejo 2 Caseta B"
    }
  ]

  complex : any;
  user : string;

  constructor(
    private router: Router,
    private params : ActivatedRoute
  ) { }

  ngOnInit() {
    this.complex = this.params.snapshot.paramMap['params'];
    console.log(this.complex)
    this.user = localStorage.getItem('usuario')
  }

  goToReceiveDetail(item){
    this.router.navigate(['receive-detail',item]);
  }
}
