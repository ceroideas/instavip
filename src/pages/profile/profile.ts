import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  photo = '../assets/profile.jpg';
  user = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
    this.user = JSON.parse(localStorage.getItem('instavipUser'));
  }

  openMenu()
  {
  	this.menu.toggle();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
