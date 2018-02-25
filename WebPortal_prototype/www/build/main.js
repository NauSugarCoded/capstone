webpackJsonp([4],{

/***/ 102:
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
            selector: 'page-home',template:/*ion-inline-start:"/home/chantz/Desktop/college/projects/capstone/WebPortal_prototype/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>SCHEMA</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div id="page-container">\n\n    <h3>Home Page</h3>\n\n    <br><br><br>\n\n    <div id="owner-current-studies">\n      <ion-grid class="table">\n        <h4>My Studies</h4>\n        <ion-row class="grid-labels">\n          <ion-col col-1>ID</ion-col>\n          <ion-col col-9>Name</ion-col>\n          <ion-col col-2>Status</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-1>0001</ion-col>\n          <ion-col col-9>TEST 1</ion-col>\n          <ion-col col-2>Active</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-1>0002</ion-col>\n          <ion-col col-9>TEST 2</ion-col>\n          <ion-col col-2>Active</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-1>0003</ion-col>\n          <ion-col col-9>TEST 3</ion-col>\n          <ion-col col-2>Active</ion-col>\n        </ion-row>\n        <button ion-button id="add-study-button" menuToggle> + </button>\n      </ion-grid>\n    </div>\n    <br><br><br><br>\n    <div id="owner-completed-studies">\n      <ion-grid class="table">\n        <h4>My Completed Studies</h4>\n        <ion-row class="grid-labels">\n          <ion-col col-1>ID</ion-col>\n          <ion-col col-9>Name</ion-col>\n          <ion-col col-2>Status</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-1>0000</ion-col>\n          <ion-col col-9>COMPLETED TEST</ion-col>\n          <ion-col col-2>Active</ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n  </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/chantz/Desktop/college/projects/capstone/WebPortal_prototype/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(72);
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

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_firestore__ = __webpack_require__(464);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_firestore__ = __webpack_require__(463);
>>>>>>> e4ece72949909d8d32c5f5b205575494876d846e
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
        console.log('Hello DatabaseProvider Provider');
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
    DatabaseProvider.prototype.getDocuments = function (collectionObj) {
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
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
<<<<<<< HEAD
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DatabaseProvider);
    return DatabaseProvider;
=======
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], DatabaseProvider);
    return DatabaseProvider;
    var _a;
>>>>>>> e4ece72949909d8d32c5f5b205575494876d846e
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usersservice_usersservice__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(102);
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
            selector: 'page-signup',template:/*ion-inline-start:"/home/chantz/Desktop/college/projects/capstone/WebPortal_prototype/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sign Up</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n\n   <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input type="email" [(ngModel)]="email" name="email" placeholder="eg. john@doe.com"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="password" name="password"></ion-input>\n    </ion-item>\n\n    <ion-item >\n        <ion-label stacked>Phone</ion-label>\n        <ion-input type="text" [(ngModel)]="phone" name="phone" placeholder="eg. 0802222222" required="required"></ion-input>\n    </ion-item>\n\n<hr/>\n    <ion-item>\n      <ion-label stacked>First name</ion-label>\n      <ion-input type="text" [(ngModel)]="first_name" name="first_name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Last name</ion-label>\n      <ion-input type="text" [(ngModel)]="last_name" name="last_name"></ion-input>\n    </ion-item>\n\n    <div padding text-center>\n      <button ion-button color="default" round (click)="doSignup()" >Sign Up</button>\n    </div>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/chantz/Desktop/college/projects/capstone/WebPortal_prototype/src/pages/signup/signup.html"*/,
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
    function ModulesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ModulesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModulesPage');
    };
    ModulesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
<<<<<<< HEAD
            selector: 'page-modules',template:/*ion-inline-start:"C:\Users\Charizard31\Documents\GitHub\capstone\WebPortal_prototype\src\pages\modules\modules.html"*/'<!--\n\n  Generated template for the ModulesPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Modules</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Charizard31\Documents\GitHub\capstone\WebPortal_prototype\src\pages\modules\modules.html"*/,
=======
            selector: 'page-modules',template:/*ion-inline-start:"/home/chantz/Desktop/college/projects/capstone/WebPortal_prototype/src/pages/modules/modules.html"*/'<!--\n  Generated template for the ModulesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Modules</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/chantz/Desktop/college/projects/capstone/WebPortal_prototype/src/pages/modules/modules.html"*/,
>>>>>>> e4ece72949909d8d32c5f5b205575494876d846e
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ModulesPage);
    return ModulesPage;
}());

//# sourceMappingURL=modules.js.map

/***/ }),

