import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  photo = '../assets/profile.jpg';
  name = "Cero Ideas";
  user = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
    this.user = JSON.parse(localStorage.getItem('instavipUser'));
    this.name = this.user['name'];
    this.photo = this.user['picture'];
  }

  ionViewDidEnter()
  {
  	if (localStorage.getItem('instavipName')) {
  		this.name = localStorage.getItem('instavipName');
  	}
  	if (localStorage.getItem('instavipPhoto')) {
  		this.photo = localStorage.getItem('instavipPhoto');
  	}
  }

  openMenu()
  {
  	this.menu.toggle();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
