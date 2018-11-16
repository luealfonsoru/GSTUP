import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs-compat';
import 'rxjs/add/operator/take';
import { MenuPage } from '../menu/menu';

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
  @ViewChild(Content) content : Content;
  profile = {
    name: '',
    username: '',
    studies: '',
    interest: [],
    about:'',
    money: 0,
    type: 'p'
  };
  userId;
  interests;
  searchInput = '';
  searchedData;
  imageUrl = '/assets/imgs/default.png';
  constructor(public alertCtrl: AlertController, private afAuth: AngularFireAuth, public afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  }
  addInterest(categorie){
    if(this.profile.interest.length < 4){
      var myIndex
      this.profile.interest.push(categorie);
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
    myIndex = this.profile.interest.indexOf(categorie);
    this.profile.interest.splice(myIndex,1)
    this.searchInput = '';
    this.searchedData = [];
  }
  maxInterest(){
      const alert = this.alertCtrl.create({
        title: "No puedes agregar más",
        subTitle: "Debes agregar entre 1 y 4 intereses",
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

  createProfile(){
    this.afAuth.authState.take(1).subscribe(res =>{
      this.afDatabase.object(`profile/${res.uid}`).set(this.profile).then(()=>
      this.navCtrl.setRoot(MenuPage)
    )
    })
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
