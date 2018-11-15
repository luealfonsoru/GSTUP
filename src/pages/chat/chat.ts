import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Content} from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs-compat';
import 'rxjs/add/operator/take';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'chat/:id'}
  )
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})



export class ChatPage {
  @ViewChild(Content) chatlist : Content;
  textInput = '';
  id;
  chatList;
  userId;
  constructor(private afAuth: AngularFireAuth, public loadingCtrl: LoadingController, public afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {

  }

  scroll(){
    this.chatlist.scrollToBottom();
  }

  getUid(){
    this.afAuth.authState.take(1).subscribe(res =>{
      if(res && res.email && res.uid){
        this.userId = res.uid;
      }
      this.getChat();
    });

  }

  chatByMe(chat){
    if(chat.by === this.userId){
      return true;
    }else{
      return false;
    }
  }

  getChat(){
    this.afDatabase.list(`chats/${this.id}`).snapshotChanges().subscribe(res=>{
      try{
        this.chatList = res.filter(res => res.key === "messages")[0].payload.val();
      }catch{
        this.chatList = [];
      }
      this.loading.dismiss();
    })
  }
  loading = this.loadingCtrl.create()
  sendText(){
    this.afDatabase.object(`chats/${this.id}/messages/${this.chatList.length}`).set({
      by: this.userId,
      date: Date(),
      message: this.textInput
    }).then(res=>{
      this.textInput = '';
      this.chatlist.scrollToBottom();
  });
  }
  
  ionViewDidLoad() {
    this.chatlist.scrollToBottom();
    this.loading.present();
    this.id = this.navParams.get('id');
    console.log(this.navParams.get('id'))
    this.getUid();    
  }

}
