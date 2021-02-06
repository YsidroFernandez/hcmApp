import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-visit-step2',
  templateUrl: './register-visit-step2.page.html',
  styleUrls: ['./register-visit-step2.page.scss'],
})
export class RegisterVisitStep2Page implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  goConfirm(){
    this.router.navigate(['complex']);
  }

}
