import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AddProjectPage } from '../add-project/add-project';

/**
 * Generated class for the IdeaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'profile/:pid/idea/:iid'})
@Component({
  selector: 'page-idea',
  templateUrl: 'idea.html',
})
export class IdeaPage {
  ideaId;
  currentProfileId;
  myProfile;
  idea;
  imageUrl = '/assets/imgs/defaulti.jpg';
  theKey;
  textInput;
  constructor(public afDatabase: AngularFireDatabase, private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  like(){
    this.afDatabase.object(`/profile/${this.currentProfileId}/ideas/${String(this.theKey)}/likes`).set(parseInt(this.idea.likes) + 1).then(()=>{
      console.log("setted")
    })
  }

  gotoAddProject(){
    this.navCtrl.push(AddProjectPage);
  }

  ionViewDidLoad() {
    this.ideaId = this.navParams.get('iid');
    this.currentProfileId = this.navParams.get('pid');
    console.log(this.ideaId,this.currentProfileId, "the ids")
    this.afAuth.authState.take(1).subscribe(res =>{
      if(res && res.email && res.uid){
        if(this.currentProfileId === res.uid){
          this.myProfile = true;
        }else{
          this.myProfile = false;
        }
        this.afDatabase.list(`profile/${this.currentProfileId}/ideas`).snapshotChanges().subscribe(idea =>{
          var ideaAux = []
          var keys = []
          idea.forEach(function(result){
            ideaAux.push(result.payload.val());
            keys.push(result.key);
          })
          this.idea = ideaAux.filter(res => res.id === this.ideaId)[0];
          this.theKey = keys[ideaAux.indexOf(this.idea)];
          console.log(this.theKey)
          console.log(this.idea,"the idea is ");
        })
      }
    })
  }

}
