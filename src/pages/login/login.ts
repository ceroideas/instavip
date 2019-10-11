import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TrakingPage } from '../traking/traking';
import { AuthService } from './../../services/auth.service';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [AuthService]
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthService) {
  }

  goToStart()
  {
    // this.auth.login();
    localStorage.setItem('instavipUser',JSON.stringify(this.auth.user));
  	this.navCtrl.setRoot(TrakingPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
