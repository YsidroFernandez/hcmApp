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

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  confrimExit(){
    this.router.navigate(['checkout-confirm']);
  }
}
