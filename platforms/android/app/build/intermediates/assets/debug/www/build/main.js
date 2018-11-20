webpackJsonp([16],{

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddIdeaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__projects_projects__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AddIdeaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddIdeaPage = /** @class */ (function () {
    function AddIdeaPage(alertCtrl, afDatabase, afAuth, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imageUrl = '/assets/imgs/defaulti.jpg';
        this.profile = {
            title: '',
            about: '',
            brainstorm: [],
            perks: [],
            likes: 0,
            by: ''
        };
        this.searchInput = '';
    }
    AddIdeaPage.prototype.addInterest = function (categorie) {
        if (this.profile.perks.length < 4) {
            var myIndex;
            this.profile.perks.push(categorie);
            myIndex = this.interests.indexOf(categorie);
            this.interests.splice(myIndex, 1);
            this.searchInput = '';
            this.searchedData = [];
        }
        else {
            this.maxInterest();
        }
    };
    AddIdeaPage.prototype.removeInterest = function (categorie) {
        var myIndex;
        this.interests.push(categorie);
        myIndex = this.profile.perks.indexOf(categorie);
        this.profile.perks.splice(myIndex, 1);
        this.searchInput = '';
        this.searchedData = [];
    };
    AddIdeaPage.prototype.maxInterest = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "No puedes agregar más",
            subTitle: "Debes agregar entre 1 y 4 perks",
            buttons: [{
                    text: 'Aceptar',
                    handler: function () {
                        _this.searchInput = '';
                        _this.searchedData = [];
                    }
                }]
        });
        alert.present();
    };
    AddIdeaPage.prototype.createProfile = function () {
        var _this = this;
        this.afAuth.authState.take(1).subscribe(function (res) {
            var pushId = _this.afDatabase.createPushId();
            _this.afDatabase.object("profile/" + res.uid + "/ideas/" + pushId).set(_this.profile).then(function () {
                _this.afDatabase.object("ideas/" + pushId).set(_this.profile).then(function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__projects_projects__["a" /* ProjectsPage */]);
                });
            });
        });
    };
    AddIdeaPage.prototype.scroll = function () {
        this.content.scrollTo(0, 250);
    };
    AddIdeaPage.prototype.searchFilter = function () {
        var _this = this;
        if (this.searchInput === '') {
            this.searchedData = [];
            this.content.scrollTo(0, 250);
        }
        else {
            this.content.scrollTo(0, 250);
            this.searchedData = this.interests.filter(function (item) {
                return item.name.toLowerCase().includes(_this.searchInput.toLowerCase());
            });
        }
        console.log(this.searchedData);
    };
    AddIdeaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log(this.profile, "about");
        this.afAuth.authState.take(1).subscribe(function (res) {
            if (res && res.uid && res.email) {
                _this.userId = res.uid;
                _this.profile.by = res.uid;
            }
            _this.afDatabase.list("interests").snapshotChanges().subscribe(function (data) {
                var interests = [];
                data.forEach(function (result) {
                    interests.push(result.payload.val());
                });
                _this.interests = interests;
                console.log(_this.interests);
            });
        });
        console.log('ionViewDidLoad AddIdeaPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], AddIdeaPage.prototype, "content", void 0);
    AddIdeaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-idea',template:/*ion-inline-start:"/home/luis/GSTUP/src/pages/add-idea/add-idea.html"*/'<!--\n  Generated template for the AddIdeaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Crear Idea</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="main-background">\n  <ion-row>\n      <ion-card style="height: 25vh; width:100vw;padding: 0px;margin: 0px; background-color: #000000;margin-right:1px">\n        <img *ngIf="imageUrl" [src]="imageUrl">\n        <div class="card-title">¡Nueva Idea!</div>\n      </ion-card>\n    </ion-row>\n<ion-row>    \n  <ion-card style="background-color: #0c80a0;">\n    <ion-card-content style="padding:3%">\n      <div class="info-container">Por favor, agrega la información de tu idea</div>\n    </ion-card-content>\n  </ion-card>\n</ion-row>\n<ion-row>\n  <ion-item style="width: 88vw; margin-left: 10vw">\n    <ion-input type="text" placeholder="Título*" [(ngModel)]="profile.title" autocomplete="true" spellcheck="true" autocorrect="on" maxlength="40"></ion-input>\n  </ion-item>\n  <ion-item style="width: 96vw; margin-left: 2vw; margin-top:3vh">\n    <ion-input autocomplete="true" spellcheck="true" autocorrect="on" placeholder="Busca y Agrega entre 1 y 4 Perks*" [(ngModel)]="searchInput" (input)="searchFilter()"></ion-input>\n  </ion-item>\n  <ion-item style="width: 96vw; margin-left: 2vw; margin-top:0" *ngFor="let result of searchedData; let last = last" (click)="addInterest(result)">\n        <div class="text">{{result.name}}\n          {{last ? scroll():\'\'}}\n        </div> \n  </ion-item>\n</ion-row>\n<ion-row style="padding-bottom: 0px; margin-bottom: -20px;">\n  <ion-card style="height: 50px; width:80px; background-color: #0c80a0; margin-right: 1px;">\n    <div class="card-section">Perks</div>\n  </ion-card> \n      <ion-card *ngFor="let inter of profile.perks" style="height: 50px; width:50px; background-color: #0c80a0;margin-left:1px;margin-right:1px;margin-top:12px" (click)="removeInterest(inter)">\n          <ion-icon [name]="inter.icon" class="white-icon"></ion-icon>\n          <ion-icon name="close-circle" class="close-icon"></ion-icon>\n          <div class="card-subsection">{{inter.name}}</div>\n        </ion-card>\n  </ion-row>\n\n  <ion-row>\n    <ion-item style="width: 88vw; margin-left: 10vw; margin-top:20px;height: 120px;">\n      <ion-textarea style="height: 120px" placeholder="Descríbe tu idea en menos de 250 caracteres" [(ngModel)]="profile.about" type="text" maxlength="250" autocomplete="true" spellcheck="true" autocorrect="on"></ion-textarea>\n    </ion-item>\n  </ion-row>\n\n\n\n</ion-content>\n\n<ion-footer>\n<button (click)="createProfile()" class="bottom-button" ion-button block style="text-transform: none;" [disabled]="profile.name === \'\' || profile.about === \'\' || profile.perks.length === 0">Crear Idea</button>\n</ion-footer>'/*ion-inline-end:"/home/luis/GSTUP/src/pages/add-idea/add-idea.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AddIdeaPage);
    return AddIdeaPage;
}());

//# sourceMappingURL=add-idea.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProjectPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__projects_projects__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AddProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddProjectPage = /** @class */ (function () {
    function AddProjectPage(afAuth, afDatabase, alertCtrl, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imageUrl = '/assets/imgs/defaulti.jpg';
        this.profile = {
            title: '',
            about: '',
            stages: [],
            perks: [],
            integrants: [],
            sp: [],
            likes: 0,
            by: ''
        };
        this.searchInput = '';
        this.searchInput2 = '';
        this.profileList = [];
        this.searchedData2 = [];
        this.titleTemp = '';
        this.descriptionTemp = '';
        this.adding = false;
        this.spAdding = false;
        this.rwAdding = false;
        this.spUrl = '';
        this.spTitle = '';
        this.spDesc = '';
    }
    AddProjectPage.prototype.addInterest = function (categorie) {
        if (this.profile.perks.length < 4) {
            var myIndex;
            this.profile.perks.push(categorie);
            myIndex = this.interests.indexOf(categorie);
            this.interests.splice(myIndex, 1);
            this.searchInput = '';
            this.searchedData = [];
        }
        else {
            this.maxInterest();
        }
    };
    AddProjectPage.prototype.addSP = function () {
        this.profile.sp.push({ title: this.spTitle, description: this.spDesc, url: this.spUrl });
        this.spUrl = '';
        this.spTitle = '';
        this.spDesc = '';
        this.spAdding = false;
    };
    AddProjectPage.prototype.removeSP = function (stage) {
        var myIndex;
        myIndex = this.profile.sp.indexOf(stage);
        this.profile.sp.splice(myIndex, 1);
    };
    AddProjectPage.prototype.addStage = function () {
        this.profile.stages.push({ title: this.titleTemp, description: this.descriptionTemp });
        this.titleTemp = '';
        this.descriptionTemp = '';
        this.adding = false;
    };
    AddProjectPage.prototype.removeStage = function (stage) {
        var myIndex;
        myIndex = this.profile.stages.indexOf(stage);
        this.profile.stages.splice(myIndex, 1);
    };
    AddProjectPage.prototype.removeInterest = function (categorie) {
        var myIndex;
        this.interests.push(categorie);
        myIndex = this.profile.perks.indexOf(categorie);
        this.profile.perks.splice(myIndex, 1);
        this.searchInput = '';
        this.searchedData = [];
    };
    AddProjectPage.prototype.addInterest2 = function (categorie) {
        var myIndex;
        this.profile.integrants.push(categorie);
        myIndex = this.profileList.indexOf(categorie);
        this.profileList.splice(myIndex, 1);
        this.searchInput2 = '';
        this.searchedData2 = [];
    };
    AddProjectPage.prototype.removeInterest2 = function (categorie) {
        console.log(categorie, this.userId, "the psh push");
        if (categorie.id !== this.profile.by) {
            var myIndex;
            this.profileList.push(categorie);
            myIndex = this.profile.integrants.indexOf(categorie);
            this.profile.integrants.splice(myIndex, 1);
            this.searchInput2 = '';
            this.searchedData2 = [];
        }
    };
    AddProjectPage.prototype.maxInterest = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "No puedes agregar más",
            subTitle: "Debes agregar entre 1 y 4 perks",
            buttons: [{
                    text: 'Aceptar',
                    handler: function () {
                        _this.searchInput = '';
                        _this.searchedData = [];
                    }
                }]
        });
        alert.present();
    };
    AddProjectPage.prototype.scroll = function () {
        this.content.scrollTo(0, 250);
    };
    AddProjectPage.prototype.scroll2 = function () {
        this.content.scrollToBottom();
    };
    AddProjectPage.prototype.searchFilter = function () {
        var _this = this;
        if (this.searchInput === '') {
            this.searchedData = [];
            this.content.scrollTo(0, 250);
        }
        else {
            this.content.scrollTo(0, 250);
            this.searchedData = this.interests.filter(function (item) {
                return item.name.toLowerCase().includes(_this.searchInput.toLowerCase());
            });
        }
        console.log(this.searchedData);
    };
    AddProjectPage.prototype.searchFilter2 = function () {
        var _this = this;
        if (this.searchInput2 === '') {
            this.searchedData2 = [];
            this.content.scrollTo(0, 250);
        }
        else {
            this.content.scrollTo(0, 250);
            this.searchedData2 = this.profileList.filter(function (item) {
                return item.name.toLowerCase().includes(_this.searchInput2.toLowerCase()) || item.username.toLowerCase().includes(_this.searchInput2.toLowerCase());
            });
            console.log(this.searchedData);
        }
    };
    AddProjectPage.prototype.addProject = function () {
        var _this = this;
        this.afDatabase.object("/profile/" + this.userId + "/projects/" + this.chatList.length).set(this.profile).then(function () {
            _this.afDatabase.object("/projects/" + _this.allProjects.length).set(_this.profile).then(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__projects_projects__["a" /* ProjectsPage */]);
            });
        });
    };
    AddProjectPage.prototype.getChat = function () {
        var _this = this;
        this.afDatabase.list("profile/" + this.userId + "/projects").snapshotChanges().subscribe(function (res) {
            try {
                _this.chatList = res.filter(function (res) { return res.key === "messages"; })[0].payload.val();
            }
            catch (_a) {
                _this.chatList = [];
            }
        });
    };
    AddProjectPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var profileList = [];
        var pAux;
        this.getChat();
        this.afAuth.authState.take(1).subscribe(function (res) {
            if (res && res.email && res.uid) {
                _this.profile.by = res.uid;
                _this.userId = res.uid;
                _this.afDatabase.list("profile").snapshotChanges().subscribe(function (datas) {
                    datas.forEach(function (value) {
                        if (value.key != res.uid) {
                            // @ts-ignore
                            profileList.push({ id: value.key, username: value.payload.val().username, name: value.payload.val().name });
                        }
                        else {
                            // @ts-ignore
                            pAux = { id: value.key, username: value.payload.val().username, name: value.payload.val().name };
                        }
                    });
                    _this.profile.integrants.push(pAux);
                    _this.profileList = profileList;
                    _this.searchFilter2();
                    console.log(_this.profileList);
                });
                _this.afDatabase.list("interests").snapshotChanges().subscribe(function (data) {
                    var interests = [];
                    data.forEach(function (result) {
                        interests.push(result.payload.val());
                    });
                    _this.interests = interests;
                    console.log(_this.interests);
                });
                _this.afDatabase.list("projects").snapshotChanges().subscribe(function (resp) {
                    var projects = [];
                    resp.forEach(function (result) {
                        projects.push(result.payload.val());
                    });
                    _this.allProjects = projects;
                });
            }
        });
        console.log('ionViewDidLoad AddProjectPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], AddProjectPage.prototype, "content", void 0);
    AddProjectPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-project',template:/*ion-inline-start:"/home/luis/GSTUP/src/pages/add-project/add-project.html"*/'<!--\n  Generated template for the AddProjectPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Crear Proyecto</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="main-background">\n  <ion-row>\n      <ion-card style="height: 25vh; width:100vw;padding: 0px;margin: 0px; background-color: #000000;margin-right:1px">\n        <img *ngIf="imageUrl" [src]="imageUrl">\n        <div class="card-title">¡Nuevo Proyecto!</div>\n      </ion-card>\n    </ion-row>\n<ion-row>    \n  <ion-card style="background-color: #0c80a0;">\n    <ion-card-content style="padding:3%">\n      <div class="info-container">Por favor, agrega la información de tu proyecto</div>\n    </ion-card-content>\n  </ion-card>\n</ion-row>\n<ion-row>\n  <ion-item style="width: 88vw; margin-left: 10vw">\n    <ion-input type="text" placeholder="Título*" [(ngModel)]="profile.title" autocomplete="true" spellcheck="true" autocorrect="on" maxlength="40"></ion-input>\n  </ion-item>\n  <ion-item style="width: 96vw; margin-left: 2vw; margin-top:3vh">\n    <ion-input autocomplete="true" spellcheck="true" autocorrect="on" placeholder="Busca y Agrega entre 1 y 4 Perks*" [(ngModel)]="searchInput" (input)="searchFilter()"></ion-input>\n  </ion-item>\n  <ion-item style="width: 96vw; margin-left: 2vw; margin-top:0" *ngFor="let result of searchedData; let last = last" (click)="addInterest(result)">\n        <div class="text">{{result.name}}\n          {{last ? scroll():\'\'}}\n        </div> \n  </ion-item>\n</ion-row>\n\n\n<ion-row style="padding-bottom: 0px;">\n  <ion-card style="height: 50px; width:80px; background-color: #0c80a0; margin-right: 1px;">\n    <div class="card-section">Perks</div>\n  </ion-card> \n      <ion-card *ngFor="let inter of profile.perks" style="height: 50px; width:50px; background-color: #0c80a0;margin-left:1px;margin-right:1px;margin-top:12px" (click)="removeInterest(inter)">\n          <ion-icon [name]="inter.icon" class="white-icon"></ion-icon>\n          <ion-icon name="close-circle" class="close-icon"></ion-icon>\n          <div class="card-subsection">{{inter.name}}</div>\n        </ion-card>\n  </ion-row>\n\n  <ion-row>\n    <ion-item style="width: 96vw; margin-left: 2vw; margin-top:3vh">\n      <ion-input autocomplete="true" spellcheck="true" autocorrect="on" placeholder="Busca y Agrega Starters a tu proyecto" [(ngModel)]="searchInput2" (input)="searchFilter2()"></ion-input>\n    </ion-item>\n    <ion-item style="width: 96vw; margin-left: 2vw; margin-top:0" *ngFor="let result of searchedData2; let last = last" (click)="addInterest2(result)">\n          <div class="text">{{result.name}}\n            {{last ? scroll():\'\'}}\n          </div> \n    </ion-item>  \n  </ion-row>\n\n  <ion-row style="padding-bottom: 0px; margin-bottom: -20px;">\n    <ion-card style="height: 50px; width:80px; background-color: #0c80a0; margin-right: 1px;">\n      <div class="card-section">Integrantes</div>\n    </ion-card> \n        <ion-card *ngFor="let inter of profile.integrants" style="height: 50px; width:50px; background-color: #0c80a0;margin-left:1px;margin-right:1px;margin-top:12px" (click)="removeInterest2(inter)">\n            <ion-icon name="md-person" class="white-icon"></ion-icon>\n            <ion-icon name="close-circle" class="close-icon"></ion-icon>\n            <div class="card-subsection">{{inter.username}}</div>\n          </ion-card>\n    </ion-row>\n\n  <ion-row>\n    <ion-item style="width: 88vw; margin-left: 10vw; margin-top:20px;height: 120px;">\n      <ion-textarea style="height: 120px" placeholder="Descríbe tu proyecto en menos de 250 caracteres" [(ngModel)]="profile.about" type="text" maxlength="250" autocomplete="true" spellcheck="true" autocorrect="on"></ion-textarea>\n    </ion-item>\n  </ion-row>\n\n <ion-row style="padding-bottom: 0px; margin-bottom: -20px;">\n    <ion-card style="height: 50px; width:80px; background-color: #0c80a0; margin-right: 1px;">\n      <div class="card-section">Etapas</div>\n    </ion-card> \n        <ion-card *ngFor="let inter of profile.stages" style="height: 50px; width:80px; background-color: #0c80a0;margin-left:1px;margin-right:1px;margin-top:12px" (click)="removeStage(inter)">\n            <ion-icon name="clock" class="white-icon"></ion-icon>\n            <ion-icon name="close-circle" class="close-icon"></ion-icon>\n            <div class="card-subsection">{{inter.title}}</div>\n          </ion-card>\n\n        <ion-card style="height: 50px; width:50px; background-color: #0c80a0;margin-left:1px;margin-right:1px;margin-top:12px" (click)="adding = !adding; scroll2()">\n            <ion-icon name="add-circle" class="white-icon"></ion-icon>\n            <div class="card-subsection">Agregar</div>\n          </ion-card>\n\n    </ion-row>\n\n    <ion-row *ngIf="adding === true" style="margin-top: 10px;">\n        <ion-item style="width: 88vw; margin-left: 10vw">\n            <ion-input type="text" placeholder="Título*" [(ngModel)]="titleTemp" autocomplete="true" spellcheck="true" autocorrect="on" maxlength="40"></ion-input>\n          </ion-item>\n      <ion-item style="width: 88vw; margin-left: 10vw; margin-top:20px;height: 120px;">\n        <ion-textarea style="height: 120px" placeholder="Descríbe la etapa*" [(ngModel)]="descriptionTemp" type="text" maxlength="250" autocomplete="true" spellcheck="true" autocorrect="on"></ion-textarea>\n      </ion-item>\n      <button (click)="addStage()" class="bottom-button" ion-button block style="text-transform: none;" [disabled]="titleTemp === \'\' && descriptionTemp === \'\'">Agregar Etapa</button>\n    </ion-row>\n\n    <ion-row style="padding-bottom: 0px; margin-bottom: -20px;">\n        <ion-card style="height: 50px; width:80px; background-color: #0c80a0; margin-right: 1px;">\n          <div class="card-section">Startup Points</div>\n        </ion-card> \n            <ion-card *ngFor="let inter of profile.sp" style="height: 50px; width:80px; background-color: #0c80a0;margin-left:1px;margin-right:1px;margin-top:12px" (click)="removeSP(inter)">\n                <ion-icon name="bulb" class="white-icon"></ion-icon>\n                <ion-icon name="close-circle" class="close-icon"></ion-icon>\n                <div class="card-subsection">{{inter.title}}</div>\n              </ion-card>\n    \n            <ion-card style="height: 50px; width:50px; background-color: #0c80a0;margin-left:1px;margin-right:1px;margin-top:12px" (click)="spAdding = !spAdding; scroll2()">\n                <ion-icon name="add-circle" class="white-icon"></ion-icon>\n                <div class="card-subsection">Agregar</div>\n              </ion-card>\n    \n        </ion-row>\n    \n        <ion-row *ngIf="spAdding === true" style="margin-top: 10px;">\n            <ion-item style="width: 88vw; margin-left: 10vw">\n                <ion-input type="text" placeholder="Título*" [(ngModel)]="spTitle" autocomplete="true" spellcheck="true" autocorrect="on" maxlength="40"></ion-input>\n              </ion-item>\n              <ion-item style="width: 88vw; margin-left: 10vw">\n                  <ion-input type="text" placeholder="URL*" [(ngModel)]="spUrl" autocomplete="true" spellcheck="true" autocorrect="on" maxlength="40"></ion-input>\n                </ion-item>\n          <ion-item style="width: 88vw; margin-left: 10vw; margin-top:20px;height: 120px;">\n            <ion-textarea style="height: 120px" placeholder="Descríbe el Startup Point*" [(ngModel)]="spDesc" type="text" maxlength="250" autocomplete="true" spellcheck="true" autocorrect="on"></ion-textarea>\n          </ion-item>\n          <button (click)="addSP()" class="bottom-button" ion-button block style="text-transform: none;" [disabled]="spTitle === \'\' && spDesc === \'\'">Agregar Startup Point</button>\n        </ion-row>\n\n\n</ion-content>\n\n<ion-footer>\n<button (click)="addProject()" class="bottom-button" ion-button block style="text-transform: none;" [disabled]="profile.title === \'\' || profile.about === \'\' || profile.perks.length === 0 || profile.sp.length === 0 || profile.stages === 0">Crear Idea</button>\n</ion-footer>'/*ion-inline-end:"/home/luis/GSTUP/src/pages/add-project/add-project.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AddProjectPage);
    return AddProjectPage;
}());

//# sourceMappingURL=add-project.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddOrgPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projects_projects__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AddOrgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddOrgPage = /** @class */ (function () {
    function AddOrgPage(alertCtrl, afDatabase, afAuth, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imageUrl = '/assets/imgs/defaulti.jpg';
        this.profile = {
            title: '',
            about: '',
            perks: [],
            likes: 0,
            by: ''
        };
        this.searchInput = '';
    }
    AddOrgPage.prototype.addInterest = function (categorie) {
        if (this.profile.perks.length < 4) {
            var myIndex;
            this.profile.perks.push(categorie);
            myIndex = this.interests.indexOf(categorie);
            this.interests.splice(myIndex, 1);
            this.searchInput = '';
            this.searchedData = [];
        }
        else {
            this.maxInterest();
        }
    };
    AddOrgPage.prototype.removeInterest = function (categorie) {
        var myIndex;
        this.interests.push(categorie);
        myIndex = this.profile.perks.indexOf(categorie);
        this.profile.perks.splice(myIndex, 1);
        this.searchInput = '';
        this.searchedData = [];
    };
    AddOrgPage.prototype.maxInterest = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "No puedes agregar más",
            subTitle: "Debes agregar entre 1 y 4 perks",
            buttons: [{
                    text: 'Aceptar',
                    handler: function () {
                        _this.searchInput = '';
                        _this.searchedData = [];
                    }
                }]
        });
        alert.present();
    };
    AddOrgPage.prototype.createProfile = function () {
        var _this = this;
        this.afDatabase.object("/profile/" + this.userId + "/orgs/" + this.orgs.length).set(this.profile).then(function () {
            _this.afDatabase.object("/orgs/" + _this.allOrgs.length).set(_this.profile).then(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__projects_projects__["a" /* ProjectsPage */]);
            });
        });
    };
    AddOrgPage.prototype.scroll = function () {
        this.content.scrollTo(0, 250);
    };
    AddOrgPage.prototype.searchFilter = function () {
        var _this = this;
        if (this.searchInput === '') {
            this.searchedData = [];
            this.content.scrollTo(0, 250);
        }
        else {
            this.content.scrollTo(0, 250);
            this.searchedData = this.interests.filter(function (item) {
                return item.name.toLowerCase().includes(_this.searchInput.toLowerCase());
            });
        }
        console.log(this.searchedData);
    };
    AddOrgPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log(this.profile, "about");
        this.afAuth.authState.take(1).subscribe(function (res) {
            if (res && res.uid && res.email) {
                _this.userId = res.uid;
                _this.profile.by = res.uid;
            }
            _this.afDatabase.list("interests").snapshotChanges().subscribe(function (data) {
                var interests = [];
                data.forEach(function (result) {
                    interests.push(result.payload.val());
                });
                _this.interests = interests;
                console.log(_this.interests);
                _this.afDatabase.list("profile/" + _this.userId).snapshotChanges().subscribe(function (datas) {
                    try {
                        _this.orgs = datas.filter(function (res) { return res.key === "orgs"; })[0].payload.val();
                    }
                    catch (_a) {
                        _this.orgs = [];
                    }
                    _this.afDatabase.list("orgs").snapshotChanges().subscribe(function (result2) {
                        var orgs = [];
                        result2.filter(function (res) {
                            orgs.push(res.payload.val());
                        });
                        _this.allOrgs = orgs;
                    });
                });
            });
        });
        console.log('ionViewDidLoad AddIdeaPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], AddOrgPage.prototype, "content", void 0);
    AddOrgPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-org',template:/*ion-inline-start:"/home/luis/GSTUP/src/pages/add-org/add-org.html"*/'<!--\n  Generated template for the AddOrgPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>Crear Organización</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  \n  <ion-content class="main-background">\n    <ion-row>\n        <ion-card style="height: 25vh; width:100vw;padding: 0px;margin: 0px; background-color: #000000;margin-right:1px">\n          <img *ngIf="imageUrl" [src]="imageUrl">\n          <div class="card-title">¡Nueva Organización!</div>\n        </ion-card>\n      </ion-row>\n  <ion-row>    \n    <ion-card style="background-color: #0c80a0;">\n      <ion-card-content style="padding:3%">\n        <div class="info-container">Por favor, agrega la información de tu Organización</div>\n      </ion-card-content>\n    </ion-card>\n  </ion-row>\n  <ion-row>\n    <ion-item style="width: 88vw; margin-left: 10vw">\n      <ion-input type="text" placeholder="Título*" [(ngModel)]="profile.title" autocomplete="true" spellcheck="true" autocorrect="on" maxlength="40"></ion-input>\n    </ion-item>\n    <ion-item style="width: 96vw; margin-left: 2vw; margin-top:3vh">\n      <ion-input autocomplete="true" spellcheck="true" autocorrect="on" placeholder="Busca y Agrega entre 1 y 4 Perks*" [(ngModel)]="searchInput" (input)="searchFilter()"></ion-input>\n    </ion-item>\n    <ion-item style="width: 96vw; margin-left: 2vw; margin-top:0" *ngFor="let result of searchedData; let last = last" (click)="addInterest(result)">\n          <div class="text">{{result.name}}\n            {{last ? scroll():\'\'}}\n          </div> \n    </ion-item>\n  </ion-row>\n  <ion-row style="padding-bottom: 0px; margin-bottom: -20px;">\n    <ion-card style="height: 50px; width:80px; background-color: #0c80a0; margin-right: 1px;">\n      <div class="card-section">Perks</div>\n    </ion-card> \n        <ion-card *ngFor="let inter of profile.perks" style="height: 50px; width:50px; background-color: #0c80a0;margin-left:1px;margin-right:1px;margin-top:12px" (click)="removeInterest(inter)">\n            <ion-icon [name]="inter.icon" class="white-icon"></ion-icon>\n            <ion-icon name="close-circle" class="close-icon"></ion-icon>\n            <div class="card-subsection">{{inter.name}}</div>\n          </ion-card>\n    </ion-row>\n  \n    <ion-row>\n      <ion-item style="width: 88vw; margin-left: 10vw; margin-top:20px;height: 120px;">\n        <ion-textarea style="height: 120px" placeholder="Descríbe tu Organización en menos de 250 caracteres" [(ngModel)]="profile.about" type="text" maxlength="250" autocomplete="true" spellcheck="true" autocorrect="on"></ion-textarea>\n      </ion-item>\n    </ion-row>\n  \n  \n  \n  </ion-content>\n  \n  <ion-footer>\n  <button (click)="createProfile()" class="bottom-button" ion-button block style="text-transform: none;" [disabled]="profile.name === \'\' || profile.about === \'\' || profile.perks.length === 0">Crear Organización</button>\n  </ion-footer>'/*ion-inline-end:"/home/luis/GSTUP/src/pages/add-org/add-org.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AddOrgPage);
    return AddOrgPage;
}());

//# sourceMappingURL=add-org.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ExplorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExplorePage = /** @class */ (function () {
    function ExplorePage(afAuth, afDatabase, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profileList = [];
        this.searchInput = "";
        this.searchedData = [];
    }
    ExplorePage.prototype.gotoProfile = function (profileId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profile_profile__["a" /* ProfilePage */], { pid: profileId });
    };
    ExplorePage.prototype.searchFilter = function () {
        var _this = this;
        console.log(this.searchInput);
        console.log(this.searchedData);
        this.searchedData = this.profileList.filter(function (item) {
            return item.name.toLowerCase().includes(_this.searchInput.toLowerCase()) || item.username.toLowerCase().includes(_this.searchInput.toLowerCase());
        });
    };
    ExplorePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var profileList = [];
        this.afAuth.authState.take(1).subscribe(function (res) {
            if (res && res.email && res.uid) {
                _this.afDatabase.list("profile").snapshotChanges().subscribe(function (datas) {
                    datas.forEach(function (value) {
                        if (value.key != res.uid) {
                            // @ts-ignore
                            profileList.push({ id: value.key, username: value.payload.val().username, name: value.payload.val().name });
                        }
                    });
                    _this.profileList = profileList;
                    _this.searchFilter();
                    console.log(_this.profileList);
                });
            }
        });
        console.log('ionViewDidLoad ExplorePage');
    };
    ExplorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-explore',template:/*ion-inline-start:"/home/luis/GSTUP/src/pages/explore/explore.html"*/'<!--\n  Generated template for the ExplorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-searchbar placeholder="Buscar" [(ngModel)]="searchInput" (ionInput)="searchFilter()"></ion-searchbar>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="main-background">\n  <div class="search-box" *ngIf="searchInput != \'\'">\n    <div class="search-result" *ngFor="let result of searchedData" (click)="gotoProfile(result.id)">\n      <div class="text">{{result.name}} (@{{result.username}})</div>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/luis/GSTUP/src/pages/explore/explore.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ExplorePage);
    return ExplorePage;
}());

