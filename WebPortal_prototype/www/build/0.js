webpackJsonp([0],{

/***/ 534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectStudyPageModule", function() { return SelectStudyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_study__ = __webpack_require__(540);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelectStudyPageModule = (function () {
    function SelectStudyPageModule() {
    }
    SelectStudyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__select_study__["a" /* SelectStudyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__select_study__["a" /* SelectStudyPage */]),
            ],
        })
    ], SelectStudyPageModule);
    return SelectStudyPageModule;
}());

//# sourceMappingURL=select_study.module.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectStudyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_modules__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(81);
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
    function SelectStudyPage(navCtrl, params, _FB, _DB, _ALERT) {
        this.navCtrl = navCtrl;
        this.params = params;
        this._FB = _FB;
        this._DB = _DB;
        this._ALERT = _ALERT;
        /**
         * @name full_name
         * @type {string}
         * @public
         * @description     Model for city form field
         */
        this.full_name = '';
        /**
         * @name short_name
         * @type {string}
         * @public
         * @description     Model for population form field
         */
        this.short_name = '';
        /**
         * @name abstract
         * @type {string}
         * @public
         * @description     Model for established form field
         */
        this.abstract = '';
        /**
         * @name end_date
         * @type {date}
         * @public
         * @description     Model for established form field
         */
        this.end_date = '';
        /**
         * @name docID
         * @type {string}
         * @public
         * @description     property that stores an edited document's ID
         */
        this.docID = '81XU1moWva6onAtMHpYY';
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
        this.title = 'Add a new Study';
        /**
         * @name _COLL
         * @type {string}
         * @private
         * @description     property that stores the value for the database collection
         */
        this._COLL = "Studies";
        // Use Formbuilder API to create a FormGroup object
        // that will be used to programmatically control the
        // form / form fields in the component template
        this.form = _FB.group({
            'full_name': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            'short_name': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            'abstract': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            'end_date': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
        // If we have navigation parameters then we need to
        // parse these as we know these will be used for
        // editing an existing record
        if (params.get('isEdited')) {
            var record = params.get('record');
            this.full_name = record.location.full_name;
            this.short_name = record.location.short_name;
            this.abstract = record.location.abstract;
            this.end_date = record.location.end_date;
            this.docID = record.location.id;
            this.isEditable = true;
            this.title = 'Update this document';
        }
    }
    /**
     * Retrieve all documents from the specified collection using the
     * retrieveCollection method when the view is entered
     *
     * @public
     * @method ionViewDidEnter
     * @return {none}
     */
    SelectStudyPage.prototype.ionViewDidEnter = function () {
        this.retrieveCollection();
        this.retrieveSubCollection();
    };
    SelectStudyPage.prototype.retrieveCollection = function () {
        var _this = this;
        this._DB.getStudies(this._COLL)
            .then(function (data) {
            _this.locations = data;
        })
            .catch();
    };
    /**
     * Retrieve all documents from the specified collection using the
     * getDocuments method of the DatabaseProvider service
     *
     * @public
     * @method retrieveCollection
     * @return {none}
     */
    SelectStudyPage.prototype.retrieveSubCollection = function () {
        var _this = this;
        this._DB.getStudies_Modules(this._COLL, this.docID, "modules")
            .then(function (data) {
            _this.modules = data;
        })
            .catch();
    };
    /**
     * Navigate to the manage-document component to begin adding a new document
     *
     * @public
     * @method addModule
     * @return {none}
     */
    SelectStudyPage.prototype.addDocument = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__modules_modules__["a" /* ModulesPage */]);
    };
    SelectStudyPage.prototype.viewDocument = function (obj) {
        var params = {
            collection: "modules",
            module: obj
        };
        this.navCtrl.push('select_module', { record: params, isEdited: true });
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
    SelectStudyPage.prototype.displayAlert = function (title, message) {
        var alert = this._ALERT.create({
            title: title,
            subTitle: message,
            buttons: ['Got it!']
        });
        alert.present();
    };
    SelectStudyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-select-study',template:/*ion-inline-start:"C:\Users\Charizard31\Documents\GitHub\capstone\WebPortal_prototype\src\pages\select_study\select_study.html"*/'<!--\n\n  Generated template for the SelectStudyPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ short_name }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n  <form\n\n    [formGroup]=\'form\'>\n\n\n\n    <ion-item>\n\n      <ion-label stacked>Study Full Name</ion-label>\n\n      <ion-input\n\n        type=\'text\'\n\n        formControlName= "full_name"\n\n        [(ngModel)]="full_name">\n\n      </ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n       <ion-label stacked>Study Short Name</ion-label>\n\n       <ion-input\n\n          type="text"\n\n          formControlName="short_name"\n\n          [(ngModel)]="short_name"></ion-input>\n\n 	  </ion-item>\n\n\n\n    <ion-item>\n\n       <ion-label stacked>Study End Date</ion-label>\n\n       <ion-input\n\n          formControlName="end_date"\n\n          [(ngModel)]="end_date"></ion-input>\n\n 	  </ion-item>\n\n\n\n    <ion-item>\n\n       <ion-label stacked>Description</ion-label>\n\n       <ion-input\n\n          type="text"\n\n          formControlName="abstract"\n\n          [(ngModel)]="abstract"></ion-input>\n\n 	  </ion-item>\n\n<hr>\n\n    <h2> Modules </h2>\n\n    <ion-list>\n\n      <button ion-item *ngFor=\'let module of modules\' (click)="viewDocument(module)">\n\n        <h2> {{ module.name }} </h2>\n\n      </button>\n\n    </ion-list>\n\n\n\n    <button\n\n      ion-button\n\n      block\n\n      color=\'primary\'\n\n      (click)=\'addDocument()\'>\n\n      Add a new module\n\n    </button>\n\n\n\n\n\n  </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Charizard31\Documents\GitHub\capstone\WebPortal_prototype\src\pages\select_study\select_study.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], SelectStudyPage);
    return SelectStudyPage;
}());

//# sourceMappingURL=select_study.js.map

/***/ })

});
//# sourceMappingURL=0.js.map