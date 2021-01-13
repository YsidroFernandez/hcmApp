import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-check-balance',
  templateUrl: './check-balance.page.html',
  styleUrls: ['./check-balance.page.scss'],
})
export class CheckBalancePage implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  saveDeclaration(){
    this.router.navigate(['declaration-balance']);
  }

}
