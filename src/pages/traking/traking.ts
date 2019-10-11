import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
declare var foop:any;
declare var $:any;

/**
 * Generated class for the TrakingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-traking',
  templateUrl: 'traking.html',
})
export class TrakingPage {

  photo = '../assets/profile.jpg';
  todo = {
	biog:false,
	folw:false,
	post:false,
	last:false,
	more:false
  };
  progress = "0%";
  complete = false;
  user = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.user = JSON.parse(localStorage.getItem('instavipUser'));

  	setTimeout(()=>{
  		this.progress = "20%";
  		this.todo.biog = true;
  		setTimeout(()=>{
	  		this.progress = "40%";
	  		this.todo.folw = true;
	  		setTimeout(()=>{
		  		this.progress = "60%";
		  		this.todo.post = true;
		  		setTimeout(()=>{
			  		this.progress = "80%";
			  		this.todo.last = true;
				  	setTimeout(()=>{
				  		this.progress = "100%";
				  		this.todo.more = true;

              setTimeout(()=>{
  				  		this.complete = true;
  				  		foop();
              },1000)


				  	},1000)
			  	},1300)
		  	},1500)
	  	},3000)
  	},2000)
  }

  continue()
  {
  	$('#confetti-container').remove();
  	localStorage.setItem('instavipSuccess','[]');
  	this.navCtrl.setRoot(TabsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrakingPage');
  }

}
