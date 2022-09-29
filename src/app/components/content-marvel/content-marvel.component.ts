import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/interfaces/marvel.interface';
import { ApiMarvelService } from 'src/app/services/api-marvel.service';

@Component({
  selector: 'app-content-marvel',
  templateUrl: './content-marvel.component.html',
  styleUrls: ['./content-marvel.component.scss']
})
export class ContentMarvelComponent implements OnInit {

  allCharacters: Result[] = [];
  constructor(private ApiSvc: ApiMarvelService) { }

  getCharacters() {
    this.ApiSvc.getAllCharactersMarvel().subscribe((result: any)=>{
      this.allCharacters = result
      console.log(this.allCharacters)
    });
  }

  ngOnInit(): void {
    this.getCharacters();
  }

}
