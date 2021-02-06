import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

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

  user : any; 

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
    this.user = localStorage.getItem('usuario')
  }

  confrimExit(item){
    this.router.navigate(['checkout-confirm',item]);
  }
}
