import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  details: string[]=["../../assets/imgs/Dcab.jpg","../../assets/imgs/Ncab.jpg"];
  constructor(public navCtrl: NavController) {

  }

}
