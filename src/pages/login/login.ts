import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'
import { User } from '../../models/user';
import { MenuPage } from '../menu/menu';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }
  
  user = {} as User;

  async login(user: User){
    const result = this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password).then(res =>{
      if(res.user){
        this.navCtrl.setRoot(MenuPage);
      }else{
        console.log("thou shall not be here >:v")
      }
    },(e)=>{
      console.log(e);
    });
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
