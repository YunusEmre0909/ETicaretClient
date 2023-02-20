import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


export class BaseComponent {
  constructor(private spinner : NgxSpinnerService){}

  showSpiner(spinnerNameType: SpinnerType){
      this.spinner.show(spinnerNameType);

      setTimeout(() =>this.hideSpinner(spinnerNameType),1500);
  }
  hideSpinner(spinnerNameType:SpinnerType){
    this.spinner.hide(spinnerNameType);
  }
}
export enum SpinnerType{
BallAtom="s1",
BallScaleMultiple="s2",
BallSpinClockwisefFadeRotating="s3"
}
