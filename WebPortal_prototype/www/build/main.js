webpackJsonp([8],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Charizard31\Documents\GitHub\capstone\WebPortal_prototype\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>SCHEMA</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <div id="page-container">\n\n\n\n    <h3>Home Page</h3>\n\n\n\n    <br><br><br>\n\n\n\n    <div id="owner-current-studies">\n\n      <ion-grid class="table">\n\n        <h4>My Studies</h4>\n\n        <ion-row class="grid-labels">\n\n          <ion-col col-1>ID</ion-col>\n\n          <ion-col col-9>Name</ion-col>\n\n          <ion-col col-2>Status</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-1>0001</ion-col>\n\n          <ion-col col-9>TEST 1</ion-col>\n\n          <ion-col col-2>Active</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-1>0002</ion-col>\n\n          <ion-col col-9>TEST 2</ion-col>\n\n          <ion-col col-2>Active</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-1>0003</ion-col>\n\n          <ion-col col-9>TEST 3</ion-col>\n\n          <ion-col col-2>Active</ion-col>\n\n        </ion-row>\n\n        <button ion-button id="add-study-button" menuToggle> + </button>\n\n      </ion-grid>\n\n    </div>\n\n    <br><br><br><br>\n\n    <div id="owner-completed-studies">\n\n      <ion-grid class="table">\n\n        <h4>My Completed Studies</h4>\n\n        <ion-row class="grid-labels">\n\n          <ion-col col-1>ID</ion-col>\n\n          <ion-col col-9>Name</ion-col>\n\n          <ion-col col-2>Status</ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col col-1>0000</ion-col>\n\n          <ion-col col-9>COMPLETED TEST</ion-col>\n\n          <ion-col col-2>Active</ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </div>\n\n  </div>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Charizard31\Documents\GitHub\capstone\WebPortal_prototype\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
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
  Generated class for the UsersserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UsersserviceProvider = (function () {
    function UsersserviceProvider() {
        console.log('Hello UsersserviceProvider Provider');
        this.fireAuth = __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]();
        this.userProfile = __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('Users');
    }
    UsersserviceProvider.prototype.loginUserService = function (email, password) {
        return this.fireAuth.signInWithEmailAndPassword(email, password);
    };
    UsersserviceProvider.prototype.signupUserService = function (email, password) {
        var _this = this;
        return this.fireAuth.createUserWithEmailAndPassword(email, password).then(function (newUser) {
            //sign in the user
            _this.fireAuth.signInWithEmailAndPassword(email, password).then(function (authenticatedUser) {
                //successful login, create user profile
            });
        });
    };
    UsersserviceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UsersserviceProvider);
    return UsersserviceProvider;
}());

