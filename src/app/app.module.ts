import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { SafariViewController } from '@ionic-native/safari-view-controller';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { TabsPage } from '../pages/tabs/tabs';
import { BuyPageModule } from '../pages/buy/buy.module';
import { DetailsPageModule } from '../pages/details/details.module';
import { FollowersPageModule } from '../pages/followers/followers.module';
import { LikesPageModule } from '../pages/likes/likes.module';
import { LoginPageModule } from '../pages/login/login.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { SplashPageModule } from '../pages/splash/splash.module';
import { TrakingPageModule } from '../pages/traking/traking.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsPage
  ],
  imports: [
    BrowserModule,
    BuyPageModule,
    DetailsPageModule,
    FollowersPageModule,
    LikesPageModule,
    LoginPageModule,
    ProfilePageModule,
    SplashPageModule,
    TrakingPageModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SafariViewController,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
