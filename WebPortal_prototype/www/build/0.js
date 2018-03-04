webpackJsonp([0],{

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateStudyPageModule", function() { return CreateStudyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_study__ = __webpack_require__(538);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateStudyPageModule = (function () {
    function CreateStudyPageModule() {
    }
    CreateStudyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_study__["a" /* CreateStudyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_study__["a" /* CreateStudyPage */]),
            ],
        })
    ], CreateStudyPageModule);
    return CreateStudyPageModule;
}());

//# sourceMappingURL=create_study.module.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateStudyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(36);
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




var CreateStudyPage = (function () {
    function CreateStudyPage(navCtrl, params, _FB, _DB, _ALERT) {
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
     * Saves form data as newly added/edited record within Firebase Realtime
     * database and handles uploading of media asset to Firebase Storage
     *
     * @public
     * @method saveDocument
     * @param  val          {any}              Form data
     * @return {none}
     */
    CreateStudyPage.prototype.saveDocument = function (val) {
        var _this = this;
        var full_name = this.form.controls["full_name"].value, short_name = this.form.controls["short_name"].value, abstract = this.form.controls["abstract"].value, end_date = this.form.controls["end_date"].value;
        // If we are editing an existing record then handle this scenario
        if (this.isEditable) {
            // Call the DatabaseProvider service and pass/format the data for use
            // with the updateDocument method
            this._DB.updateDocument(this._COLL, this.docID, {
                full_name: full_name,
                short_name: short_name,
                abstract: abstract,
                end_date: end_date
            })
                .then(function (data) {
                _this.clearForm();
                _this.displayAlert('Success', 'The study ' + name + ' was successfully updated');
            })
                .catch(function (error) {
                _this.displayAlert('Updating study failed', error.message);
            });
        }
        else {
            // Call the DatabaseProvider service and pass/format the data for use
            // with the addDocument method
            this._DB.addDocument(this._COLL, {
                full_name: full_name,
                short_name: short_name,
                abstract: abstract,
                end_date: end_date
            })
                .then(function (data) {
                _this.clearForm();
                _this.displayAlert('Record added', 'The study ' + name + ' was successfully added');
            })
                .catch(function (error) {
                _this.displayAlert('Adding study failed', error.message);
            });
        }
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
    CreateStudyPage.prototype.displayAlert = function (title, message) {
        var alert = this._ALERT.create({
            title: title,
            subTitle: message,
            buttons: ['Got it!']
        });
        alert.present();
    };
    /**
     * Clear all form data
     *
     * @public
     * @method clearForm
     * @return {none}
     */
    CreateStudyPage.prototype.clearForm = function () {
        this.full_name = '';
        this.short_name = '';
        this.abstract = '';
        this.end_date = '';
    };
    CreateStudyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-study',template:/*ion-inline-start:"C:\Users\Charizard31\Documents\GitHub\capstone\WebPortal_prototype\src\pages\create_study\create_study.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>{{ title }}</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <form\n\n    [formGroup]=\'form\'\n\n    (ngSubmit)=\'saveDocument(form.value)\'>\n\n\n\n    <ion-item>\n\n      <ion-label stacked>Study Full Name</ion-label>\n\n      <ion-input\n\n        type=\'text\'\n\n        formControlName= "full_name"\n\n        [(ngModel)]="full_name">\n\n      </ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n       <ion-label stacked>Study Short Name</ion-label>\n\n       <ion-input\n\n          type="text"\n\n          formControlName="short_name"\n\n          [(ngModel)]="short_name"></ion-input>\n\n 	  </ion-item>\n\n\n\n    <ion-item>\n\n       <ion-label stacked>Study End Date</ion-label>\n\n       <ion-input\n\n          type="date"\n\n          formControlName="end_date"\n\n          [(ngModel)]="end_date"></ion-input>\n\n 	  </ion-item>\n\n\n\n    <ion-item>\n\n       <ion-label stacked>Description</ion-label>\n\n       <ion-input\n\n          type="text"\n\n          formControlName="abstract"\n\n          [(ngModel)]="abstract"></ion-input>\n\n 	  </ion-item>\n\n\n\n 	  <ion-item>\n\n       <button\n\n         ion-button\n\n         block\n\n         color="primary"\n\n         text-center\n\n         padding-top\n\n         padding-bottom\n\n         [disabled]="!form.valid">\n\n          <div *ngIf="!isEditable">\n\n             Add a new study\n\n          </div>\n\n\n\n          <div *ngIf="isEditable">\n\n             Update this study\n\n          </div>\n\n          </button>\n\n 	  </ion-item>\n\n\n\n  </form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Charizard31\Documents\GitHub\capstone\WebPortal_prototype\src\pages\create_study\create_study.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], CreateStudyPage);
    return CreateStudyPage;
}());

//# sourceMappingURL=create_study.js.map

/***/ })

});
//# sourceMappingURL=0.js.map