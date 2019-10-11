import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the FollowersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-followers',
  templateUrl: 'followers.html',
})
export class FollowersPage {

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
    console.log('ionViewDidLoad FollowersPage');
  }

}
