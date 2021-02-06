import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout-confirm',
  templateUrl: './checkout-confirm.page.html',
  styleUrls: ['./checkout-confirm.page.scss'],
})
export class CheckoutConfirmPage implements OnInit {

  complex : any;
  constructor(
    private router : Router,
    private params : ActivatedRoute
  ) { }

  ngOnInit() {
    this.complex = this.params.snapshot.paramMap['params'];
    console.log(this.complex)
  }

  exit(){
    this.router.navigate(['complex']);
  }
}