/***/ 194:
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
webpackEmptyAsyncContext.id = 194;

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/create_question/create_question.module": [
		529,
		0
	],
	"../pages/login/login.module": [
		530,
		3
	],
	"../pages/modules/modules.module": [
		531,
		2
	],
	"../pages/signup/signup.module": [
		532,
		1
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
webpackAsyncContext.id = 235;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
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


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['albums'];
        this.items = [];
        for (var i = 1; i < 4; i++) {
            this.items.push({
                title: 'Study ' + i,
                note: 'This is Study #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        /*this.navCtrl.push(ListPage, {
          item: item
        });*/
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/chantz/Desktop/college/projects/capstone/WebPortal_prototype/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Case Studies</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/chantz/Desktop/college/projects/capstone/WebPortal_prototype/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
<<<<<<< HEAD
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateStudyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateStudyPage = (function () {
    function CreateStudyPage(navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
    }
    CreateStudyPage.prototype.submitStudy = function () {
        var study_database = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Studies/" + this.study_sname).set({
            Abstract: this.study_description,
            EndDate: this.study_edate,
            FullName: this.study_fname,
            StartDate: this.study_sdate
        });
        this.toastCtrl.create({
            message: "Study Created",
            duration: 9000,
            position: 'top'
        }).present();
    };
    CreateStudyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-study',template:/*ion-inline-start:"C:\Users\Charizard31\Documents\GitHub\capstone\WebPortal_prototype\src\pages\create_study\create_study.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>SCHEMA</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n\n\n   <ion-item>\n\n      <ion-label stacked>Study Full Name</ion-label>\n\n      <ion-input type="text" [(ngModel)]="study_fname" name="study_fname"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label stacked>Study Short Name</ion-label>\n\n      <ion-input type="text" [(ngModel)]="study_sname" name="study_sname"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item >\n\n        <ion-label stacked>Study Start Date</ion-label>\n\n        <ion-input type="date" [(ngModel)]="study_sdate" name="study_sdate"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label stacked>Study End Date</ion-label>\n\n      <ion-input type="date" [(ngModel)]="study_edate" name="study_edate"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label stacked>Description</ion-label>\n\n      <ion-input type="text" [(ngModel)]="study_description" name="study_discription"></ion-input>\n\n    </ion-item>\n\n\n\n    <div padding text-center>\n\n      <button ion-button color="default" round (click)="submitStudy()" >Create Study</button>\n\n    </div>\n\n\n\n  </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Charizard31\Documents\GitHub\capstone\WebPortal_prototype\src\pages\create_study\create_study.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _b || Object])
    ], CreateStudyPage);
    return CreateStudyPage;
    var _a, _b;
}());

//# sourceMappingURL=create_study.js.map

/***/ }),

/***/ 328:
=======
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 327:
>>>>>>> e4ece72949909d8d32c5f5b205575494876d846e
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(180);
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
        this._DB.getDocuments(this._COLL)
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
            selector: 'page-questions',template:/*ion-inline-start:"/home/chantz/Desktop/college/projects/capstone/WebPortal_prototype/src/pages/questions/questions.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Schema\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <button\n    ion-button\n    block\n    color=\'primary\'\n    (click)=\'addDocument()\'>\n    Add a new question\n  </button>\n\n  <ion-list>\n    <ion-item *ngFor=\'let location of locations\'>\n      <h2>{{ location.name }}</h2>\n      <p>\n        Type: {{ location.type}}<br>\n        Question Text: {{ location.qtext }}\n      </p>\n\n      <button\n        ion-button\n        color=\'secondary\'\n        (click)=\'updateDocument(location)\'>\n        Update this question\n      </button>\n\n      <button\n        ion-button\n        color=\'danger\'\n        (click)="deleteDocument(location)">\n        Delete this question\n      </button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/chantz/Desktop/college/projects/capstone/WebPortal_prototype/src/pages/questions/questions.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], QuestionsPage);
    return QuestionsPage;
}());

//# sourceMappingURL=questions.js.map

/***/ }),

<<<<<<< HEAD
/***/ 329:
=======
/***/ 328:
>>>>>>> e4ece72949909d8d32c5f5b205575494876d846e
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_usersservice_usersservice__ = __webpack_require__(157);
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
<<<<<<< HEAD
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Charizard31\Documents\GitHub\capstone\WebPortal_prototype\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label floating>Email</ion-label>\n\n      <ion-input type="email" [(ngModel)]="email" name="email" required="required"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Password</ion-label>\n\n      <ion-input type="password" [(ngModel)]="password" name="password" required="required"></ion-input>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <div padding text-center>\n\n\n\n    <button *ngIf="email && password " ion-button color="default" round (click)="submitLogin()">\n\n     Login</button>\n\n   <!-- Show dead button if form is not filled -->\n\n   <button *ngIf="!email || !password" ion-button color="deafault" clear round>Login</button>\n\n\n\n  </div>\n\n\n\n  <br>\n\n\n\n  <div padding text-center>\n\n   <button ion-button color="gray" block clear (click)="forgotPassword()">Forgot Password</button>\n\n  </div>\n\n\n\n\n\n   <div padding text-center>\n\n     <button ion-button color="gray" block clear (click)="redirectToSignup()">Create new account</button>\n\n   </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Charizard31\Documents\GitHub\capstone\WebPortal_prototype\src\pages\login\login.html"*/,
=======
            selector: 'page-login',template:/*ion-inline-start:"/home/chantz/Desktop/college/projects/capstone/WebPortal_prototype/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="email" [(ngModel)]="email" name="email" required="required"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="password" name="password" required="required"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <div padding text-center>\n\n    <button *ngIf="email && password " ion-button color="default" round (click)="submitLogin()">\n     Login</button>\n   <!-- Show dead button if form is not filled -->\n   <button *ngIf="!email || !password" ion-button color="deafault" clear round>Login</button>\n\n  </div>\n\n  <br>\n\n  <div padding text-center>\n   <button ion-button color="gray" block clear (click)="forgotPassword()">Forgot Password</button>\n  </div>\n\n\n   <div padding text-center>\n     <button ion-button color="gray" block clear (click)="redirectToSignup()">Create new account</button>\n   </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/chantz/Desktop/college/projects/capstone/WebPortal_prototype/src/pages/login/login.html"*/,
