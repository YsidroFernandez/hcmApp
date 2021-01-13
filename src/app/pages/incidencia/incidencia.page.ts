import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-incidencia',
  templateUrl: './incidencia.page.html',
  styleUrls: ['./incidencia.page.scss'],
})
export class IncidenciaPage implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  saveIncidence(){
    this.router.navigate(['complex-detail']);
  }
}