//# sourceMappingURL=explore.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the OptionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OptionsPage = /** @class */ (function () {
    function OptionsPage(alertCtrl, afAuth, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OptionsPage.prototype.logOut = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Cerrando Sesión",
            subTitle: "¿Deseas cerrar sesión?",
            buttons: [{
                    text: 'No',
                    role: 'cancel'
                }, {
                    text: 'Sí',
                    handler: function () {
                        _this.afAuth.auth.signOut().then(function (res) {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                        });
                    }
                }]
        });
        alert.present();
    };
    OptionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OptionsPage');
    };
    OptionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-options',template:/*ion-inline-start:"/home/luis/GSTUP/src/pages/options/options.html"*/'<!--\n  Generated template for the OptionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Configuración</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="main-background">\n  <div (click)="logOut()" class="large-button">\n    <div class="text">\n      Cerrar Sesión\n    </div>\n  </div>\n  <div class="large-button"></div>\n  <div class="large-button"></div>\n</ion-content>\n'/*ion-inline-end:"/home/luis/GSTUP/src/pages/options/options.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], OptionsPage);
    return OptionsPage;
}());

//# sourceMappingURL=options.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addinfo_addinfo__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(afAuth, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
        this.email = '';
        this.password = '';
    }
    RegisterPage.prototype.register = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then(function (res) {
                                _this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password).then(function (res) {
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__addinfo_addinfo__["a" /* AddinfoPage */]);
                                });
                            })];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.log(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/home/luis/GSTUP/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="main-background">\n  <ion-row>    \n    <ion-card style="background-color: #0c80a0;">\n      <ion-card-content style="padding:3%">\n        <div class="info-container">¡Bienvenido o bienvenida a Getting Startup! Por favor regístrate con un correo electrónico valido.</div>\n      </ion-card-content>\n    </ion-card>\n  </ion-row>\n  <ion-row>\n    <ion-item style="width: 88vw; margin-left: 10vw">\n      <ion-input type="email" placeholder="Correo Electrónico*" [(ngModel)]="user.email"></ion-input>\n    </ion-item>\n    <ion-item style="width: 88vw; margin-left: 10vw"> \n        <ion-input type="email" placeholder="Confirmar Correo*" [(ngModel)]="email"></ion-input>\n      </ion-item>\n  </ion-row>\n  <ion-row>\n    <ion-item style="width: 88vw; margin-left: 10vw; margin-top:2vh">\n      <ion-input type="password" placeholder="Contraseña*" [(ngModel)]="user.password"></ion-input>\n    </ion-item>\n    <ion-item style="width: 88vw; margin-left: 10vw"> \n        <ion-input type="password" placeholder="Confirmar Contraseña*" [(ngModel)]="password"></ion-input>\n      </ion-item>\n  </ion-row>\n\n\n</ion-content>\n\n<ion-footer>\n  <button (click)="register(user)" class="bottom-button" ion-button block style="text-transform: none;" [disabled]="user.password !== password || user.email !== email || password === \'\' || email === \'\'">Registrarse</button>\n</ion-footer>\n'/*ion-inline-end:"/home/luis/GSTUP/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_chat__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_storage__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the MessagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MessagesPage = /** @class */ (function () {
    function MessagesPage(afStorage, afAuth, afDatabase, loadingCtrl, navCtrl, navParams) {
        this.afStorage = afStorage;
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.chats = [];
        this.loading = this.loadingCtrl.create();
        this.chatUrlGotten = false;
    }
    MessagesPage.prototype.gotoChat = function (chat) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__chat_chat__["a" /* ChatPage */], { id: chat.id });
    };
    MessagesPage.prototype.getImageUrl = function (chat) {
        var _this = this;
        try {
            var chatLength = chat.length - 1;
            this.afStorage.ref(chat[chatLength].with + "/profile.jpg").getDownloadURL().subscribe(function (res) {
                _this.chats[chatLength].url = res;
                if (chatLength > 0) {
                    chat.pop();
                    _this.getImageUrl(chat);
                }
            }, function (e) {
                _this.chats[chatLength].url = '/assets/imgs/default.png';
                if (chatLength > 0) {
                    chat.pop();
                    _this.getImageUrl(chat);
                }
            });
        }
        catch (_a) {
            console.log("hola");
        }
    };
    MessagesPage.prototype.getLastChat = function (chat) {
        var _this = this;
        console.log(chat, "chatgettinglastchat");
        try {
            var chatLength = chat.length - 1;
            this.afDatabase.list("chats/" + chat[chatLength].id).snapshotChanges().subscribe(function (datas2) {
                console.log(datas2, "datas2getlastchat");
                try {
                    // @ts-ignore
                    _this.chats[chatLength].last = datas2.filter(function (res) { return res.key === "messages"; })[0].payload.val()[datas2.filter(function (res) { return res.key === "messages"; })[0].payload.val().length - 1];
                }
                catch (_a) {
                    console.log("hola");
                }
                if (chatLength > 0) {
                    chat.pop();
                    _this.getLastChat(chat);
                }
            });
        }
        catch (_a) {
            console.log("hola");
        }
    };
    MessagesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.afAuth.authState.take(1).subscribe(function (res) {
            console.log(res);
            if (res && res.email && res.uid) {
                _this.userId = res.uid;
                var chat = [];
                var chat2 = [];
                _this.afDatabase.list("profile/" + res.uid + "/chats").snapshotChanges().subscribe(function (datas) {
                    console.log(datas, "bugdata");
                    for (var i = 0; i < datas.length; i++) {
                        _this.chats.push(datas[i].payload.val());
                        chat.push(datas[i].payload.val());
                        chat2.push(datas[i].payload.val());
                    }
                    _this.getImageUrl(chat);
                    _this.getLastChat(chat2);
                    // try{
                    //   console.log(datas,"bug2log")
                    //   datas.forEach(function(result){
                    //     chats.push(result.payload.val());
                    //   });
                    //   this.chatsAux = chats;
                    //   this.chatsAux.forEach(result=>{
                    //                   // @ts-ignore
                    //                   afStorage.ref(result.payload.val().with + "/profile.jpg").getDownloadURL().subscribe(res=>{
                    //                     // @ts-ignore
                    //                     this.chatsAux.url = res;
                    //                   }, (e) =>{
                    //                     // @ts-ignore
                    //                     this.chatsAux.url = '/assets/imgs/default.png';
                    //                   });
                    //                   // @ts-ignore
                    //                   afDatabase.list(`chats/${chatsAux.id}`).snapshotChanges().subscribe(datas2 =>{
                    //                     try{
                    //                       // @ts-ignore
                    //                       this.chatsAux.last = datas2.filter(res => res.key ===  "messages")[0].payload.val()[datas2.filter(res => res.key ===  "messages")[0].payload.val().length - 1];
                    //                     }catch{
                    //                       // @ts-ignore
                    //                       this.chatsAux.last = '';
                    //                     }
                    //                   })
                    //   })
                    //   this.chats = chats;
                    //   console.log(this.chats,"chats");
                    // }catch{
                    //   this.chats = [];
                    // }
                }, function (e) {
                    _this.chats = [];
                });
            }
            else {
                _this.navCtrl.setRoot("HomePage");
            }
            _this.loading.dismiss();
        });
    };
    MessagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-messages',template:/*ion-inline-start:"/home/luis/GSTUP/src/pages/messages/messages.html"*/'<!--\n  Generated template for the MessagesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mensajes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="main-background">\n  <ion-card class="chat-message" *ngFor="let chat of chats" (click)="gotoChat(chat)" style="margin-top:-5px">\n    <div class="chat-info">\n      <div class="chat-title">\n        {{chat.nameWith}}\n      </div>\n      <div *ngIf="chat.last" class="chat-preview">\n        <span *ngIf="userId === chat.last.by">Yo</span><span *ngIf="userId !== chat.last.by">@{{chat.nicknameWith}}</span>:<br>\n        {{chat.last.message}}\n      </div>\n    </div>\n    <div class="chat-image">\n      <img *ngIf="chat.url" [src]="chat.url">\n    </div>\n    \n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/luis/GSTUP/src/pages/messages/messages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_angularfire2_storage__["AngularFireStorage"], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MessagesPage);
    return MessagesPage;
}());

