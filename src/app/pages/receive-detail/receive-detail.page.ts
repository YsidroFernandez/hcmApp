import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receive-detail',
  templateUrl: './receive-detail.page.html',
  styleUrls: ['./receive-detail.page.scss'],
})
export class ReceiveDetailPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  acceptPackage(){
    this.router.navigate(['receive-package']);
  }
}
