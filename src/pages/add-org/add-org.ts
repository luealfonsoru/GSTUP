import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, AlertController } from 'ionic-angular';
import { ProjectsPage } from '../projects/projects';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the AddOrgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-org',
  templateUrl: 'add-org.html',
})
export class AddOrgPage {

  @ViewChild(Content) content : Content;
  imageUrl = '/assets/imgs/defaulti.jpg';
  profile = {
    title: '',
    about: '',
    perks: [],
    likes: 0,
    by: '',
    id: ''
  };

  userId;
  interests;
  searchInput = '';
  searchedData;
  orgs;
  allOrgs;

  constructor(public alertCtrl: AlertController, public afDatabase: AngularFireDatabase, private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
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

  removeInterest(categorie){
    var myIndex;
    this.interests.push(categorie);
    myIndex = this.profile.perks.indexOf(categorie);
    this.profile.perks.splice(myIndex,1)
    this.searchInput = '';
    this.searchedData = [];
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

  createProfile(){
    this.profile.id = this.afDatabase.createPushId();
    this.afDatabase.object(`/profile/${this.userId}/orgs/${this.orgs.length}`).set(this.profile).then(()=>{
      this.afDatabase.object(`/orgs/${this.allOrgs.length}`).set(this.profile).then(()=>{
        this.navCtrl.setRoot(ProjectsPage);
      })
    })
  }

  scroll(){
    this.content.scrollTo(0,250);
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

  ionViewDidLoad() {
    console.log(this.profile,"about")
    this.afAuth.authState.take(1).subscribe(res=>{
      if(res && res.uid && res.email){
        this.userId = res.uid;
        this.profile.by = res.uid;
      }
      this.afDatabase.list(`interests`).snapshotChanges().subscribe(data =>{
        var interests = [];
        data.forEach(function(result){
          interests.push(result.payload.val());
        })
        this.interests = interests;
        console.log(this.interests);
        this.afDatabase.list(`profile/${this.userId}`).snapshotChanges().subscribe(datas =>{
          try{
            this.orgs = datas.filter(res => res.key === "orgs")[0].payload.val();
          }catch{
            this.orgs = [];
          }
          this.afDatabase.list(`orgs`).snapshotChanges().subscribe(result2 =>{
            var orgs = []
            result2.filter(function(res){
              orgs.push(res.payload.val());
            })
            this.allOrgs = orgs;
          })
        })
      })
    })
    console.log('ionViewDidLoad AddIdeaPage');
  }

}
