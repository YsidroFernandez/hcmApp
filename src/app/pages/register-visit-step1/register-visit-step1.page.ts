import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-visit-step1',
  templateUrl: './register-visit-step1.page.html',
  styleUrls: ['./register-visit-step1.page.scss'],
})
export class RegisterVisitStep1Page implements OnInit {

  complex : any;

  constructor(
    private router : Router,
    private params : ActivatedRoute
  ) { }

  ngOnInit() {
    this.complex = this.params.snapshot.paramMap['params'];
    console.log(this.complex)
  }

  goConfirm(){
    this.router.navigate(['register-visit-step2',this.complex]);
  }

}