//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 209:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 209;

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-idea/add-idea.module": [
		531,
		15
	],
	"../pages/add-org/add-org.module": [
		532,
		14
	],
	"../pages/add-project/add-project.module": [
		533,
		13
	],
	"../pages/addinfo/addinfo.module": [
		534,
		12
	],
	"../pages/chat/chat.module": [
		535,
		11
	],
	"../pages/explore/explore.module": [
		536,
		10
	],
	"../pages/idea/idea.module": [
		537,
		2
	],
	"../pages/login/login.module": [
		538,
		9
	],
	"../pages/menu/menu.module": [
		539,
		8
	],
	"../pages/messages/messages.module": [
		540,
		7
	],
	"../pages/options/options.module": [
		541,
		6
	],
	"../pages/org-info/org-info.module": [
		542,
		1
	],
	"../pages/profile/profile.module": [
		543,
		5
	],
	"../pages/project-info/project-info.module": [
		544,
		0
	],
	"../pages/projects/projects.module": [
		545,
		4
	],
	"../pages/register/register.module": [
		546,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 251;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(441);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_storage__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__config__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_menu_menu__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_explore_explore__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_messages_messages__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_chat_chat__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_options_options__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_register_register__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_addinfo_addinfo__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_projects_projects__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_add_idea_add_idea__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_add_project_add_project__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_add_org_add_org__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_explore_explore__["a" /* ExplorePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_messages_messages__["a" /* MessagesPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_options_options__["a" /* OptionsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_addinfo_addinfo__["a" /* AddinfoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_projects_projects__["a" /* ProjectsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_add_idea_add_idea__["a" /* AddIdeaPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_add_project_add_project__["a" /* AddProjectPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_add_org_add_org__["a" /* AddOrgPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {
                    mode: 'ios',
                    backButtonText: ''
                }, {
                    links: [
                        { loadChildren: '../pages/add-idea/add-idea.module#AddIdeaPageModule', name: 'AddIdeaPage', segment: 'add-idea', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-org/add-org.module#AddOrgPageModule', name: 'AddOrgPage', segment: 'add-org', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-project/add-project.module#AddProjectPageModule', name: 'AddProjectPage', segment: 'add-project', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/addinfo/addinfo.module#AddinfoPageModule', name: 'AddinfoPage', segment: 'addinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/explore/explore.module#ExplorePageModule', name: 'ExplorePage', segment: 'explore', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/idea/idea.module#IdeaPageModule', name: 'IdeaPage', segment: 'idea', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/messages/messages.module#MessagesPageModule', name: 'MessagesPage', segment: 'messages', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/options/options.module#OptionsPageModule', name: 'OptionsPage', segment: 'options', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/org-info/org-info.module#OrgInfoPageModule', name: 'OrgInfoPage', segment: 'org-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile/:pid', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/project-info/project-info.module#ProjectInfoPageModule', name: 'ProjectInfoPage', segment: 'project-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/projects/projects.module#ProjectsPageModule', name: 'ProjectsPage', segment: 'profile/:pid/projects', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_12__config__["a" /* firebaseConfig */].fire),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_storage__["AngularFireStorageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_explore_explore__["a" /* ExplorePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_messages_messages__["a" /* MessagesPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_options_options__["a" /* OptionsPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_addinfo_addinfo__["a" /* AddinfoPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_projects_projects__["a" /* ProjectsPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_add_idea_add_idea__["a" /* AddIdeaPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_add_project_add_project__["a" /* AddProjectPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_add_org_add_org__["a" /* AddOrgPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["AngularFireAuth"]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_idea_add_idea__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_project_add_project__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__add_org_add_org__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the ProjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProjectsPage = /** @class */ (function () {
    function ProjectsPage(afAuth, afDatabase, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProjectsPage.prototype.gotoAddIdea = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__add_idea_add_idea__["a" /* AddIdeaPage */]);
    };
    ProjectsPage.prototype.gotoAddProject = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__add_project_add_project__["a" /* AddProjectPage */]);
    };
    ProjectsPage.prototype.gotoAddOrg = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__add_org_add_org__["a" /* AddOrgPage */]);
    };
    ProjectsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.afAuth.authState.take(1).subscribe(function (res) {
            if (res && res.uid && res.email) {
                _this.userId = res.uid;
                _this.currentId = _this.navParams.get('pid');
                if (!_this.currentId) {
                    _this.currentId = res.uid;
                }
                if (_this.currentId === res.uid) {
                    _this.myProfile = true;
                }
                else {
                    _this.myProfile = false;
                }
                _this.afDatabase.list("profile/" + _this.currentId).snapshotChanges().subscribe(function (data) {
                    try {
                        _this.projects = data.filter(function (res) { return res.key === "projects"; })[0].payload.val();
                    }
                    catch (_a) {
                        _this.projects = [];
                    }
                    console.log(_this.projects, "projects");
                    try {
                        _this.ideas = data.filter(function (res) { return res.key === "ideas"; })[0].payload.val();
                    }
                    catch (_b) {
                        _this.ideas = [];
                    }
                    try {
                        _this.organizations = data.filter(function (res) { return res.key === "orgs"; })[0].payload.val();
                    }
                    catch (_c) {
                        _this.organizations = [];
                    }
                });
            }
        });
        console.log('ionViewDidLoad ProjectsPage');
    };
    ProjectsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-projects',template:/*ion-inline-start:"/home/luis/GSTUP/src/pages/projects/projects.html"*/'<!--\n  Generated template for the ProjectsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Proyectos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="main-background">\n  <div *ngIf="projects && ideas && organizations && projects.length === 0 && ideas.length === 0 && organizations.length === 0 && myProfile">\n    <ion-card style="background-color: #0c80a0; height: 30vh;" (click)="gotoAddIdea()">\n      <div class="add-big">Crear Idea</div>\n      <ion-icon class="add-icon-big" name="bulb"></ion-icon>\n      <div class="add-subtitle-big">¡Una idea puede cambiar el mundo! comparte tus ideas (vagas o elaboradas) y entre todos los startes te ayudaremos a complementarla hasta convertirla en un proyecto</div>\n    </ion-card>\n    <ion-card style="background-color: #0c80a0; height: 30vh;" (click)="gotoAddProject()">\n      <div class="add-big">Agregar Proyecto</div>\n      <ion-icon class="add-icon-big" name="cube"></ion-icon>\n      <div class="add-subtitle-big">Agrega tus proyectos a Getting Startup: obtén financiación, ingresa a convocatorias y da a conocer el fruto de tu trabajo.</div>\n    </ion-card>\n    <ion-card style="background-color: #0c80a0; height: 30vh;" (click)="gotoAddOrg()">\n      <div class="add-big">Crear Organización </div>\n      <ion-icon class="add-icon-big" name="contacts"></ion-icon>\n      <div class="add-subtitle-big">Las organizaciones en Getting Startup son agrupaciones de proyectos. Crea una organización para tu empresa, escuela o grupo; podrás crear convocatorias y concursos*</div>\n    </ion-card>\n  </div>\n  \n  <ion-row *ngIf="projects && ideas && organizations && (projects.length !== 0 || ideas.length !== 0 || organizations.length !== 0)" style="margin-bottom:-15px;">\n      <ion-card style="height: 9vh; width:38vw; background-color: #0c80a0; margin-right: 1px;">\n        <div class="card-section">Proyectos</div>\n      </ion-card> \n      <ion-card *ngIf="projects.length === 0" style="height: 9vh; width:38vw; background-color: #0c80a0; margin-right: 1px; margin-top:12px;margin-left:1px">\n        <div class="card-error">No hay reconocimientos para mostrar</div>\n      </ion-card>\n          <ion-card *ngFor="let award of projects" style="height: 9vh; width:9vh; background-color: #0c80a0;margin-left:1px;margin-right:1px;margin-top:12px" >\n              <ion-icon name="ribbon" class="white-icon"></ion-icon>\n              <div class="card-subsection">{{award.title}}</div>\n            </ion-card>\n  </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"/home/luis/GSTUP/src/pages/projects/projects.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ProjectsPage);
    return ProjectsPage;
}());