//# sourceMappingURL=usersservice.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usersservice_usersservice__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(103);
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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(usersserviceProvider, navCtrl, navParams, toastCtrl, loadingCtrl) {
        this.usersserviceProvider = usersserviceProvider;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.doSignup = function () {
        var _this = this;
        var that = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        loader.present();
        this.usersserviceProvider.signupUserService(this.email, this.password).then(function (authData) {
            loader.dismiss();
            that.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, function (error) {
            loader.dismiss();
            _this.toastCtrl.create({
                message: error,
                duration: 9000,
                position: 'top'
            }).present();
            that.password = "";
        });
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Charizard31\Documents\GitHub\capstone\WebPortal_prototype\src\pages\signup\signup.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Sign Up</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n\n\n   <ion-item>\n\n      <ion-label stacked>Email</ion-label>\n\n      <ion-input type="email" [(ngModel)]="email" name="email" placeholder="eg. john@doe.com"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label stacked>Password</ion-label>\n\n      <ion-input type="password" [(ngModel)]="password" name="password"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item >\n\n        <ion-label stacked>Phone</ion-label>\n\n        <ion-input type="text" [(ngModel)]="phone" name="phone" placeholder="eg. 0802222222" required="required"></ion-input>\n\n    </ion-item>\n\n\n\n<hr/>\n\n    <ion-item>\n\n      <ion-label stacked>First name</ion-label>\n\n      <ion-input type="text" [(ngModel)]="first_name" name="first_name"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label stacked>Last name</ion-label>\n\n      <ion-input type="text" [(ngModel)]="last_name" name="last_name"></ion-input>\n\n    </ion-item>\n\n\n\n    <div padding text-center>\n\n      <button ion-button color="default" round (click)="doSignup()" >Sign Up</button>\n\n    </div>\n\n\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Charizard31\Documents\GitHub\capstone\WebPortal_prototype\src\pages\signup\signup.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__providers_usersservice_usersservice__["a" /* UsersserviceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_usersservice_usersservice__["a" /* UsersserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModulesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_module_select_module__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(81);
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
 * Generated class for the ModulesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModulesPage = (function () {
    function ModulesPage(navCtrl, navParams, _DB) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._DB = _DB;
        /**
         * @name _COLL
         * @type {string}
         * @private
         * @description      Defines the name of the database collection
         */
        this._COLL = "Modules";
        /**
         * @name _DOC
         * @type {string}
         * @private
         * @description      Defines the initial document ID for the database collection
         */
        this._DOC = "lNE0Z5IRAWtMJN4BujuD";
        this._CONTENT = {
            name: "Test",
            owner: "Natasha",
            type: "TimeBased"
        };
    }
    /**
     * Retrieve all documents from the specified collection using the
     * retrieveCollection method when the view is entered
     *
     * @public
     * @method ionViewDidEnter
     * @return {none}
     */
    ModulesPage.prototype.ionViewDidEnter = function () {
        this.retrieveCollection();
    };
    /**
     * Creates the collection and populates that with an initial document
     * using the createAndPopulateDocument method of the DatabaseProvider
     * service
     *
     * @public
     * @method generateCollectionAndDocument
     * @return {none}
     */
    ModulesPage.prototype.generateCollectionAndDocument = function () {
        this._DB.createAndPopulateDocument(this._COLL, this._DOC, this._CONTENT)
            .then(function (data) {
            console.dir(data);
        })
            .catch(function (error) {
            console.dir(error);
        });
    };
    /**
     * Retrieve all documents from the specified collection using the
     * getDocuments method of the DatabaseProvider service
     *
     * @public
     * @method retrieveCollection
     * @return {none}
     */
    ModulesPage.prototype.retrieveCollection = function () {
        var _this = this;
        this._DB.getModules(this._COLL)
            .then(function (data) {
            // IF we don't have any documents then the collection doesn't exist
            // so we create it!
            if (data.length === 0) {
                _this.generateCollectionAndDocument();
            }
            else {
                _this.locations = data;
            }
        })
            .catch();
    };
    ModulesPage.prototype.addDocument = function () {
        this.navCtrl.push('create_question');
    };
    ModulesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModulesPage');
    };
    ModulesPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__select_module_select_module__["a" /* SelectModulePage */]);
    };
    ModulesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-modules',template:/*ion-inline-start:"C:\Users\Charizard31\Documents\GitHub\capstone\WebPortal_prototype\src\pages\modules\modules.html"*/'<!--\n\n  Generated template for the ModulesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Modules</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n    <button\n\n      ion-button\n\n      block\n\n      color=\'primary\'\n\n      (click)=\'addDocument()\'>\n\n      Add a new module\n\n    </button>\n\n\n\n    <button ion-item *ngFor=\'let location of locations\' (click)="itemTapped($event, item)">\n\n      {{location.name}}\n\n      <div class="item-note" item-end>\n\n        {{location.type}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Charizard31\Documents\GitHub\capstone\WebPortal_prototype\src\pages\modules\modules.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]])
    ], ModulesPage);
    return ModulesPage;
}());

