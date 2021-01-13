import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-declaration-balance',
  templateUrl: './declaration-balance.page.html',
  styleUrls: ['./declaration-balance.page.scss'],
})
export class DeclarationBalancePage implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  saveDeclaration(){
    this.router.navigate(['complex-detail']);
  }
}
