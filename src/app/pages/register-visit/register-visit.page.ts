import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-register-visit',
  templateUrl: './register-visit.page.html',
  styleUrls: ['./register-visit.page.scss'],
})
export class RegisterVisitPage implements OnInit {

  complex : any;
  constructor(
    private router : Router,
    private params : ActivatedRoute
  ) { }

  ngOnInit() {
    this.complex = this.params.snapshot.paramMap['params'];
    console.log(this.complex)
  }

  registrar(item){
  
    this.router.navigate(['register-visit-step1',this.complex]);
    
  }

  newRegister(){
    this.router.navigate(['new-visit',this.complex]);
  }
}
