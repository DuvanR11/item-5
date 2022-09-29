import { SpinnerService } from './../../services/spinner.service';
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

  allCharacters: IDatos[] = [];
  constructor(private ApiSvc: ApiService, private SpinnerSvc: SpinnerService) { }


  getCharacters() {
    this.ApiSvc.getAllCharacters().subscribe((result: any)=>{
      this.allCharacters = result
      console.log(this.allCharacters)
    });
  }

  ngOnInit(): void {
    this.SpinnerSvc.llamarSpinner();
    this.getCharacters();
  }
}
