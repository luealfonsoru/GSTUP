import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage'
import { Observable } from 'rxjs-compat';
import 'rxjs/add/operator/take';
import { ChatPage } from '../chat/chat';
import { OptionsPage } from "../options/options"


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'profile/:pid'})
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  name;
  nickname;
  interest;
  about;
  awards;
  icon = "add";
  imageUrl;
  currentId;
  myProfile;
  chats = [];
  allChats;
  pushId;
  userId;
  otherChats;
  chatId;
  chatResults;
  otherNickname;
  otherName;

  constructor(public afStorage: AngularFireStorage, public loadingCtrl: LoadingController, private afAuth: AngularFireAuth, public afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  }

  gotoChat(){
    this.pushId = this.afDatabase.createPushId();
    if(this.chats.length === 0){
      this.afDatabase.object(`chats/${this.pushId}`).set({integrants:[this.userId,this.currentId],chats:[]}).then(res =>{
        this.afDatabase.object(`profile/${this.currentId}/chats/${this.otherChats.length}`).set({
          id:this.pushId,
          with:this.userId,
          nameWith:this.otherName,
          nicknameWith:this.otherNickname
        }).then(res2 =>{
          this.afDatabase.object(`profile/${this.userId}/chats/${this.allChats.length}`).set({
            id:this.pushId,
            with:this.currentId,
            nicknameWith:this.nickname,
            nameWith:this.name            
          }).then(res3 =>{
            this.navCtrl.push(ChatPage,{id:this.pushId});          
          })
        })
      });
    }else{
      var currentId = this.currentId;
      var chatId = this.chatId;
      console.log(currentId,"cuid")
      this.chatResults.forEach(function(result2){
        if(currentId === result2.payload.val().with){
          chatId = result2.payload.val().id;
          console.log("ideal");
        }
        console.log("chatId",chatId)
      })
      this.navCtrl.push(ChatPage,{id: chatId});
    }
  }

  gotoOptions(){
    this.navCtrl.push(OptionsPage)
  }
  loading = this.loadingCtrl.create()


  ionViewDidLoad() {
    this.loading.present();
    this.currentId = this.navParams.get('pid');
    //change this :3
    console.log("lolololo xd xd xd ");
    console.log(this.currentId);
    this.afAuth.authState.take(1).subscribe(res =>{
      console.log(res);
      if(res && res.email && res.uid){
        this.userId = res.uid;
        if(!this.currentId){
          this.currentId = res.uid
        }
        if(this.currentId === res.uid){
          this.myProfile = true;
        }else{
          this.myProfile = false;
        }

        this.afStorage.ref(this.currentId + "/profile.jpg").getDownloadURL().subscribe(res =>{
          this.imageUrl = res;
        }, (e) =>{
          this.imageUrl = '/assets/imgs/default.png'
        });
        console.log("imageUrl", this.imageUrl);
        this.afDatabase.list(`profile/${this.currentId}`).snapshotChanges().subscribe( datas => {
          this.name = datas.filter(res => res.key === "name")[0].payload.val();
          this.nickname = datas.filter(res => res.key === "username")[0].payload.val();
          this.interest = datas.filter(res => res.key === "interest")[0].payload.val();
          this.about = datas.filter(res => res.key === "about")[0].payload.val();
          try{
            this.awards = datas.filter(res => res.key == "awards")[0].payload.val();
          }catch{
            this.awards = null;
          }
          try{
            this.otherChats = datas.filter(res => res.key == "chats")[0].payload.val();
          }catch{
            this.otherChats = [];
          }
        })
        this.afDatabase.list(`profile/${res.uid}/chats`).snapshotChanges().subscribe(res2 =>{
          this.chatResults = res2;
          console.log(res2,"theres2")
        });
        this.afDatabase.list(`profile/${res.uid}`).snapshotChanges().subscribe( datas =>{
          try{
            this.allChats = datas.filter(res => res.key == "chats")[0].payload.val();
            
          }catch{
            this.allChats = [];
          }
          try{
            // @ts-ignore
            this.chats = datas.filter(res => res.key == "chats")[0].payload.val().filter(res2 => res2.with == this.currentId);
          }catch{
            this.chats = [];
          }
          this.otherNickname = datas.filter(res => res.key == "username")[0].payload.val();
          this.otherName = datas.filter(res => res.key == "name")[0].payload.val();
        })
      }else{
        this.navCtrl.setRoot("HomePage");
      }
      this.loading.dismiss();
    })
  }
}
