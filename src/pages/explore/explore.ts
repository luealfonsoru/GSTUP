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
  searchInput = "";
  searchedData = [];
  
  constructor(public afAuth: AngularFireAuth, public afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  }

  gotoProfile(profileId){
    this.navCtrl.push(ProfilePage,{pid:profileId})
  }

  searchFilter(){
    console.log(this.searchInput);
    console.log(this.searchedData);
    this.searchedData = this.profileList.filter((item)=>{
      return item.name.toLowerCase().includes(this.searchInput.toLowerCase()) || item.username.toLowerCase().includes(this.searchInput.toLowerCase());
    })
  }



  ionViewDidLoad() {
    var profileList = []
    this.afAuth.authState.take(1).subscribe(res =>{
      if(res && res.email && res.uid){
        this.afDatabase.list(`profile`).snapshotChanges().subscribe( datas => {
          datas.forEach(function(value){
            if(value.key != res.uid){
              // @ts-ignore
              profileList.push({id: value.key, username: value.payload.val().username, name: value.payload.val().name});
            }            
          })
          this.profileList = profileList;
          this.searchFilter();
          console.log(this.profileList);
        });
      }

    })

    console.log('ionViewDidLoad ExplorePage');
  }

}
