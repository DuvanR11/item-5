import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor(private spinnerSvc: NgxSpinnerService) { }

  public llamarSpinner(){
    this.spinnerSvc.show();
  }

  public detenerSpinner(){
    this.spinnerSvc.hide();
  }
}
