import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { ProfilePage } from '../profile/profile';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the ExplorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-explore',
  templateUrl: 'explore.html',
})
export class ExplorePage {

  profileList = [];
  
  constructor(public afAuth: AngularFireAuth, public afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  }

  gotoProfile(profileId){
    this.navCtrl.push(ProfilePage,{pid:profileId})
  }



  ionViewDidLoad() {
    var profileList = []
    var userName;
    this.afAuth.authState.take(1).subscribe(res =>{
      if(res && res.email && res.uid){
        this.afDatabase.list(`profile`).snapshotChanges().subscribe( datas => {
          datas.forEach(function(value){
            if(value.key != res.uid){
              profileList.push({id: value.key, username: value.payload.val().username, name: value.payload.val().name});
            }            
          })
          this.profileList = profileList;
          console.log(this.profileList)
        });
      }

    })

    console.log('ionViewDidLoad ExplorePage');
  }

}