//# sourceMappingURL=modules.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectModulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
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
 * Generated class for the SelectModulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectModulePage = (function () {
    function SelectModulePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SelectModulePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelectModulePage');
    };
    SelectModulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-select-module',template:/*ion-inline-start:"C:\Users\Charizard31\Documents\GitHub\capstone\WebPortal_prototype\src\pages\select_module\select_module.html"*/'<!--\n\n  Generated template for the SelectModulePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Module</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Charizard31\Documents\GitHub\capstone\WebPortal_prototype\src\pages\select_module\select_module.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SelectModulePage);
    return SelectModulePage;
}());

//# sourceMappingURL=select_module.js.map

/***/ }),

/***/ 195:
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
webpackEmptyAsyncContext.id = 195;

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/create_modules/create_modules.module": [
		529,
		2
	],
	"../pages/create_question/create_question.module": [
		531,
		1
	],
	"../pages/create_study/create_study.module": [
		530,
		0
	],
	"../pages/login/login.module": [
		532,
		7
	],
	"../pages/modules/modules.module": [
		533,
		6
	],
	"../pages/select_module/select_module.module": [
		534,
		5
	],
	"../pages/select_study/select_study.module": [
		535,
		4
	],
	"../pages/signup/signup.module": [
		536,
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
webpackAsyncContext.id = 236;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_study_select_study__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StudiesPage = (function () {
    function StudiesPage(navCtrl, _DB, _ALERT) {
        this.navCtrl = navCtrl;
        this._DB = _DB;
        this._ALERT = _ALERT;
        /**
         * @name _COLL
         * @type {string}
         * @private
         * @description      Defines the name of the database collection
         */
        this._COLL = "Studies";
        /**
         * @name _DOC
         * @type {string}
         * @private
         * @description      Defines the initial document ID for the database collection
         */
        this._DOC = "81XU1moWva6onAtMHpYY ";
        this._CONTENT = {
            full_name: "test",
            abstract: ""
        };
    }
    /**
     * Retrieve all documents from the specified collection using the
     * retrieveCollection method when the view is entered
     *
     * @public
     * @method ionViewDidEnter
     * @return {none}
     */
    StudiesPage.prototype.ionViewDidEnter = function () {
        this.retrieveCollection();
    };
    /**
     * Creates the collection and populates that with an initial document
     * using the createAndPopulateDocument method of the DatabaseProvider
     * service
     *
     * @public
     * @method generateCollectionAndDocument
     * @return {none}
     */
    StudiesPage.prototype.generateCollectionAndDocument = function () {
        this._DB.createAndPopulateDocument(this._COLL, this._DOC, this._CONTENT)
            .then(function (data) {
            console.dir(data);
        })
            .catch(function (error) {
            console.dir(error);
        });
    };
    /**
     * Retrieve all documents from the specified collection using the
     * getDocuments method of the DatabaseProvider service
     *
     * @public
     * @method retrieveCollection
     * @return {none}
     */
    StudiesPage.prototype.retrieveCollection = function () {
        var _this = this;
        this._DB.getStudies(this._COLL)
            .then(function (data) {
            // IF we don't have any documents then the collection doesn't exist
            // so we create it!
            if (data.length === 0) {
                _this.generateCollectionAndDocument();
            }
            else {
                _this.locations = data;
            }
        })
            .catch();
    };
    /**
     * Navigate to the manage-document component to begin adding a new document
     *
     * @public
     * @method addDocument
     * @return {none}
     */
    StudiesPage.prototype.addDocument = function () {
        this.navCtrl.push('create_study');
    };
    /**
     * Update a document by passing the data to the manage-document component
     *
     * @public
     * @method updateDocument
     * @param  obj          {Object}           The document data we wish to update
     * @return {none}
     */
    StudiesPage.prototype.updateDocument = function (obj) {
        var params = {
            collection: this._COLL,
            location: obj
        };
        this.navCtrl.push('create_study', { record: params, isEdited: true });
    };
    /**
     * Update a document by passing the data to the manage-document component
     *
     * @public
     * @method viewDocument
     * @param  obj          {Object}           The document data we wish to update
     * @return {none}
     */
    StudiesPage.prototype.viewDocument = function (obj) {
        var params = {
            collection: this._COLL,
            location: obj
        };
        this.navCtrl.push('create_study', { record: params, isEdited: true });
    };
    /**
     * Delete a document from the Cloud Firestore collection using the
     * deleteDocument method of the DatabaseProvider service
     *
     * @public
     * @method deleteDocument
     * @param  obj          {Object}           The document ID for the document we wish to delete
     * @return {none}
     */
    StudiesPage.prototype.deleteDocument = function (obj) {
        var _this = this;
        this._DB.deleteDocument(this._COLL, obj.id)
            .then(function (data) {
            _this.displayAlert('Success', 'The record ' + obj.name + ' was successfully removed');
        })
            .catch(function (error) {
            _this.displayAlert('Error', error.message);
        });
    };
    /**
     * Provide feedback to user after an operation has succeeded/failed
     *
     * @public
     * @method displayAlert
     * @param  title          {String}           Heading for alert message
     * @param  message        {String}           Content for alert message
     * @return {none}
     */
    StudiesPage.prototype.displayAlert = function (title, message) {
        var _this = this;
        var alert = this._ALERT.create({
            title: title,
            subTitle: message,
            buttons: [{
                    text: 'Got It!',
                    handler: function () {
                        _this.retrieveCollection();
                    }
                }]
        });
        alert.present();
    };
    StudiesPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__select_study_select_study__["a" /* SelectStudyPage */]);
    };
    StudiesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-studies',template:/*ion-inline-start:"C:\Users\Charizard31\Documents\GitHub\capstone\WebPortal_prototype\src\pages\studies\studies.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Studies</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <button\n\n    ion-button\n\n    block\n\n    color=\'primary\'\n\n    (click)=\'addDocument()\'>\n\n    Add a new Study\n\n  </button>\n\n\n\n  <button ion-item *ngFor=\'let location of locations\' (click)="viewDocument(location)">\n\n    {{location.short_name}}\n\n    <div class="item-note" item-end>\n\n      {{location.abstract}}\n\n    </div>\n\n  </button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Charizard31\Documents\GitHub\capstone\WebPortal_prototype\src\pages\studies\studies.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object])
    ], StudiesPage);
    return StudiesPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=studies.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionsPage = (function () {
    function QuestionsPage(navCtrl, _DB, _ALERT) {
        this.navCtrl = navCtrl;
        this._DB = _DB;
        this._ALERT = _ALERT;
        /**
         * @name _COLL
         * @type {string}
         * @private
         * @description      Defines the name of the database collection
         */
        this._COLL = "Questions";
        /**
         * @name _DOC
         * @type {string}
         * @private
         * @description      Defines the initial document ID for the database collection
         */
        this._DOC = "Xy76Re34SdFR1";
        this._CONTENT = {
            name: "DietQ1",
            type: "textbox",
            qtext: "Did you over eat during your last meal?"
        };
    }
    /**
     * Retrieve all documents from the specified collection using the
     * retrieveCollection method when the view is entered
     *
     * @public
     * @method ionViewDidEnter
     * @return {none}
     */
    QuestionsPage.prototype.ionViewDidEnter = function () {
        this.retrieveCollection();
    };
    /**
     * Creates the collection and populates that with an initial document
     * using the createAndPopulateDocument method of the DatabaseProvider
     * service
     *
     * @public
     * @method generateCollectionAndDocument
     * @return {none}
     */
    QuestionsPage.prototype.generateCollectionAndDocument = function () {
        this._DB.createAndPopulateDocument(this._COLL, this._DOC, this._CONTENT)
            .then(function (data) {
            console.dir(data);
        })
            .catch(function (error) {
            console.dir(error);
        });
    };
    /**
     * Retrieve all documents from the specified collection using the
     * getDocuments method of the DatabaseProvider service
     *
     * @public
     * @method retrieveCollection
     * @return {none}
     */
    QuestionsPage.prototype.retrieveCollection = function () {
        var _this = this;
        this._DB.getQuestions(this._COLL)
            .then(function (data) {
            // IF we don't have any documents then the collection doesn't exist
            // so we create it!
            if (data.length === 0) {
                _this.generateCollectionAndDocument();
            }
            else {
                _this.locations = data;
            }
        })
            .catch();
    };
    /**
     * Navigate to the manage-document component to begin adding a new document
     *
     * @public
     * @method addDocument
     * @return {none}
     */
    QuestionsPage.prototype.addDocument = function () {
        this.navCtrl.push('create_question');
    };
    /**
     * Update a document by passing the data to the manage-document component
     *
     * @public
     * @method updateDocument
     * @param  obj          {Object}           The document data we wish to update
     * @return {none}
     */
    QuestionsPage.prototype.updateDocument = function (obj) {
        var params = {
            collection: this._COLL,
            location: obj
        };
        this.navCtrl.push('create_question', { record: params, isEdited: true });
    };
    /**
     * Delete a document from the Cloud Firestore collection using the
     * deleteDocument method of the DatabaseProvider service
     *
     * @public
     * @method deleteDocument
     * @param  obj          {Object}           The document ID for the document we wish to delete
     * @return {none}
     */
    QuestionsPage.prototype.deleteDocument = function (obj) {
        var _this = this;
        this._DB.deleteDocument(this._COLL, obj.id)
            .then(function (data) {
            _this.displayAlert('Success', 'The record ' + obj.name + ' was successfully removed');
        })
            .catch(function (error) {
            _this.displayAlert('Error', error.message);
        });
    };
    /**
     * Provide feedback to user after an operation has succeeded/failed
     *
     * @public
     * @method displayAlert
     * @param  title          {String}           Heading for alert message
     * @param  message        {String}           Content for alert message
     * @return {none}
     */
    QuestionsPage.prototype.displayAlert = function (title, message) {
        var _this = this;
        var alert = this._ALERT.create({
            title: title,
            subTitle: message,
            buttons: [{
                    text: 'Got It!',
                    handler: function () {
                        _this.retrieveCollection();
                    }
                }]
        });
        alert.present();
    };
    QuestionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-questions',template:/*ion-inline-start:"C:\Users\Charizard31\Documents\GitHub\capstone\WebPortal_prototype\src\pages\questions\questions.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      Schema\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <button\n\n    ion-button\n\n    block\n\n    color=\'primary\'\n\n    (click)=\'addDocument()\'>\n\n    Add a new question\n\n  </button>\n\n\n\n  <ion-list>\n\n    <ion-item *ngFor=\'let location of locations\'>\n\n      <h2>{{ location.name }}</h2>\n\n      <p>\n\n        Type: {{ location.type}}<br>\n\n        Question Text: {{ location.qtext }}\n\n      </p>\n\n\n\n      <button\n\n        ion-button\n\n        color=\'secondary\'\n\n        (click)=\'updateDocument(location)\'>\n\n        Update this question\n\n      </button>\n\n\n\n      <button\n\n        ion-button\n\n        color=\'danger\'\n\n        (click)="deleteDocument(location)">\n\n        Delete this question\n\n      </button>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Charizard31\Documents\GitHub\capstone\WebPortal_prototype\src\pages\questions\questions.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], QuestionsPage);
    return QuestionsPage;
}());

