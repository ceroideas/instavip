import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Events } from 'ionic-angular';

/**
 * Generated class for the LikesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-likes',
  templateUrl: 'likes.html',
})
export class LikesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, public events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LikesPage');
  }

  openMenu()
  {
  	this.menu.toggle();
  }

  openDetail(a1,a2)
  {
    localStorage.setItem('instavipName',a1);
    localStorage.setItem('instavipPhoto',a2);
	  this.events.publish('openDetails');
  }

}
