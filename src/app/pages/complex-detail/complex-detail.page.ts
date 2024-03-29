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
      img: "https://image.freepik.com/vector-gratis/repartidor-mascara-medica-entregar-paquete-al-cliente_9845-261.jpg"
    },
    {
      id:2,
      title: "Entregar paquete",
      code: "PB123",
      img: "https://image.freepik.com/vector-gratis/personal-personal-entregar-servicio-al-cliente-tienda_40876-671.jpg"
    },
    {
      id:3,
      title: "Registrar Visita",
      code: "INTO",
      img: "https://thumbs.dreamstime.com/b/tablero-del-registro-control-hombre-con-el-acuerdo-disponible-de-la-lista-dise%C3%B1o-plano-ejemplo-vector-112434342.jpg"
    },
    {
      id:4,
      title: "Reportar Salida",
      code: "EXIT",
      img: "https://png.pngtree.com/png-clipart/20190520/original/pngtree-exit-icon-png-image_3550242.jpg"
    },
    {
      id:5,
      title: "Estado de cuenta",
      code: "PBA11",
      img: "https://www.bosquesanpatricio.com.mx/wp-content/uploads/2019/02/adeudo.png"
    },
    {
      id:6,
      title: "Incidencia",
      code: "PBD11",
      img : "https://previews.123rf.com/images/mammothis/mammothis1511/mammothis151100011/48058116-el-hombre-est%C3%A1-votando-en-las-elecciones.jpg"
    },
    {
      id:7,
      title: "Información",
      code: "PBD11",
      img: "https://p16cdn4static.sharpschool.com/UserFiles/Servers/Server_389410/Image/News%20Articles/Information.jpg"
    },
    {
      id:8,
      title: "Alarma",
      code: "PBC11",
      img: "https://thumbs.dreamstime.com/b/alarma-retra-roja-22225994.jpg"
    }
  ]

 complex : any;

  constructor(
    private router : Router,
    private params : ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.params.queryParams)
    this.complex = this.params.snapshot.paramMap['params'];
    console.log(this.complex)

  }

  goToReceivePackage(item){
    if(item.id == 1){
      this.router.navigate(['receive-package',this.complex]);
    }else if(item.id == 2){
      this.router.navigate(['deliver-package',this.complex]);
    }else if(item.id == 3){
      this.router.navigate(['register-visit',this.complex]);
    }else if(item.id == 4){
      this.router.navigate(['checkout',this.complex]);
    }else if(item.id == 5){
      this.router.navigate(['check-balance',this.complex]);
    }else if(item.id == 6){
      this.router.navigate(['incidencia',this.complex]);
    }else if(item.id == 7){
      this.router.navigate(['information',this.complex]);
    }else{
      console.log('Not found')
    }
    
  }


}
