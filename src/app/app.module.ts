import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BookingPage } from '../pages/booking/booking';
import { BookingConfirmationPage } from "../pages/booking-confirmation/booking-confirmation";
import { TodaysBookingPage } from "../pages/todays-booking/todays-booking";
import { CabService } from "./service/cab.service";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BookingPage,
    TodaysBookingPage,
    BookingConfirmationPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    NguiAutoCompleteModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BookingPage,
    TodaysBookingPage,
    BookingConfirmationPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CabService
  ]
})
export class AppModule {}
