import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deliver-package',
  templateUrl: './deliver-package.page.html',
  styleUrls: ['./deliver-package.page.scss'],
})
export class DeliverPackagePage implements OnInit {

  complex : any;

  constructor(
    private router : Router,
    private params : ActivatedRoute
  ) { }

  ngOnInit() {
    this.complex = this.params.snapshot.paramMap['params'];
    console.log(this.complex)
  }

  acceptPackage(){
    this.router.navigate(['validate-package']);
  }
}