>>>>>>> e4ece72949909d8d32c5f5b205575494876d846e
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

<<<<<<< HEAD
/***/ 330:
=======
/***/ 329:
>>>>>>> e4ece72949909d8d32c5f5b205575494876d846e
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(352);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(351);
>>>>>>> e4ece72949909d8d32c5f5b205575494876d846e


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

<<<<<<< HEAD
/***/ 352:
=======
/***/ 351:
>>>>>>> e4ece72949909d8d32c5f5b205575494876d846e
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export config */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(236);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_create_study_create_study__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_modules_modules__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_questions_questions__ = __webpack_require__(328);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_create_study_create_study__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_modules_modules__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_questions_questions__ = __webpack_require__(327);
>>>>>>> e4ece72949909d8d32c5f5b205575494876d846e
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_firebase__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_usersservice_usersservice__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_database_database__ = __webpack_require__(180);
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
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_create_study_create_study__["a" /* CreateStudyPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_modules_modules__["a" /* ModulesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_questions_questions__["a" /* QuestionsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/create_question/create_question.module#CreateQuestionPageModule', name: 'create_question', segment: 'create_question', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modules/modules.module#ModulesPageModule', name: 'ModulesPage', segment: 'modules', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_create_study_create_study__["a" /* CreateStudyPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_modules_modules__["a" /* ModulesPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_questions_questions__["a" /* QuestionsPage */],
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

<<<<<<< HEAD
/***/ 520:
=======
/***/ 519:
>>>>>>> e4ece72949909d8d32c5f5b205575494876d846e
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(326);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_create_study_create_study__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_modules_modules__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_questions_questions__ = __webpack_require__(328);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_modules_modules__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_questions_questions__ = __webpack_require__(327);
>>>>>>> e4ece72949909d8d32c5f5b205575494876d846e
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
            { title: 'My Studies', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'My Questions', component: __WEBPACK_IMPORTED_MODULE_8__pages_questions_questions__["a" /* QuestionsPage */] },
            { title: 'Modules', component: __WEBPACK_IMPORTED_MODULE_7__pages_modules_modules__["a" /* ModulesPage */] },
            { title: 'Create Study', component: __WEBPACK_IMPORTED_MODULE_6__pages_create_study_create_study__["a" /* CreateStudyPage */] },
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/chantz/Desktop/college/projects/capstone/WebPortal_prototype/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/chantz/Desktop/college/projects/capstone/WebPortal_prototype/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

<<<<<<< HEAD
/***/ })

},[330]);
=======
/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateStudyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateStudyPage = (function () {
    function CreateStudyPage(navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
    }
    CreateStudyPage.prototype.submitStudy = function () {
        var study_database = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref("Studies/" + this.study_sname).set({
            Abstract: this.study_description,
            EndDate: this.study_edate,
            FullName: this.study_fname,
            StartDate: this.study_sdate
        });
        this.toastCtrl.create({
            message: "Study Created",
            duration: 9000,
            position: 'top'
        }).present();
    };
    CreateStudyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-study',template:/*ion-inline-start:"/home/chantz/Desktop/college/projects/capstone/WebPortal_prototype/src/pages/create_study/create_study.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>SCHEMA</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n\n   <ion-item>\n      <ion-label stacked>Study Full Name</ion-label>\n      <ion-input type="text" [(ngModel)]="study_fname" name="study_fname"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Study Short Name</ion-label>\n      <ion-input type="text" [(ngModel)]="study_sname" name="study_sname"></ion-input>\n    </ion-item>\n\n    <ion-item >\n        <ion-label stacked>Study Start Date</ion-label>\n        <ion-input type="date" [(ngModel)]="study_sdate" name="study_sdate"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Study End Date</ion-label>\n      <ion-input type="date" [(ngModel)]="study_edate" name="study_edate"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Description</ion-label>\n      <ion-input type="text" [(ngModel)]="study_description" name="study_discription"></ion-input>\n    </ion-item>\n\n    <div padding text-center>\n      <button ion-button color="default" round (click)="submitStudy()" >Create Study</button>\n    </div>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/chantz/Desktop/college/projects/capstone/WebPortal_prototype/src/pages/create_study/create_study.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], CreateStudyPage);
    return CreateStudyPage;
}());

//# sourceMappingURL=create_study.js.map

/***/ })

},[329]);
>>>>>>> e4ece72949909d8d32c5f5b205575494876d846e
//# sourceMappingURL=main.js.map