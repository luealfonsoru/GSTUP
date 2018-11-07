import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs-compat';
import 'rxjs/add/operator/take';
import {ChatPage} from '../chat/chat'
/**
 * Generated class for the MessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {

  constructor(private afAuth: AngularFireAuth, public afDatabase: AngularFireDatabase, public loadingCtrl:LoadingController, public navCtrl: NavController, public navParams: NavParams) {
  }
  chats;
  loading = this.loadingCtrl.create()
  gotoChat(){
    this.navCtrl.push(ChatPage,{id:"1000"});
  }
  ionViewDidLoad() {
    this.loading.present();
    this.afAuth.authState.take(1).subscribe(res =>{
      console.log(res);
      if(res && res.email && res.uid){
        this.afDatabase.list(`profile/${res.uid}`).snapshotChanges().subscribe( datas => {
          try{
            this.chats = datas.filter(res => res.key == "chats")[0].payload.val();
          }catch{
            this.chats = null;
          }
        })
      }else{
        this.navCtrl.setRoot("HomePage");
      }
      this.loading.dismiss();
    })
  }
}
