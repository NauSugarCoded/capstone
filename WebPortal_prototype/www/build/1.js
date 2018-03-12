webpackJsonp([1],{

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectModulePageModule", function() { return SelectModulePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_module__ = __webpack_require__(556);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelectModulePageModule = (function () {
    function SelectModulePageModule() {
    }
    SelectModulePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__select_module__["a" /* SelectModulePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__select_module__["a" /* SelectModulePage */]),
            ],
        })
    ], SelectModulePageModule);
    return SelectModulePageModule;
}());

//# sourceMappingURL=select_module.module.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectModulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(64);
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
    function SelectModulePage(navCtrl, params, _FB, _DB, _ALERT) {
        this.navCtrl = navCtrl;
        this.params = params;
        this._FB = _FB;
        this._DB = _DB;
        this._ALERT = _ALERT;
        /**
         * @name name
         * @type {string}
         * @public
         * @description     Model for city form field
         */
        this.name = '';
        /**
         * @name owner
         * @type {string}
         * @public
         * @description     Model for population form field
         */
        this.owner = '';
        /**
         * @name tyoe
         * @type {string}
         * @public
         * @description     Model for established form field
         */
        this.type = '';
        /**
         * @name docID
         * @type {string}
         * @public
         * @description     property that stores an edited document's ID
         */
        this.docID = '';
        /**
         * @name isEditable
         * @type {boolean}
         * @public
         * @description     property that stores value to signify whether
                            we are editing an existing document or not
         */
        this.isEditable = false;
        /**
         * @name title
         * @type {string}
         * @public
         * @description     property that defines the template title value
         */
        this.title = 'Add a new question';
        /**
         * @name _COLL
         * @type {string}
         * @private
         * @description     property that stores the value for the database collection
         */
        this._COLL = "Modules";
        // Use Formbuilder API to create a FormGroup object
        // that will be used to programmatically control the
        // form / form fields in the component template
        this.form = _FB.group({
            'name': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            'owner': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            'type': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
        // If we have navigation parameters then we need to
        // parse these as we know these will be used for
        // editing an existing record
        if (params.get('isEdited')) {
            var record = params.get('record');
            this.name = record.location.name;
            this.type = record.location.type;
            this.owner = record.location.owner;
            this.docID = record.location.id;
            this.isEditable = true;
            this.title = 'Update this document';
        }
    }
    SelectModulePage.prototype.ionViewDidEnter = function () {
        this.retrieveCollection();
        this.retrieveSubCollection();
    };
    SelectModulePage.prototype.retrieveCollection = function () {
        var _this = this;
        this._DB.getQuestions("Questions")
            .then(function (data) {
            _this.quests = data;
        })
            .catch();
    };
    SelectModulePage.prototype.retrieveSubCollection = function () {
        var _this = this;
        this._DB.getModules_Questions(this._COLL, this.docID, "Questions")
            .then(function (data) {
            _this.questions = data;
        })
            .catch();
    };
    SelectModulePage.prototype.saveQuestions = function (val) {
        this._DB.addModules_Questions("Modules", this.docID, "Questions", val);
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
    SelectModulePage.prototype.displayAlert = function (title, message) {
        var alert = this._ALERT.create({
            title: title,
            subTitle: message,
            buttons: ['Got it!']
        });
        alert.present();
    };
    SelectModulePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-select-module',template:/*ion-inline-start:"C:\Users\Charizard31\Documents\GitHub\capstone\WebPortal_prototype\src\pages\select_module\select_module.html"*/'<!--\n\n  Generated template for the SelectModulePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Module</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <form\n\n    [formGroup]=\'form\'>\n\n\n\n    <ion-item>\n\n      <ion-label stacked>Modules Name:</ion-label>\n\n      <ion-input\n\n        type=\'text\'\n\n        formControlName=\'name\'\n\n        [(ngModel)]=\'name\'>\n\n      </ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n       <ion-label stacked>Owner:</ion-label>\n\n       <ion-input\n\n          type="text"\n\n          formControlName="owner"\n\n          [(ngModel)]="owner"></ion-input>\n\n 	  </ion-item>\n\n\n\n    <ion-item>\n\n       <ion-label stacked>Type:</ion-label>\n\n       <ion-input\n\n          type="text"\n\n          formControlName="type"\n\n          [(ngModel)]="type"></ion-input>\n\n 	  </ion-item>\n\n\n\n    <h2> Questions </h2>\n\n\n\n    <ion-list>\n\n      <button ion-item *ngFor=\'let question of questions\'>\n\n        <h2> {{ question.id }} </h2>\n\n      </button>\n\n    </ion-list>\n\n\n\n    <ion-item *ngFor=\'let quest of quests\'>\n\n      <button ion-button\n\n              block\n\n              color=\'primary\'\n\n            (click)="saveQuestions(quest)">\n\n              Add question {{ quest.name }}\n\n      </button>\n\n    </ion-item>\n\n\n\n  </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Charizard31\Documents\GitHub\capstone\WebPortal_prototype\src\pages\select_module\select_module.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object])
    ], SelectModulePage);
    return SelectModulePage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=select_module.js.map

/***/ })

});
//# sourceMappingURL=1.js.map