import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs-compat';
import 'rxjs/add/operator/take';

/**
 * Generated class for the AddinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addinfo',
  templateUrl: 'addinfo.html',
})
export class AddinfoPage {
  profile = {name: ''};
  userId;
  interests;
  constructor(private afAuth: AngularFireAuth, public afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.take(1).subscribe(res=>{
      if(res && res.uid && res.email){
        this.userId = res.uid;
      }
      this.afDatabase.list(`interests`).snapshotChanges().subscribe(data =>{
        var interests = [];
        data.forEach(function(result){
          interests.push(result.payload.val());
        })
        this.interests = interests;
        console.log(this.interests);
      })
    })
    console.log('ionViewDidLoad AddinfoPage');
  }

}
