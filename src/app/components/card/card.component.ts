import { Component, OnInit, Input } from '@angular/core';
import { IDatos } from 'src/app/interfaces/datos.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() character!: IDatos;
  constructor() { }

  ngOnInit(): void {
  }

}
