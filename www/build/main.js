webpackJsonp([8],{

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExplorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_profile__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(43);
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

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OptionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(94);
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

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_chat__ = __webpack_require__(92);
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
    function MessagesPage(afAuth, afDatabase, loadingCtrl, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = this.loadingCtrl.create();
    }
    MessagesPage.prototype.gotoChat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__chat_chat__["a" /* ChatPage */], { id: "1000" });
    };
    MessagesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.afAuth.authState.take(1).subscribe(function (res) {
            console.log(res);
            if (res && res.email && res.uid) {
                _this.afDatabase.list("profile/" + res.uid).snapshotChanges().subscribe(function (datas) {
                    try {
                        _this.chats = datas.filter(function (res) { return res.key == "chats"; })[0].payload.val();
                    }
                    catch (_a) {
                        _this.chats = null;
                    }
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
            selector: 'page-messages',template:/*ion-inline-start:"/home/luis/GSTUP/src/pages/messages/messages.html"*/'<!--\n  Generated template for the MessagesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mensajes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="main-background">\n <div (click)="gotoChat()">A chat</div>\n</ion-content>\n'/*ion-inline-end:"/home/luis/GSTUP/src/pages/messages/messages.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], MessagesPage);
    return MessagesPage;
}());

//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
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
    function ProjectsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProjectsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProjectsPage');
    };
    ProjectsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-projects',template:/*ion-inline-start:"/home/luis/GSTUP/src/pages/projects/projects.html"*/'<!--\n  Generated template for the ProjectsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Projects</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/luis/GSTUP/src/pages/projects/projects.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ProjectsPage);
    return ProjectsPage;
}());

//# sourceMappingURL=projects.js.map

/***/ }),

/***/ 203:
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
webpackEmptyAsyncContext.id = 203;

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chat/chat.module": [
		526,
		7
	],
	"../pages/explore/explore.module": [
		527,
		6
	],
	"../pages/login/login.module": [
		528,
		5
	],
	"../pages/menu/menu.module": [
		529,
		4
	],
	"../pages/messages/messages.module": [
		530,
		3
	],
	"../pages/options/options.module": [
		531,
		2
	],
	"../pages/profile/profile.module": [
		532,
		1
	],
	"../pages/projects/projects.module": [
		533,
		0
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
webpackAsyncContext.id = 245;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(436);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_storage__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angularfire2_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__config__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_menu_menu__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_profile_profile__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_explore_explore__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_messages_messages__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_projects_projects__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_chat_chat__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_options_options__ = __webpack_require__(162);
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
                __WEBPACK_IMPORTED_MODULE_17__pages_projects_projects__["a" /* ProjectsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_options_options__["a" /* OptionsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {
                    mode: 'ios',
                    backButtonText: ''
                }, {
                    links: [
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat/:id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/explore/explore.module#ExplorePageModule', name: 'ExplorePage', segment: 'explore', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/messages/messages.module#MessagesPageModule', name: 'MessagesPage', segment: 'messages', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/options/options.module#OptionsPageModule', name: 'OptionsPage', segment: 'options', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile/:pid', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/projects/projects.module#ProjectsPageModule', name: 'ProjectsPage', segment: 'projects', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_17__pages_projects_projects__["a" /* ProjectsPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_options_options__["a" /* OptionsPage */]
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

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_menu_menu__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(43);
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

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(518);
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

/***/ 525:
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

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(43);
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
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]) === "function" && _a || Object)
    ], ChatPage.prototype, "chatlist", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"/home/luis/GSTUP/src/pages/chat/chat.html"*/'<!--\n  Generated template for the ChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hide-tabs>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="chat-container">\n      <ion-card class="chat" *ngFor="let chat of chatList; let last = last">\n        <div class="your-chat" *ngIf="!chatByMe(chat)"></div>\n        <div class="my-chat" *ngIf="chatByMe(chat)"></div>\n        <div class="your-chat-text" *ngIf="!chatByMe(chat)">\n          {{chat.message}}\n        </div>\n        <div class="my-chat-text" *ngIf="chatByMe(chat)">\n            {{chat.message}}\n          </div>\n        {{last ? scroll() : \'\'}}\n      \n      </ion-card>\n </ion-content>\n\n\n\n\n <ion-footer>    \n  <div class="input-container">\n      <div class="chat-input">\n        <ion-item class="text-input">\n          <ion-textarea [(ngModel)]="textInput" autocomplete="true" spellcheck="true" autocorrect="on"></ion-textarea>\n        </ion-item>\n        <button class="send-input" ion-button block style="text-transform: none;" (click)="sendText()" [disabled]="textInput == \'\'">\n          <ion-icon class="icon" name="arrow-dropright-circle"></ion-icon>\n        </button>\n      </div>\n    </div>\n    \n  \n </ion-footer>\n'/*ion-inline-end:"/home/luis/GSTUP/src/pages/chat/chat.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _f || Object])
    ], ChatPage);
    return ChatPage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_chat__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__options_options__ = __webpack_require__(162);
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
                        _this.otherChats = datas.filter(function (res) { return res.key == "chats"; })[0].payload.val();
                    }
                    catch (_b) {
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
            selector: 'page-profile',template:/*ion-inline-start:"/home/luis/GSTUP/src/pages/profile/profile.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>Perfil</ion-title>\n      <ion-buttons end *ngIf="myProfile !== null && myProfile !== false">\n        <button ion-button icon-only (click)="gotoOptions()">\n          <ion-icon class="nav-button" name="menu"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content class="main-background">\n    <ion-card *ngIf="about" style="height: 25vh; width:100vw;padding: 0px;margin: 0px; background-color: #000000;margin-right:1px">\n      <div class="side-buttons" *ngIf="myProfile !== null && myProfile === false">\n        <div class="side-button">          \n        </div>\n        <div class="side-button" (click)="gotoChat()" *ngIf="chats">\n            <ion-icon class="side-icon" name="mail"></ion-icon>\n            <div class="side-text">Enviar Mensaje</div>\n        </div>\n        <div class="side-button"></div>\n      </div>      \n      <img *ngIf="imageUrl" [src]="imageUrl">\n      <div class="card-title" *ngIf="name">{{name}}</div>\n      <div class="card-subtitle" *ngIf="nickname">@{{nickname}}</div>\n    </ion-card>\n  \n    <ion-row *ngIf="interest" style="padding-bottom: 0px; margin-bottom: -20px;">\n    <ion-card style="height: 9vh; width:25vw; background-color: #0c80a0; margin-right: 1px;">\n      <div class="card-section">Intereses</div>\n    </ion-card> \n        <ion-card *ngFor="let inter of interest" style="height: 9vh; width:9vh; background-color: #0c80a0;margin-left:1px;margin-right:1px;margin-top:12px" >\n            <ion-icon [name]="inter.icon" class="white-icon"></ion-icon>\n            <div class="card-subsection">{{inter.name}}</div>\n          </ion-card>\n    </ion-row>\n    <ion-row *ngIf="interest" style="margin-bottom:-15px;">\n        <ion-card style="height: 9vh; width:38vw; background-color: #0c80a0; margin-right: 1px;">\n          <div class="card-section">Reconocimientos</div>\n        </ion-card> \n        <ion-card *ngIf="!awards" style="height: 9vh; width:38vw; background-color: #0c80a0; margin-right: 1px; margin-top:12px;margin-left:1px">\n          <div class="card-error">No hay reconocimientos para mostrar</div>\n        </ion-card>\n            <ion-card *ngFor="let award of awards" style="height: 9vh; width:9vh; background-color: #0c80a0;margin-left:1px;margin-right:1px;margin-top:12px" >\n                <ion-icon name="ribbon" class="white-icon"></ion-icon>\n                <div class="card-subsection">{{award}}</div>\n              </ion-card>\n\n        </ion-row>\n    <ion-row>    \n      <ion-card *ngIf="about" style="background-color: #0c80a0;">\n        <ion-card-content style="padding:3%">\n          <div class="about-title">Acerca de mi</div>\n          <div class="about-subtitle">"{{about}}"</div>\n        </ion-card-content>\n      </ion-card>\n    </ion-row>\n    \n  </ion-content>'/*ion-inline-end:"/home/luis/GSTUP/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__["AngularFireStorage"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_storage__["AngularFireStorage"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _f || Object])
    ], ProfilePage);
    return ProfilePage;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__menu_menu__ = __webpack_require__(95);
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
    function LoginPage(alertCtrl, afAuth, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
    }
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
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__menu_menu__["a" /* MenuPage */]);
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
            selector: 'page-login',template:/*ion-inline-start:"/home/luis/GSTUP/src/pages/login/login.html"*/'<ion-content style="height: 100%">\n  <div class="logo-container">\n    <img class="image-logo" src="assets/icon/lightbulb.svg">\n    <div class="text-logo">Getting</div>\n    <div class="text-logo">Startup</div>\n  </div>\n\n  <div class="main-title">Inicia Sesión con tu Email</div>\n  <form #loginForm="ngForm" (ngSubmit)="login(user)" class="my-form">\n    <ion-item>\n      <ion-input type="email" placeholder="Correo Electrónico" [(ngModel)]="user.email" name="uemail" required></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-input type="password" placeholder="Contraseña" [(ngModel)]="user.password" name="upass" required></ion-input>\n      </ion-item>\n    <button class="login-button" ion-button block style="text-transform: none;" type="submit" [disabled]="!loginForm.valid">Iniciar Sesión</button>\n    <button class="login-button" ion-button block style="text-transform: none;" (click)="register()">Registrarse</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/luis/GSTUP/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__explore_explore__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_messages__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__projects_projects__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_take__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_take__);
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
    function MenuPage(navCtrl, navParams, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.profileId = '0';
        this.explorerRoot = __WEBPACK_IMPORTED_MODULE_2__explore_explore__["a" /* ExplorePage */];
        this.messagesRoot = __WEBPACK_IMPORTED_MODULE_3__messages_messages__["a" /* MessagesPage */];
        this.projectsRoot = __WEBPACK_IMPORTED_MODULE_4__projects_projects__["a" /* ProjectsPage */];
        this.profileRoot = __WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */];
    }
    MenuPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.afAuth.authState.take(1).subscribe(function (res) {
            if (res && res.uid && res.email) {
                _this.profileId = res.uid;
            }
        });
        console.log('ionViewDidLoad MenuPage');
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/home/luis/GSTUP/src/pages/menu/menu.html"*/'<ion-tabs style="background-color: #08586f">\n  <ion-tab [root]="explorerRoot" tabTitle="Explorar" tabIcon="md-globe"></ion-tab>\n  <ion-tab [root]="messagesRoot" tabTitle="Mensajes" tabIcon="md-mail"></ion-tab>\n  <ion-tab [root]="projectsRoot" tabTitle="Mis Proyectos" tabIcon="md-cube"></ion-tab>\n  <ion-tab [root]="profileRoot" tabTitle="Mi Perfil" tabIcon="md-person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/luis/GSTUP/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["AngularFireAuth"]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ })

},[303]);
//# sourceMappingURL=main.js.map