import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { ProfilePage } from '../profile/profile';

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
  
  constructor(public afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  }

  gotoProfile(profileId){
    this.navCtrl.push(ProfilePage,{pid:profileId})
  }



  ionViewDidLoad() {
    var profileList = []
    this.afDatabase.list(`profile`).snapshotChanges().subscribe( datas => {
      datas.forEach(function(value){
        profileList.push({id: value.key});
      })
      this.profileList = profileList;
      console.log(this.profileList)
    });
    console.log('ionViewDidLoad ExplorePage');
  }

}
