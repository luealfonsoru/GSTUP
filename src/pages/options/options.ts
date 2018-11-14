import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login'

/**
 * Generated class for the OptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-options',
  templateUrl: 'options.html',
})
export class OptionsPage {

  constructor(public alertCtrl: AlertController, private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  logOut(){
    const alert = this.alertCtrl.create({
      title: "Cerrando Sesión",
      subTitle: "¿Deseas cerrar sesión?",
      buttons: [{
        text: 'No',
        role: 'cancel'
      },{
        text: 'Sí',
        handler: () =>{
          this.afAuth.auth.signOut().then(res=>{
            this.navCtrl.setRoot(LoginPage);
          })
        }
      }]
    });
    alert.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad OptionsPage');
  }

}
