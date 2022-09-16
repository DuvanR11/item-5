import { IDatos } from 'src/app/interfaces/datos.interface';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {
  info!: IDatos;
  constructor(private ApiSvc: ApiService, private route:ActivatedRoute) { }



  verPerfil(id: any){
    this.ApiSvc.getCharacter(id).subscribe((result =>{
      this.info = result
      console.log(this.info)
    }))
  }

  ngOnInit(): void {
    this.verPerfil(this.route.snapshot.paramMap.get('id'))
  }
}
