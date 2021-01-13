import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deliver-package',
  templateUrl: './deliver-package.page.html',
  styleUrls: ['./deliver-package.page.scss'],
})
export class DeliverPackagePage implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  acceptPackage(){
    this.router.navigate(['validate-package']);
  }
}
