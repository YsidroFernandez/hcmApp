import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-register-visit',
  templateUrl: './register-visit.page.html',
  styleUrls: ['./register-visit.page.scss'],
})
export class RegisterVisitPage implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  registrar(item){
  
    this.router.navigate(['register-visit-step1']);
    
  }

  newRegister(){
    this.router.navigate(['new-visit']);
  }
}
