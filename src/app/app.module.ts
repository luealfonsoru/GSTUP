import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireStorageModule} from 'angularfire2/storage'

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';

import { AuthProvider } from '../providers/auth/auth';
import { firebaseConfig } from '../config'
import { MenuPage } from '../pages/menu/menu';
import { ProfilePage } from '../pages/profile/profile';
import { ExplorePage } from '../pages/explore/explore';
import { MessagesPage } from '../pages/messages/messages';
import { ChatPage } from '../pages/chat/chat';
import { OptionsPage } from '../pages/options/options';
import { RegisterPage } from '../pages/register/register';
import { AddinfoPage } from '../pages/addinfo/addinfo';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    MenuPage,
    ProfilePage,
    ExplorePage,
    MessagesPage,
    ChatPage,
    OptionsPage,
    RegisterPage,
    AddinfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      mode: 'ios',
      backButtonText: ''
    }),
    AngularFireModule.initializeApp(firebaseConfig.fire),
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    MenuPage,
    ProfilePage,
    ExplorePage,
    MessagesPage,
    ChatPage,
    OptionsPage,
    RegisterPage,
    AddinfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AngularFireAuth
  ]
})
export class AppModule {}
