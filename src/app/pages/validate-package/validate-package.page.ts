import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-validate-package',
  templateUrl: './validate-package.page.html',
  styleUrls: ['./validate-package.page.scss'],
})
export class ValidatePackagePage implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  confirmPackage(){
    this.router.navigate(['complex-detail']);
  }

}