//# sourceMappingURL=projects.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_menu_menu__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(afAuth, platform, statusBar, splashScreen) {
        var _this = this;
        this.afAuth = afAuth;
        this.gotoHome = false;
        platform.ready().then(function () {
            _this.afAuth.user.subscribe(function (res) {
                if (res) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_menu_menu__["a" /* MenuPage */];
                }
                else {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
                }
            }, function (e) {
                console.log(e);
            });
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/luis/GSTUP/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/luis/GSTUP/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(http) {
        this.http = http;
        console.log('Hello AuthProvider Provider');
    }
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    fire: {
        apiKey: "AIzaSyCQKhY7ymLdPoO-mu4mGMqlYRWjlyIgly8",
        authDomain: "gettingstartup.firebaseapp.com",
        databaseURL: "https://gettingstartup.firebaseio.com",
        projectId: "gettingstartup",
        storageBucket: "gettingstartup.appspot.com",
        messagingSenderId: "869416098660"
    }
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_menu__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AddinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddinfoPage = /** @class */ (function () {
    function AddinfoPage(alertCtrl, afAuth, afDatabase, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profile = {
            name: '',
            username: '',
            studies: '',
            interest: [],
            about: '',
            money: 0,
            type: 'p'
        };
        this.searchInput = '';
        this.imageUrl = '/assets/imgs/default.png';
    }
    AddinfoPage.prototype.addInterest = function (categorie) {
        if (this.profile.interest.length < 4) {
            var myIndex;
            this.profile.interest.push(categorie);
            myIndex = this.interests.indexOf(categorie);
            this.interests.splice(myIndex, 1);
            this.searchInput = '';
            this.searchedData = [];
        }
        else {
            this.maxInterest();
        }
    };
    AddinfoPage.prototype.removeInterest = function (categorie) {
        var myIndex;
        this.interests.push(categorie);
        myIndex = this.profile.interest.indexOf(categorie);
        this.profile.interest.splice(myIndex, 1);
        this.searchInput = '';
        this.searchedData = [];
    };
    AddinfoPage.prototype.maxInterest = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "No puedes agregar más",
            subTitle: "Debes agregar entre 1 y 4 intereses",
            buttons: [{
                    text: 'Aceptar',
                    handler: function () {
                        _this.searchInput = '';
                        _this.searchedData = [];
                    }
                }]
        });
        alert.present();
    };
    AddinfoPage.prototype.scroll = function () {
        this.content.scrollTo(0, 250);
    };
    AddinfoPage.prototype.searchFilter = function () {
        var _this = this;
        if (this.searchInput === '') {
            this.searchedData = [];
            this.content.scrollTo(0, 250);
        }
        else {
            this.content.scrollTo(0, 250);
            this.searchedData = this.interests.filter(function (item) {
                return item.name.toLowerCase().includes(_this.searchInput.toLowerCase());
            });
        }
        console.log(this.searchedData);
    };
    AddinfoPage.prototype.createProfile = function () {
        var _this = this;
        this.afAuth.authState.take(1).subscribe(function (res) {
            _this.afDatabase.object("profile/" + res.uid).set(_this.profile).then(function () {
                return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__menu_menu__["a" /* MenuPage */]);
            });
        });
    };
    AddinfoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.afAuth.authState.take(1).subscribe(function (res) {
            if (res && res.uid && res.email) {
                _this.userId = res.uid;
            }
            _this.afDatabase.list("interests").snapshotChanges().subscribe(function (data) {
                var interests = [];
                data.forEach(function (result) {
                    interests.push(result.payload.val());
                });
                _this.interests = interests;
                console.log(_this.interests);
            });
        });
        console.log('ionViewDidLoad AddinfoPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], AddinfoPage.prototype, "content", void 0);
    AddinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addinfo',template:/*ion-inline-start:"/home/luis/GSTUP/src/pages/addinfo/addinfo.html"*/'<!--\n  Generated template for the AddinfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="main-background">\n    <ion-row>\n        <ion-card style="height: 25vh; width:100vw;padding: 0px;margin: 0px; background-color: #000000;margin-right:1px">\n          <div class="side-buttons">\n            <div class="side-button">          \n            </div>\n            <div class="side-button">\n                <ion-icon class="side-icon" name="camera"></ion-icon>\n                <div class="side-text">Agregar/<br>Cambiar</div>\n            </div>\n            <div class="side-button"></div>\n          </div>      \n          <img *ngIf="imageUrl" [src]="imageUrl">\n          <div class="card-title">Foto de Perfil</div>\n        </ion-card>\n      </ion-row>\n  <ion-row>    \n    <ion-card style="background-color: #0c80a0;">\n      <ion-card-content style="padding:3%">\n        <div class="info-container">Por favor, agrega tu información de perfil</div>\n      </ion-card-content>\n    </ion-card>\n  </ion-row>\n  <ion-row>\n    <ion-item style="width: 88vw; margin-left: 10vw">\n      <ion-input type="text" placeholder="Nombre Completo*" [(ngModel)]="profile.name" autocomplete="true" spellcheck="true" autocorrect="on" maxlength="40"></ion-input>\n    </ion-item>\n    <ion-item style="width: 88vw; margin-left: 10vw">\n      <ion-input type="text" placeholder="Nickname*" [(ngModel)]="profile.username" maxlength="20"></ion-input>\n    </ion-item>\n    <ion-item style="width: 88vw; margin-left: 10vw; margin-top:1vh">\n      <ion-input type="text" placeholder="Campo de Estudios/Profesión" [(ngModel)]="profile.studies" maxlength="20" autocomplete="true" spellcheck="true" autocorrect="on"></ion-input>\n    </ion-item>\n    <ion-item style="width: 96vw; margin-left: 2vw; margin-top:3vh">\n      <ion-input autocomplete="true" spellcheck="true" autocorrect="on" placeholder="Busca y Agrega entre 1 y 4 Intereses*" [(ngModel)]="searchInput" (input)="searchFilter()"></ion-input>\n    </ion-item>\n    <ion-item style="width: 96vw; margin-left: 2vw; margin-top:0" *ngFor="let result of searchedData; let last = last" (click)="addInterest(result)">\n          <div class="text">{{result.name}}\n            {{last ? scroll():\'\'}}\n          </div> \n    </ion-item>\n  </ion-row>\n  <ion-row style="padding-bottom: 0px; margin-bottom: -20px;">\n    <ion-card style="height: 50px; width:80px; background-color: #0c80a0; margin-right: 1px;">\n      <div class="card-section">Intereses</div>\n    </ion-card> \n        <ion-card *ngFor="let inter of profile.interest" style="height: 50px; width:50px; background-color: #0c80a0;margin-left:1px;margin-right:1px;margin-top:12px" (click)="removeInterest(inter)">\n            <ion-icon [name]="inter.icon" class="white-icon"></ion-icon>\n            <ion-icon name="close-circle" class="close-icon"></ion-icon>\n            <div class="card-subsection">{{inter.name}}</div>\n          </ion-card>\n    </ion-row>\n\n    <ion-row>\n      <ion-item style="width: 88vw; margin-left: 10vw; margin-top:20px;height: 120px;">\n        <ion-textarea style="height: 120px" placeholder="Descríbete en menos de 250 caracteres" [(ngModel)]="profile.about" type="text" maxlength="250" autocomplete="true" spellcheck="true" autocorrect="on"></ion-textarea>\n      </ion-item>\n    </ion-row>\n\n\n\n</ion-content>\n\n<ion-footer>\n  <button (click)="createProfile()" class="bottom-button" ion-button block style="text-transform: none;" [disabled]="profile.name === \'\' || profile.username === \'\' || profile.interest.length === 0">Crear Perfil</button>\n</ion-footer>'/*ion-inline-end:"/home/luis/GSTUP/src/pages/addinfo/addinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], AddinfoPage);
    return AddinfoPage;
}());

//# sourceMappingURL=addinfo.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__explore_explore__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_messages__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__addinfo_addinfo__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__projects_projects__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuPage = /** @class */ (function () {
    function MenuPage(loadingCtrl, afDatabase, navCtrl, navParams, afAuth) {
        this.loadingCtrl = loadingCtrl;
        this.afDatabase = afDatabase;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.profileId = '0';
        this.explorerRoot = __WEBPACK_IMPORTED_MODULE_2__explore_explore__["a" /* ExplorePage */];
        this.messagesRoot = __WEBPACK_IMPORTED_MODULE_3__messages_messages__["a" /* MessagesPage */];
        this.profileRoot = __WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */];
        this.projectsRoot = __WEBPACK_IMPORTED_MODULE_9__projects_projects__["a" /* ProjectsPage */];
        this.loading = this.loadingCtrl.create();
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.afAuth.authState.take(1).subscribe(function (res) {
            if (res && res.uid && res.email) {
                _this.profileId = res.uid;
                _this.afDatabase.list("profile/" + res.uid).snapshotChanges().subscribe(function (data) {
                    try {
                        var duh = data.filter(function (res) { return res.key === "name"; })[0].payload.val;
                        _this.loading.dismiss();
                    }
                    catch (_a) {
                        _this.loading.dismiss();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__addinfo_addinfo__["a" /* AddinfoPage */]);
                    }
                }, function (e) {
                    _this.loading.dismiss();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__addinfo_addinfo__["a" /* AddinfoPage */]);
                });
            }
        });
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/home/luis/GSTUP/src/pages/menu/menu.html"*/'<ion-tabs style="background-color: #08586f">\n  <ion-tab [root]="explorerRoot" tabTitle="Explorar" tabIcon="md-globe"></ion-tab>\n  <ion-tab [root]="messagesRoot" tabTitle="Mensajes" tabIcon="md-mail"></ion-tab>\n  <ion-tab [root]="projectsRoot" tabTitle="Proyectos" tabIcon="md-cube"></ion-tab>\n  <ion-tab [root]="profileRoot" tabTitle="Mi Perfil" tabIcon="md-person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/luis/GSTUP/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_chat__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__options_options__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__projects_projects__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(afStorage, loadingCtrl, afAuth, afDatabase, navCtrl, navParams) {
        this.afStorage = afStorage;
        this.loadingCtrl = loadingCtrl;
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.icon = "add";
        this.chats = [];
        this.loading = this.loadingCtrl.create();
    }
    ProfilePage.prototype.gotoChat = function () {
        var _this = this;
        this.pushId = this.afDatabase.createPushId();
        if (this.chats.length === 0) {
            this.afDatabase.object("chats/" + this.pushId).set({ integrants: [this.userId, this.currentId], chats: [] }).then(function (res) {
                _this.afDatabase.object("profile/" + _this.currentId + "/chats/" + _this.otherChats.length).set({
                    id: _this.pushId,
                    with: _this.userId,
                    nameWith: _this.otherName,
                    nicknameWith: _this.otherNickname
                }).then(function (res2) {
                    _this.afDatabase.object("profile/" + _this.userId + "/chats/" + _this.allChats.length).set({
                        id: _this.pushId,
                        with: _this.currentId,
                        nicknameWith: _this.nickname,
                        nameWith: _this.name
                    }).then(function (res3) {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__chat_chat__["a" /* ChatPage */], { id: _this.pushId });
                    });
                });
            });
        }
        else {
            var currentId = this.currentId;
            var chatId = this.chatId;
            console.log(currentId, "cuid");
            this.chatResults.forEach(function (result2) {
                if (currentId === result2.payload.val().with) {
                    chatId = result2.payload.val().id;
                    console.log("ideal");
                }
                console.log("chatId", chatId);
            });
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__chat_chat__["a" /* ChatPage */], { id: chatId });
        }
    };
    ProfilePage.prototype.gotoOptions = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__options_options__["a" /* OptionsPage */]);
    };
    ProfilePage.prototype.gotoProjects = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__projects_projects__["a" /* ProjectsPage */], { pid: this.currentId });
    };
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.currentId = this.navParams.get('pid');
        //change this :3
        console.log("lolololo xd xd xd ");
        console.log(this.currentId);
        this.afAuth.authState.take(1).subscribe(function (res) {
            console.log(res);
            if (res && res.email && res.uid) {
                _this.userId = res.uid;
                if (!_this.currentId) {
                    _this.currentId = res.uid;
                }
                if (_this.currentId === res.uid) {
                    _this.myProfile = true;
                }
                else {
                    _this.myProfile = false;
                }
                _this.afStorage.ref(_this.currentId + "/profile.jpg").getDownloadURL().subscribe(function (res) {
                    _this.imageUrl = res;
                }, function (e) {
                    _this.imageUrl = '/assets/imgs/default.png';
                });
                console.log("imageUrl", _this.imageUrl);
                _this.afDatabase.list("profile/" + _this.currentId).snapshotChanges().subscribe(function (datas) {
                    _this.name = datas.filter(function (res) { return res.key === "name"; })[0].payload.val();
                    _this.nickname = datas.filter(function (res) { return res.key === "username"; })[0].payload.val();
                    _this.interest = datas.filter(function (res) { return res.key === "interest"; })[0].payload.val();
                    _this.about = datas.filter(function (res) { return res.key === "about"; })[0].payload.val();
                    try {
                        _this.awards = datas.filter(function (res) { return res.key == "awards"; })[0].payload.val();
                    }
                    catch (_a) {
                        _this.awards = null;
                    }
                    try {
                        _this.studies = datas.filter(function (res) { return res.key == "studies"; })[0].payload.val();
                    }
                    catch (_b) {
                        _this.studies = null;
                    }
                    try {
                        _this.otherChats = datas.filter(function (res) { return res.key == "chats"; })[0].payload.val();
                    }
                    catch (_c) {
                        _this.otherChats = [];
                    }
                });
                _this.afDatabase.list("profile/" + res.uid + "/chats").snapshotChanges().subscribe(function (res2) {
                    _this.chatResults = res2;
                    console.log(res2, "theres2");
                });
                _this.afDatabase.list("profile/" + res.uid).snapshotChanges().subscribe(function (datas) {
                    try {
                        _this.allChats = datas.filter(function (res) { return res.key == "chats"; })[0].payload.val();
                    }
                    catch (_a) {
                        _this.allChats = [];
                    }
                    try {
                        // @ts-ignore
                        _this.chats = datas.filter(function (res) { return res.key == "chats"; })[0].payload.val().filter(function (res2) { return res2.with == _this.currentId; });
                    }
                    catch (_b) {
                        _this.chats = [];
                    }
                    _this.otherNickname = datas.filter(function (res) { return res.key == "username"; })[0].payload.val();
                    _this.otherName = datas.filter(function (res) { return res.key == "name"; })[0].payload.val();
                });
            }
            else {
                _this.navCtrl.setRoot("HomePage");
            }
            _this.loading.dismiss();
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/luis/GSTUP/src/pages/profile/profile.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>Perfil</ion-title>\n      <ion-buttons end *ngIf="myProfile !== null && myProfile !== false">\n        <button ion-button icon-only (click)="gotoOptions()">\n          <ion-icon class="nav-button" name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content class="main-background">\n    <ion-card *ngIf="about" style="height: 25vh; width:100vw;padding: 0px;margin: 0px; background-color: #000000;margin-right:1px">\n      <div class="side-buttons" *ngIf="myProfile !== null && myProfile === false">\n        <div class="side-button">          \n        </div>\n        <div class="side-button" (click)="gotoChat()" *ngIf="chats">\n            <ion-icon class="side-icon" name="mail"></ion-icon>\n            <div class="side-text">Enviar Mensaje</div>\n        </div>\n        <div class="side-button"></div>\n      </div>      \n      <img *ngIf="imageUrl" [src]="imageUrl">\n      <div class="card-title" *ngIf="name">{{name}}</div>\n      <div class="card-subtitle" *ngIf="nickname">@{{nickname}}</div>\n    </ion-card>\n  \n    <ion-row *ngIf="interest" style="padding-bottom: 0px; margin-bottom: -20px;">\n    <ion-card style="height: 9vh; width:25vw; background-color: #0c80a0; margin-right: 1px;">\n      <div class="card-section">Intereses</div>\n    </ion-card> \n        <ion-card *ngFor="let inter of interest" style="height: 9vh; width:9vh; background-color: #0c80a0;margin-left:1px;margin-right:1px;margin-top:12px" >\n            <ion-icon [name]="inter.icon" class="white-icon"></ion-icon>\n            <div class="card-subsection">{{inter.name}}</div>\n          </ion-card>\n    </ion-row>\n    <ion-row *ngIf="interest" style="margin-bottom:-15px;">\n        <ion-card style="height: 9vh; width:38vw; background-color: #0c80a0; margin-right: 1px;">\n          <div class="card-section">Reconocimientos</div>\n        </ion-card> \n        <ion-card *ngIf="!awards" style="height: 9vh; width:38vw; background-color: #0c80a0; margin-right: 1px; margin-top:12px;margin-left:1px">\n          <div class="card-error">No hay reconocimientos para mostrar</div>\n        </ion-card>\n            <ion-card *ngFor="let award of awards" style="height: 9vh; width:9vh; background-color: #0c80a0;margin-left:1px;margin-right:1px;margin-top:12px" >\n                <ion-icon name="ribbon" class="white-icon"></ion-icon>\n                <div class="card-subsection">{{award}}</div>\n              </ion-card>\n\n        </ion-row>\n    <ion-row style="margin-top:-20px;">    \n      <ion-card *ngIf="about" style="background-color: #0c80a0;">\n        <ion-card-content style="padding:3%">\n          <div class="about-title">Acerca de mi</div>\n          <div class="about-subtitle">"{{about}}"</div>\n        </ion-card-content>\n      </ion-card>\n    </ion-row>\n\n    <ion-row *ngIf="interest" style="padding-bottom: 0px; margin-top: -20px;">\n        <ion-card style="height: 9vh; width:25vw; background-color: #0c80a0; margin-right: 1px;">\n          <div class="card-section" style="top:20%">Estudios y Profesión</div>\n        </ion-card> \n            <ion-card style="height: 9vh; width:9vh; background-color: #0c80a0;margin-left:1px;margin-right:1px;margin-top:12px" >\n                <ion-icon name="school" class="white-icon"></ion-icon>\n                <div class="card-subsection">{{studies}}</div>\n              </ion-card>\n        </ion-row>\n\n        <ion-row (click)="gotoProjects()">    \n          <ion-card *ngIf="about" style="background-color: #0c80a0;">\n            <ion-card-content style="padding:3%">\n              <div class="about-title">Ver ideas, proyectos y organizaciones de este starter</div>\n            </ion-card-content>\n          </ion-card>\n        </ion-row>\n    \n  </ion-content>'/*ion-inline-end:"/home/luis/GSTUP/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__["AngularFireStorage"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = /** @class */ (function () {
    function ChatPage(afAuth, loadingCtrl, afDatabase, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.loadingCtrl = loadingCtrl;
        this.afDatabase = afDatabase;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.textInput = '';
        this.loading = this.loadingCtrl.create();
    }
    ChatPage.prototype.scroll = function () {
        this.chatlist.scrollToBottom();
    };
    ChatPage.prototype.getUid = function () {
        var _this = this;
        this.afAuth.authState.take(1).subscribe(function (res) {
            if (res && res.email && res.uid) {
                _this.userId = res.uid;
            }
            _this.getChat();
        });
    };
    ChatPage.prototype.chatByMe = function (chat) {
        if (chat.by === this.userId) {
            return true;
        }
        else {
            return false;
        }
    };
    ChatPage.prototype.getChat = function () {
        var _this = this;
        this.afDatabase.list("chats/" + this.id).snapshotChanges().subscribe(function (res) {
            try {
                _this.chatList = res.filter(function (res) { return res.key === "messages"; })[0].payload.val();
            }
            catch (_a) {
                _this.chatList = [];
            }
            _this.loading.dismiss();
        });
    };
    ChatPage.prototype.sendText = function () {
        var _this = this;
        this.afDatabase.object("chats/" + this.id + "/messages/" + this.chatList.length).set({
            by: this.userId,
            date: Date(),
            message: this.textInput
        }).then(function (res) {
            _this.textInput = '';
            _this.chatlist.scrollToBottom();
        });
    };
    ChatPage.prototype.ionViewDidLoad = function () {
        this.chatlist.scrollToBottom();
        this.loading.present();
        this.id = this.navParams.get('id');
        console.log(this.navParams.get('id'));
        this.getUid();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], ChatPage.prototype, "chatlist", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"/home/luis/GSTUP/src/pages/chat/chat.html"*/'<!--\n  Generated template for the ChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hide-tabs>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="chat-container">\n      <ion-card class="chat" *ngFor="let chat of chatList; let last = last">\n        <div class="your-chat" *ngIf="!chatByMe(chat)"></div>\n        <div class="my-chat" *ngIf="chatByMe(chat)"></div>\n        <div class="your-chat-text" *ngIf="!chatByMe(chat)">\n          {{chat.message}}\n        </div>\n        <div class="my-chat-text" *ngIf="chatByMe(chat)">\n            {{chat.message}}\n          </div>\n        {{last ? scroll() : \'\'}}\n      \n      </ion-card>\n </ion-content>\n\n\n\n\n <ion-footer>    \n  <div class="input-container">\n      <div class="chat-input">\n        <ion-item class="text-input">\n          <ion-textarea [(ngModel)]="textInput" autocomplete="true" spellcheck="true" autocorrect="on"></ion-textarea>\n        </ion-item>\n        <button class="send-input" ion-button block style="text-transform: none;" (click)="sendText()" [disabled]="textInput == \'\'">\n          <ion-icon class="icon" name="arrow-dropright-circle"></ion-icon>\n        </button>\n      </div>\n    </div>\n    \n  \n </ion-footer>\n'/*ion-inline-end:"/home/luis/GSTUP/src/pages/chat/chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__addinfo_addinfo__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(afDatabase, alertCtrl, afAuth, navCtrl, navParams) {
        this.afDatabase = afDatabase;
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
    }
    LoginPage.prototype.gotoRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: "Problemas Iniciando Sesión",
            subTitle: "Has ingresado de forma incorrecta tu correo electónico o contraseña. Por favor inténtalo de nuevo",
            buttons: ["Aceptar"]
        });
        alert.present();
    };
    LoginPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var result;
            return __generator(this, function (_a) {
                result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password).then(function (res) {
                    if (res.user) {
                        _this.afAuth.authState.take(1).subscribe(function (res) {
                            _this.afDatabase.list("profile/" + res.uid).snapshotChanges().subscribe(function (data) {
                                try {
                                    if (data.filter(function (res) { return res.key === "name"; })[0].payload.val) {
                                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* MenuPage */]);
                                    }
                                }
                                catch (_a) {
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__addinfo_addinfo__["a" /* AddinfoPage */]);
                                }
                            }, function (e) {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__addinfo_addinfo__["a" /* AddinfoPage */]);
                            });
                        });
                    }
                    else {
                        console.log("thou shall not be here >:v");
                    }
                }, function (e) {
                    _this.showAlert();
                    console.log(e);
                });
                return [2 /*return*/];
            });
        });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/luis/GSTUP/src/pages/login/login.html"*/'<ion-content style="height: 100%">\n  <div class="logo-container">\n    <img class="image-logo" src="assets/icon/lightbulb.svg">\n    <div class="text-logo">Getting</div>\n    <div class="text-logo">Startup</div>\n  </div>\n\n  <div class="main-title">Inicia Sesión con tu Email</div>\n  <form #loginForm="ngForm" (ngSubmit)="login(user)" class="my-form">\n    <ion-item>\n      <ion-input type="email" placeholder="Correo Electrónico" [(ngModel)]="user.email" name="uemail" required></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-input type="password" placeholder="Contraseña" [(ngModel)]="user.password" name="upass" required></ion-input>\n      </ion-item>\n    <button class="login-button" ion-button block style="text-transform: none;" type="submit" [disabled]="!loginForm.valid">Iniciar Sesión</button>\n    \n  </form>\n  <button class="login-button my-form" ion-button block style="text-transform: none;" (click)="gotoRegister()">Registrarse</button>\n</ion-content>\n'/*ion-inline-end:"/home/luis/GSTUP/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[308]);
//# sourceMappingURL=main.js.map