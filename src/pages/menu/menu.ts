import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExplorePage } from '../explore/explore';
import { MessagesPage } from '../messages/messages';
import { ProjectsPage } from '../projects/projects';
import { ProfilePage } from '../profile/profile';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs-compat';
import 'rxjs/add/operator/take';

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
  projectsRoot = ProjectsPage;
  profileRoot = ProfilePage;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.take(1).subscribe(res => {
      if(res && res.uid && res.email){
        this.profileId = res.uid;
      }
    })
    console.log('ionViewDidLoad MenuPage');
  }

}
