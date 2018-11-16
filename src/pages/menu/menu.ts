import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ExplorePage } from '../explore/explore';
import { MessagesPage } from '../messages/messages';
import { ProfilePage } from '../profile/profile';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs-compat';
import 'rxjs/add/operator/take';
import { AngularFireDatabase } from 'angularfire2/database';
import { AddinfoPage } from '../addinfo/addinfo';
import { ProjectsPage } from '../projects/projects';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  profileId = '0';
  explorerRoot = ExplorePage;
  messagesRoot = MessagesPage;
  profileRoot = ProfilePage;
  projectsRoot = ProjectsPage;
  

  constructor(public loadingCtrl: LoadingController, public afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {
  }

  loading = this.loadingCtrl.create()

  ionViewDidLoad() {
    this.loading.present();
    this.afAuth.authState.take(1).subscribe(res => {
      if(res && res.uid && res.email){
        this.profileId = res.uid;
        this.afDatabase.list(`profile/${res.uid}`).snapshotChanges().subscribe(data =>{
          try{
            var duh = data.filter(res => res.key === "name")[0].payload.val;
            this.loading.dismiss();
          }catch{
            this.loading.dismiss();
            this.navCtrl.setRoot(AddinfoPage);
            
          }
        },(e)=>{
          this.loading.dismiss();
          this.navCtrl.setRoot(AddinfoPage);
        })
      }
    })
    console.log('ionViewDidLoad MenuPage');
  }

}
