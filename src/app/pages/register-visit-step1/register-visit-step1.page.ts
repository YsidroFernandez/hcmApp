import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-visit-step1',
  templateUrl: './register-visit-step1.page.html',
  styleUrls: ['./register-visit-step1.page.scss'],
})
export class RegisterVisitStep1Page implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  goConfirm(){
    this.router.navigate(['register-visit-step2']);
  }

}