//# sourceMappingURL=questions.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_usersservice_usersservice__ = __webpack_require__(158);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(usersService, loadingCtrl, toastCtrl, navCtrl, navParams) {
        this.usersService = usersService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
                // ...
            }
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.submitLogin = function () {
        var _this = this;
        var that = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait...."
        });
        loader.present();
        this.usersService.loginUserService(this.email, this.password).then(function (authData) {
            //successful
            loader.dismiss();
            that.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
        }, function (error) {
            loader.dismiss();
            //Unable to log in
            var toast = _this.toastCtrl.create({
                message: error,
                duration: 9000,
                position: 'top'
            });
            toast.present();
            that.password = ""; //empty password field
        });
    };
    LoginPage.prototype.forgotPassword = function () {
    };
    LoginPage.prototype.redirectToSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Charizard31\Documents\GitHub\capstone\WebPortal_prototype\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label floating>Email</ion-label>\n\n      <ion-input type="email" [(ngModel)]="email" name="email" required="required"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Password</ion-label>\n\n      <ion-input type="password" [(ngModel)]="password" name="password" required="required"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <div padding text-center>\n\n\n\n    <button *ngIf="email && password " ion-button color="default" round (click)="submitLogin()">\n\n     Login</button>\n\n   <!-- Show dead button if form is not filled -->\n\n   <button *ngIf="!email || !password" ion-button color="deafault" clear round>Login</button>\n\n\n\n  </div>\n\n\n\n  <br>\n\n\n\n  <div padding text-center>\n\n   <button ion-button color="gray" block clear (click)="forgotPassword()">Forgot Password</button>\n\n  </div>\n\n\n\n\n\n   <div padding text-center>\n\n     <button ion-button color="gray" block clear (click)="redirectToSignup()">Create new account</button>\n\n   </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Charizard31\Documents\GitHub\capstone\WebPortal_prototype\src\pages\login\login.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__providers_usersservice_usersservice__["a" /* UsersserviceProvider */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_usersservice_usersservice__["a" /* UsersserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(352);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export config */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_studies_studies__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_modules_modules__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_questions_questions__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_select_module_select_module__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_firebase__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_usersservice_usersservice__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_database_database__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















// Initialize Firebase
var config = {
    apiKey: "AIzaSyC_Y1zWA0W4LTAr0jE7tYX-bPfbK3B51QI",
    authDomain: "capstone-sugar.firebaseapp.com",
    databaseURL: "https://capstone-sugar.firebaseio.com",
    projectId: "capstone-sugar",
    storageBucket: "capstone-sugar.appspot.com",
    messagingSenderId: "714682249068"
};
__WEBPACK_IMPORTED_MODULE_14_firebase__["initializeApp"](config);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_studies_studies__["a" /* StudiesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_modules_modules__["a" /* ModulesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_questions_questions__["a" /* QuestionsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_select_module_select_module__["a" /* SelectModulePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/create_modules/create_modules.module#CreateModulesPageModule', name: 'CreateModulesPage', segment: 'create_modules', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create_study/create_study.module#CreateStudyPageModule', name: 'create_study', segment: 'create_study', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create_question/create_question.module#CreateQuestionPageModule', name: 'create_question', segment: 'create_question', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modules/modules.module#ModulesPageModule', name: 'ModulesPage', segment: 'modules', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select_module/select_module.module#SelectModulePageModule', name: 'SelectModulePage', segment: 'select_module', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/select_study/select_study.module#SelectStudyPageModule', name: 'SelectStudyPage', segment: 'select_study', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_studies_studies__["a" /* StudiesPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_modules_modules__["a" /* ModulesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_questions_questions__["a" /* QuestionsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_select_module_select_module__["a" /* SelectModulePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__providers_usersservice_usersservice__["a" /* UsersserviceProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_database_database__["a" /* DatabaseProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_studies_studies__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_modules_modules__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_questions_questions__ = __webpack_require__(328);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'My Studies', component: __WEBPACK_IMPORTED_MODULE_5__pages_studies_studies__["a" /* StudiesPage */] },
            { title: 'My Questions', component: __WEBPACK_IMPORTED_MODULE_7__pages_questions_questions__["a" /* QuestionsPage */] },
            { title: 'Modules', component: __WEBPACK_IMPORTED_MODULE_6__pages_modules_modules__["a" /* ModulesPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Charizard31\Documents\GitHub\capstone\WebPortal_prototype\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\Charizard31\Documents\GitHub\capstone\WebPortal_prototype\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectStudyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
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
 * Generated class for the SelectStudyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SelectStudyPage = (function () {
    function SelectStudyPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SelectStudyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SelectStudyPage');
    };
    SelectStudyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-select-study',
            templateUrl: 'select-study.html',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SelectStudyPage);
    return SelectStudyPage;
}());

//# sourceMappingURL=select_study.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_firestore__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Import firebase and firestore


/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DatabaseProvider = (function () {
    function DatabaseProvider(http) {
        this.http = http;
        console.log('Hello DatabaseQuestionsProvider Provider');
        this._DB = __WEBPACK_IMPORTED_MODULE_3_firebase__["firestore"]();
    }
    /**
    * Create the database collection and defines an initial document
    * Note the use of merge : true flag within the returned promise  - this
    * is needed to ensure that the collection is not repeatedly recreated should
    * this method be called again (we DON'T want to overwrite our documents!)
    */
    DatabaseProvider.prototype.createAndPopulateDocument = function (collectionObj, docID, dataObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._DB
                .collection(collectionObj)
                .doc(docID)
                .set(dataObj, { merge: true })
                .then(function (data) {
                resolve(data);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    /*
     * Return documents from specific database collection
     */
    DatabaseProvider.prototype.getQuestions = function (collectionObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._DB.collection(collectionObj)
                .get()
                .then(function (querySnapshot) {
                var obj = [];
                querySnapshot
                    .forEach(function (doc) {
                    obj.push({
                        id: doc.id,
                        name: doc.data().name,
                        type: doc.data().type,
                        qtext: doc.data().qtext
                    });
                });
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    /*
     * Return documents from specific database collection
     */
    DatabaseProvider.prototype.getModules = function (collectionObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._DB.collection(collectionObj)
                .get()
                .then(function (querySnapshot) {
                var obj = [];
                querySnapshot
                    .forEach(function (doc) {
                    obj.push({
                        id: doc.id,
                        name: doc.data().name,
                        owner: doc.data().owner,
                        type: doc.data().type,
                    });
                });
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    /*
     * Return documents from specific database collection
     */
    DatabaseProvider.prototype.getStudies = function (collectionObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._DB.collection(collectionObj)
                .get()
                .then(function (querySnapshot) {
                var obj = [];
                querySnapshot
                    .forEach(function (doc) {
                    obj.push({
                        id: doc.id,
                        full_name: doc.data().full_name,
                        abstract: doc.data().abstract,
                        short_name: doc.data().short_name,
                    });
                });
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    /**
     * Add a new document to a selected database collection
     */
    DatabaseProvider.prototype.addDocument = function (collectionObj, dataObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._DB.collection(collectionObj).add(dataObj)
                .then(function (obj) {
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    /**
     * Delete an existing document from a selected database collection
     */
    DatabaseProvider.prototype.deleteDocument = function (collectionObj, docID) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._DB
                .collection(collectionObj)
                .doc(docID)
                .delete()
                .then(function (obj) {
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    /**
     * Update an existing document within a selected database collection
     */
    DatabaseProvider.prototype.updateDocument = function (collectionObj, docID, dataObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._DB
                .collection(collectionObj)
                .doc(docID)
                .update(dataObj)
                .then(function (obj) {
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider.prototype.viewDocument = function (collectionObj, docID, dataObj) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._DB
                .collection(collectionObj)
                .doc(docID)
                .then(function (obj) {
                resolve(obj);
            })
                .catch(function (error) {
                reject(error);
            });
        });
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], DatabaseProvider);
    return DatabaseProvider;
    var _a;
}());

//# sourceMappingURL=database.js.map

/***/ })

},[330]);
//# sourceMappingURL=main.js.map