import { Component, Input, OnInit } from '@angular/core';
import { Result } from 'src/app/interfaces/marvel.interface';

@Component({
  selector: 'app-card-marvel',
  templateUrl: './card-marvel.component.html',
  styleUrls: ['./card-marvel.component.scss']
})
export class CardMarvelComponent implements OnInit {
  @Input() character!: Result;
  constructor() { }

  ngOnInit(): void {
  }

}
