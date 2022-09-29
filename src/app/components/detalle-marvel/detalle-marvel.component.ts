import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiMarvelService } from 'src/app/services/api-marvel.service';

@Component({
  selector: 'app-detalle-marvel',
  templateUrl: './detalle-marvel.component.html',
  styleUrls: ['./detalle-marvel.component.scss']
})
export class DetalleMarvelComponent implements OnInit {

  info!: any;
  constructor(private ApiSvc: ApiMarvelService, private route:ActivatedRoute) { }



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
