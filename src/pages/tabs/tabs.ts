import { Component, ViewChild } from '@angular/core';
import { Events, Tabs } from 'ionic-angular';

import { ProfilePage } from '../profile/profile';
import { FollowersPage } from '../followers/followers';
import { DetailsPage } from '../details/details';
import { LikesPage } from '../likes/likes';
import { BuyPage } from '../buy/buy';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('myTabs') tabRef: Tabs;

  tab1Root = ProfilePage;
  tab2Root = FollowersPage;
  tab3Root = DetailsPage;
  tab4Root = LikesPage;
  tab5Root = BuyPage;

  constructor(public events: Events) {
  	this.events.subscribe('openDetails',()=>{
  		this.tabRef.select(2);
  	})
  }
}
