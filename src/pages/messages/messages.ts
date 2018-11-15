import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs-compat';
import 'rxjs/add/operator/take';
import {ChatPage} from '../chat/chat'
import { AngularFireStorage } from 'angularfire2/storage';
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

  constructor(public afStorage: AngularFireStorage, private afAuth: AngularFireAuth, public afDatabase: AngularFireDatabase, public loadingCtrl:LoadingController, public navCtrl: NavController, public navParams: NavParams) {
  }
  chats;
  loading = this.loadingCtrl.create();
  imageArray;
  userId;

  gotoChat(chat){
    this.navCtrl.push(ChatPage,{id:chat.id});
  }

  ionViewDidLoad() {
    this.loading.present();
    this.afAuth.authState.take(1).subscribe(res =>{
      console.log(res);
      if(res && res.email && res.uid){
        this.userId = res.uid;
        this.afDatabase.list(`profile/${res.uid}/chats`).snapshotChanges().subscribe( datas => {
          var chats = [];
          var afStorage = this.afStorage;
          var afDatabase = this.afDatabase
          try{
            datas.forEach(function(result){
              chats.push(result.payload.val());
              // @ts-ignore
              afStorage.ref(result.payload.val().with + "/profile.jpg").getDownloadURL().subscribe(res=>{
                chats[chats.length - 1].url = res;
              }, (e) =>{
                chats[chats.length - 1].url = '/assets/imgs/default.png';
              });
              // @ts-ignore
              afDatabase.list(`chats/${result.payload.val().id}`).snapshotChanges().subscribe(datas2 =>{
                // @ts-ignore
                chats[chats.length - 1].last = datas2.filter(res => res.key ===  "messages")[0].payload.val()[datas2.filter(res => res.key ===  "messages")[0].payload.val().length - 1];
              })
            });
            this.chats = chats;
            console.log(this.chats,"chats");
          }catch{
            this.chats = [];
          }
        })
      }else{
        this.navCtrl.setRoot("HomePage");
      }
      this.loading.dismiss();
    })
  }
}
