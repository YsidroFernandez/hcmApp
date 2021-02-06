import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-visit-solictud',
  templateUrl: './new-visit-solictud.page.html',
  styleUrls: ['./new-visit-solictud.page.scss'],
})
export class NewVisitSolictudPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goConfirm(){
    this.router.navigate(['complex']);
  }

}
