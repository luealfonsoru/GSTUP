import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs-compat';
import 'rxjs/add/operator/take';
import { AddIdeaPage } from '../add-idea/add-idea';
import { AddProjectPage } from '../add-project/add-project';
import { AddOrgPage } from '../add-org/add-org';
import { IdeaPage } from '../idea/idea';

/**
 * Generated class for the ProjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'profile/:pid/projects'})
@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {
  projects;
  ideas;
  organizations;
  userId;
  currentId;
  myProfile;
 
  constructor(private afAuth: AngularFireAuth, public afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  }

  gotoIdea(id){
    this.navCtrl.push(IdeaPage,{pid:this.currentId,iid:id.id})
  }
  gotoAddIdea(){
    this.navCtrl.push(AddIdeaPage);
  }
  gotoAddProject(){
    this.navCtrl.push(AddProjectPage);
  }

  gotoAddOrg(){
    this.navCtrl.push(AddOrgPage);
  }

  ionViewDidLoad() {
    this.afAuth.authState.take(1).subscribe(res =>{
      if(res && res.uid && res.email){
          this.userId = res.uid;
          this.currentId = this.navParams.get('pid');
          if(!this.currentId){
            this.currentId = res.uid
          }
          if(this.currentId === res.uid){
            this.myProfile = true;
          }else{
            this.myProfile = false;
          }
        this.afDatabase.list(`profile/${this.currentId}`).snapshotChanges().subscribe(data =>{
          try{
            this.projects = data.filter(res => res.key === "projects")[0].payload.val();
          }catch{
            this.projects = [];
          }
          console.log(this.projects, "projects")
          try{
            this.ideas = data.filter(res => res.key === "ideas")[0].payload.val();
          }catch{
            this.ideas = [];
          }
          try{
            this.organizations = data.filter(res => res.key === "orgs")[0].payload.val();
          }catch{
            this.organizations = [];
          }
        })
      }
    })
    console.log('ionViewDidLoad ProjectsPage');
  }

}
