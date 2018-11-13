import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireStorage } from 'angularfire2/storage'
import { Observable } from 'rxjs-compat';
import 'rxjs/add/operator/take';
import { ChatPage } from '../chat/chat';


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
  currentId = this.navParams.get('pid');
  myProfile;
  constructor(public afStorage: AngularFireStorage, public loadingCtrl: LoadingController, private afAuth: AngularFireAuth, public afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  }
  gotoChat(){
    this.navCtrl.push(ChatPage,{id:"0"});
  }
  loading = this.loadingCtrl.create()


  ionViewDidLoad() {
    this.loading.present();
    this.afAuth.authState.take(1).subscribe(res =>{
      console.log(res);
      if(res && res.email && res.uid){
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
        })
      }else{
        this.navCtrl.setRoot("HomePage");
      }
      this.loading.dismiss();
    })
  }
}
