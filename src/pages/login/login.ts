import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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

  constructor(public alertCtrl: AlertController, private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }
  
  user = {} as User;
  showAlert(){
    const alert = this.alertCtrl.create({
      title: "Problemas Iniciando Sesión",
      subTitle: "Has ingresado de forma incorrecta tu correo electónico o contraseña. Por favor inténtalo de nuevo",
      buttons: ["Aceptar"]
    });
    alert.present();
  }
  async login(user: User){
    const result = this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password).then(res =>{
      if(res.user){
        this.navCtrl.setRoot(MenuPage);
      }else{
        console.log("thou shall not be here >:v")
      }
    },(e)=>{
      this.showAlert();
      console.log(e);
    });
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
