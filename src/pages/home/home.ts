import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  successLogin(e){
    console.log("successLogin:",{event:e})
  }

  errorLogin(e){
    console.log("errorLogin:",{event:e})
  }

}
