import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Observable } from 'rxjs';
import { IDatos } from 'src/app/interfaces/datos.interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {

  allCharacters: any;
  constructor(private ApiSvc: ApiService) { }


  getCharacters() {
    this.ApiSvc.getAllCharacters().subscribe((result: IDatos)=>{
      this.allCharacters = result
      console.log(this.allCharacters)
    });
  }

  ngOnInit(): void {
    this.getCharacters();
  }
}
