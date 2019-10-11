import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';
import { TrakingPage } from '../traking/traking';

/**
 * Generated class for the SplashPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  	setTimeout(()=>{
  	  if (!localStorage.getItem('instavipUser')) {
        this.navCtrl.setRoot(LoginPage);
      }else{
        if (localStorage.getItem('instavipSuccess')) {
          this.navCtrl.setRoot(TabsPage);
        }else{
          this.navCtrl.setRoot(TrakingPage);
        }
      }
  	},1000)
  }

}
