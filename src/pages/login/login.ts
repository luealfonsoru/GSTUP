import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'
import { User } from '../../models/user';
import { MenuPage } from '../menu/menu';
import { RegisterPage } from '../register/register';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs-compat';
import 'rxjs/add/operator/take';
import { AddinfoPage } from '../addinfo/addinfo';

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

  constructor(public afDatabase: AngularFireDatabase, public alertCtrl: AlertController, private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }
  
  user = {} as User;
  gotoRegister(){
    this.navCtrl.push(RegisterPage);
  }
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
        this.afAuth.authState.take(1).subscribe(res=>{
          this.afDatabase.list(`profile/${res.uid}`).snapshotChanges().subscribe(data =>{
            try{
              if(data.filter(res => res.key === "name")[0].payload.val){
                this.navCtrl.setRoot(MenuPage);
              }
            }catch{
              this.navCtrl.setRoot(AddinfoPage);
            }
          },(e)=>{
            this.navCtrl.setRoot(AddinfoPage);
          })
        })
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
