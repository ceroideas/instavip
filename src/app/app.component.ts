import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { SplashPage } from '../pages/splash/splash';

import Auth0Cordova from '@auth0/cordova';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = SplashPage;

  photo = '../assets/profile.jpg';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menu: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      (window as any).handleOpenURL = (url: string) => {
        Auth0Cordova.onRedirectUri(url);
      }
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  toggleMenu()
  {
    this.menu.toggle();
  }

  logout()
  { 
    this.toggleMenu();
    localStorage.removeItem('instavipUser');
    this.nav.setRoot(LoginPage);
  }
}
