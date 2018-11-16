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
  chats = [];
  loading = this.loadingCtrl.create();
  imageArray;
  userId;
  chatUrlGotten = false;

  gotoChat(chat){
    this.navCtrl.push(ChatPage,{id:chat.id});
  }

  getImageUrl(chat){
    try{
    var chatLength = chat.length - 1;
    this.afStorage.ref(chat[chatLength].with + "/profile.jpg").getDownloadURL().subscribe(res =>{
      this.chats[chatLength].url = res;
      if(chatLength > 0){
        chat.pop();
        this.getImageUrl(chat)
      }
    }, (e)=>{
      this.chats[chatLength].url = '/assets/imgs/default.png';
      if(chatLength > 0){
        chat.pop();
        this.getImageUrl(chat)
      }
    })}catch{
      console.log("hola")
    }
  }

  getLastChat(chat){
    console.log(chat,"chatgettinglastchat")
    try{
      var chatLength = chat.length - 1;
      this.afDatabase.list(`chats/${chat[chatLength].id}`).snapshotChanges().subscribe(datas2 =>{
        console.log(datas2,"datas2getlastchat")
        
        try{
          // @ts-ignore
        this.chats[chatLength].last = datas2.filter(res => res.key ===  "messages")[0].payload.val()[datas2.filter(res => res.key ===  "messages")[0].payload.val().length - 1];
        }catch{
          console.log("hola")
        }
        if(chatLength > 0){
          chat.pop();
          this.getLastChat(chat)
        }
      })
    }catch{
        console.log("hola")
      }
  }

  ionViewDidLoad() {
    this.loading.present();
    this.afAuth.authState.take(1).subscribe(res =>{
      console.log(res);
      if(res && res.email && res.uid){
        this.userId = res.uid;
        var chat = [];
        var chat2 = [];
        
        this.afDatabase.list(`profile/${res.uid}/chats`).snapshotChanges().subscribe( datas => {
          console.log(datas,"bugdata")
          for(var i = 0; i < datas.length; i++){
            this.chats.push(datas[i].payload.val());
            chat.push(datas[i].payload.val());
            chat2.push(datas[i].payload.val());
          }
          this.getImageUrl(chat);
          this.getLastChat(chat2);

          // try{
          //   console.log(datas,"bug2log")
          //   datas.forEach(function(result){
          //     chats.push(result.payload.val());
          //   });
          //   this.chatsAux = chats;
          //   this.chatsAux.forEach(result=>{

          //                   // @ts-ignore
          //                   afStorage.ref(result.payload.val().with + "/profile.jpg").getDownloadURL().subscribe(res=>{
          //                     // @ts-ignore
          //                     this.chatsAux.url = res;
          //                   }, (e) =>{
          //                     // @ts-ignore
          //                     this.chatsAux.url = '/assets/imgs/default.png';
          //                   });
          //                   // @ts-ignore
          //                   afDatabase.list(`chats/${chatsAux.id}`).snapshotChanges().subscribe(datas2 =>{
                              
          //                     try{
          //                       // @ts-ignore
          //                       this.chatsAux.last = datas2.filter(res => res.key ===  "messages")[0].payload.val()[datas2.filter(res => res.key ===  "messages")[0].payload.val().length - 1];
          //                     }catch{
          //                       // @ts-ignore
          //                       this.chatsAux.last = '';
          //                     }
                              
          //                   })
          //   })
          //   this.chats = chats;
          //   console.log(this.chats,"chats");
          // }catch{
          //   this.chats = [];
          // }
        },(e)=>{
          this.chats = [];
        })
      }else{
        this.navCtrl.setRoot("HomePage");
      }
      this.loading.dismiss();
    })
  }
}
