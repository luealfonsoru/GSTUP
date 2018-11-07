import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs-compat';
import 'rxjs/add/operator/take';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
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
  constructor(public loadingCtrl: LoadingController, private afAuth: AngularFireAuth, public afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  }
  loading = this.loadingCtrl.create()
  ionViewDidLoad() {
    this.loading.present();
    this.afAuth.authState.take(1).subscribe(res =>{
      console.log(res);
      if(res && res.email && res.uid){
        this.afDatabase.list(`profile/${res.uid}`).snapshotChanges().subscribe( datas => {
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
