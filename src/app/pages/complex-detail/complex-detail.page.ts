import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-complex-detail',
  templateUrl: './complex-detail.page.html',
  styleUrls: ['./complex-detail.page.scss'],
})
export class ComplexDetailPage implements OnInit {

  public data = [
    {
      id: 1,
      title: "Recibir paquete",
      code: "BPB11",
    },
    {
      id:2,
      title: "Entregar paquete",
      code: "PB123",
    },
    {
      id:3,
      title: "Registrar Visita",
      code: "INTO",
    },
    {
      id:4,
      title: "Reportar Salida",
      code: "EXIT",
    },
    {
      id:5,
      title: "Estado de cuenta",
      code: "PBA11",
    },
    {
      id:6,
      title: "Reportar Incidencia",
      code: "PBD11",
    },
    {
      id:7,
      title: "Información",
      code: "PBD11",
    },
    {
      id:8,
      title: "Alarma",
      code: "PBC11",
    }
  ]


  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  goToReceivePackage(item){
    if(item.id == 1){
      this.router.navigate(['receive-package']);
    }else if(item.id == 2){
      this.router.navigate(['deliver-package']);
    }else if(item.id == 3){
      this.router.navigate(['register-visit']);
    }else if(item.id == 4){
      this.router.navigate(['checkout']);
    }else if(item.id == 5){
      this.router.navigate(['check-balance']);
    }else if(item.id == 6){
      this.router.navigate(['incidencia']);
    }else if(item.id == 7){
      this.router.navigate(['information']);
    }else{
      console.log('Not found')
    }
    
  }


}
