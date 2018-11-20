import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, AlertController } from 'ionic-angular';
import { Observable } from 'rxjs-compat';
import 'rxjs/add/operator/take';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { ProjectsPage } from '../projects/projects';

/**
 * Generated class for the AddProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-project',
  templateUrl: 'add-project.html',
})
export class AddProjectPage {
  @ViewChild(Content) content : Content;
  imageUrl = '/assets/imgs/defaulti.jpg';
  profile = {
    title: '',
    about: '',
    stages: [],
    perks: [],
    integrants: [],
    sp: [],
    likes: 0,
    by: '',
    id: ''
  };

  userId;
  interests;
  searchInput = '';
  searchInput2 = '';
  searchedData;
  profileList = [];
  searchedData2 = [];
  titleTemp = '';
  descriptionTemp = '';
  adding = false;
  spAdding = false;
  rwAdding = false;

  spUrl = '';
  spTitle = '';
  spDesc = '';
  chatList;
  allProjects;

  constructor(private afAuth: AngularFireAuth, public afDatabase: AngularFireDatabase, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  addInterest(categorie){
    if(this.profile.perks.length < 4){
      var myIndex
      this.profile.perks.push(categorie);
      myIndex = this.interests.indexOf(categorie);
      this.interests.splice(myIndex,1);
      this.searchInput = '';
      this.searchedData = [];
    }else{
      this.maxInterest();
    }

  }

  addSP(){
    this.profile.sp.push({title:this.spTitle,description:this.spDesc,url:this.spUrl});
    this.spUrl = '';
    this.spTitle = '';
    this.spDesc = '';
    this.spAdding = false;
  }

  removeSP(stage){
    var myIndex;
    myIndex = this.profile.sp.indexOf(stage);
    this.profile.sp.splice(myIndex,1);
  }

  addStage(){
    this.profile.stages.push({title:this.titleTemp,description:this.descriptionTemp});
    this.titleTemp = '';
    this.descriptionTemp = '';
    this.adding = false;
  }

  removeStage(stage){
    var myIndex;
    myIndex = this.profile.stages.indexOf(stage);
    this.profile.stages.splice(myIndex,1);
  }

  removeInterest(categorie){
    var myIndex;
    this.interests.push(categorie);
    myIndex = this.profile.perks.indexOf(categorie);
    this.profile.perks.splice(myIndex,1)
    this.searchInput = '';
    this.searchedData = [];
  }

  addInterest2(categorie){
      var myIndex
      this.profile.integrants.push(categorie);
      myIndex = this.profileList.indexOf(categorie);
      this.profileList.splice(myIndex,1);
      this.searchInput2 = '';
      this.searchedData2 = [];

  }

  removeInterest2(categorie){
    console.log(categorie,this.userId,"the psh push")
    if(categorie.id !== this.profile.by){
      var myIndex;
      this.profileList.push(categorie);
      myIndex = this.profile.integrants.indexOf(categorie);
      this.profile.integrants.splice(myIndex,1)
      this.searchInput2 = '';
      this.searchedData2 = [];
    }
  }

  maxInterest(){
    const alert = this.alertCtrl.create({
      title: "No puedes agregar más",
      subTitle: "Debes agregar entre 1 y 4 perks",
      buttons: [{
        text: 'Aceptar',
        handler: () =>{
          this.searchInput = '';
          this.searchedData = [];
        }
      }]
    });
    alert.present();
  }

  scroll(){
    this.content.scrollTo(0,250);
  }

  scroll2(){
    this.content.scrollToBottom();
  }

  searchFilter(){
    if(this.searchInput === ''){
      this.searchedData = [];
      this.content.scrollTo(0,250);
    }else{
    this.content.scrollTo(0,250);
    this.searchedData = this.interests.filter((item)=>{
      return item.name.toLowerCase().includes(this.searchInput.toLowerCase());
    })}
    console.log(this.searchedData);
  }

  searchFilter2(){
      if(this.searchInput2 === ''){
        this.searchedData2 = [];
        this.content.scrollTo(0,250);
      }else{
      this.content.scrollTo(0,250);
      this.searchedData2 = this.profileList.filter((item)=>{
        return item.name.toLowerCase().includes(this.searchInput2.toLowerCase()) || item.username.toLowerCase().includes(this.searchInput2.toLowerCase());
      })
      console.log(this.searchedData);
    }
  }

  addProject(){
    this.profile.id = this.afDatabase.createPushId();
      this.afDatabase.object(`/profile/${this.userId}/projects/${this.chatList.length}`).set(this.profile).then(()=>{
        this.afDatabase.object(`/projects/${this.allProjects.length}`).set(this.profile).then(()=>{
          this.navCtrl.setRoot(ProjectsPage);
        })
      })
  }

  getChat(){
    this.afDatabase.list(`profile/${this.userId}/projects`).snapshotChanges().subscribe(res=>{
      this.chatList = res;
    })
  }



  ionViewDidLoad() {
    var profileList = []
    var pAux;
    this.afAuth.authState.take(1).subscribe(res =>{
      if(res && res.email && res.uid){
        this.profile.by = res.uid;
        this.userId = res.uid;
        this.getChat();
        this.afDatabase.list(`profile`).snapshotChanges().subscribe( datas => {
          datas.forEach(function(value){
            if(value.key != res.uid){
              // @ts-ignore
              profileList.push({id: value.key, username: value.payload.val().username, name: value.payload.val().name});
            }else{
              // @ts-ignore
              pAux = {id: value.key, username: value.payload.val().username, name: value.payload.val().name};
            }            
          })
          this.profile.integrants.push(pAux);
          this.profileList = profileList;
          this.searchFilter2();
          console.log(this.profileList);
        });
        this.afDatabase.list(`interests`).snapshotChanges().subscribe(data =>{
          var interests = [];
          data.forEach(function(result){
            interests.push(result.payload.val());
          })
          this.interests = interests;
          console.log(this.interests);
        })
        this.afDatabase.list(`projects`).snapshotChanges().subscribe(resp =>{
          var projects =[];
          resp.forEach(function(result){
            projects.push(result.payload.val());
          })
          this.allProjects = projects;
        })
      }

    })
    console.log('ionViewDidLoad AddProjectPage');
  }

}
