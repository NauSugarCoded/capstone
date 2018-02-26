webpackJsonp([1],{

/***/ 535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateParticipantPageModule", function() { return CreateParticipantPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_participant__ = __webpack_require__(540);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateParticipantPageModule = (function () {
    function CreateParticipantPageModule() {
    }
    CreateParticipantPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_participant__["a" /* CreateParticipantPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_participant__["a" /* CreateParticipantPage */]),
            ],
        })
    ], CreateParticipantPageModule);
    return CreateParticipantPageModule;
}());

//# sourceMappingURL=create_participant.module.js.map

/***/ }),

/***/ 540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateParticipantPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(181);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateParticipantPage = (function () {
    function CreateParticipantPage(navCtrl, params, _FB, _DB, _ALERT) {
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
         * @name email
         * @type {string}
         * @public
         * @description     Model for population form field
         */
        this.email = '';
        /**
         * @name phone
         * @type {string}
         * @public
         * @description     Model for established form field
         */
        this.phone = '';
        /**
         * @name owner
         * @type {string}
         * @public
         * @description     Model for established form field
         */
        this.owner = '';
        /**
         * @name sleep_end
         * @type {string}
         * @public
         * @description     Model for established form field
         */
        this.sleep_end = '';
        /**
         * @name sleep_start
         * @type {string}
         * @public
         * @description     Model for established form field
         */
        this.sleep_start = '';
        /**
         * @name study
         * @type {string}
         * @public
         * @description     Model for established form field
         */
        this.study = '';
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
        this.title = 'Add a new participant';
        /**
         * @name _COLL
         * @type {string}
         * @private
         * @description     property that stores the value for the database collection
         */
        this._COLL = "Participants";
        // Use Formbuilder API to create a FormGroup object
        // that will be used to programmatically control the
        // form / form fields in the component template
        this.form = _FB.group({
            'name': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            'email': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            'phone': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            'owner': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            'sleep_end': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            'sleep_start': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            'study': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
        // If we have navigation parameters then we need to
        // parse these as we know these will be used for
        // editing an existing record
        if (params.get('isEdited')) {
            var record = params.get('record');
            this.name = record.location.name;
            this.email = record.location.email;
            this.phone = record.location.phone;
            this.owner = record.location.owner;
            this.sleep_end = record.location.sleep_end;
            this.sleep_start = record.location.sleep_start;
            this.study = record.location.study;
            this.docID = record.location.id;
            this.isEditable = true;
            this.title = 'Update this participant';
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
    CreateParticipantPage.prototype.saveDocument = function (val) {
        var _this = this;
        var name = this.form.controls["name"].value, email = this.form.controls["email"].value, phone = this.form.controls["phone"].value, owner = this.form.controls["owner"].value, sleep_end = this.form.controls["sleep_end"].value, sleep_start = this.form.controls["sleep_start"].value, study = this.form.controls["study"].value;
        // If we are editing an existing record then handle this scenario
        if (this.isEditable) {
            // Call the DatabaseProvider service and pass/format the data for use
            // with the updateDocument method
            this._DB.updateDocument(this._COLL, this.docID, {
                name: name,
                email: email,
                phone: phone,
                owner: owner,
                sleep_end: sleep_end,
                sleep_start: sleep_start,
                study: study
            })
                .then(function (data) {
                _this.clearForm();
                _this.displayAlert('Success', 'The participant ' + name + ' was successfully updated');
            })
                .catch(function (error) {
                _this.displayAlert('Updating participant failed', error.message);
            });
        }
        else {
            // Call the DatabaseProvider service and pass/format the data for use
            // with the addDocument method
            this._DB.addDocument(this._COLL, {
                name: name,
                email: email,
                phone: phone,
                owner: owner,
                sleep_end: sleep_end,
                sleep_start: sleep_start,
                study: study
            })
                .then(function (data) {
                _this.clearForm();
                _this.displayAlert('Record added', 'The participant ' + name + ' was successfully added');
            })
                .catch(function (error) {
                _this.displayAlert('Adding participant failed', error.message);
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
    CreateParticipantPage.prototype.displayAlert = function (title, message) {
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
    CreateParticipantPage.prototype.clearForm = function () {
        this.name = '';
        this.email = '';
        this.phone = '';
        this.owner = '';
        this.sleep_end = '';
        this.sleep_start = '';
        this.study = '';
    };
    CreateParticipantPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-participant',template:/*ion-inline-start:"/home/chantz/Desktop/college/projects/capstone/WebPortal_prototype/src/pages/create_participant/create_participant.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ title }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form\n    [formGroup]=\'form\'\n    (ngSubmit)=\'saveDocument(form.value)\'>\n\n    <ion-item>\n      <ion-label stacked>Participant Name:</ion-label>\n      <ion-input\n        type=\'text\'\n        formControlName=\'name\'\n        [(ngModel)]=\'name\'>\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n       <ion-label stacked>Participant Email:</ion-label>\n       <ion-input\n          type="text"\n          formControlName="email"\n          [(ngModel)]="email"></ion-input>\n 	  </ion-item>\n\n    <ion-item>\n       <ion-label stacked>Participant Phone:</ion-label>\n       <ion-input\n          type="text"\n          formControlName="phone"\n          [(ngModel)]="phone"></ion-input>\n    </ion-item>\n\n    <br>\n    <label stacked class ="item item-input item-select">\n      <div class ="input-label">\n        Participant Study:\n      </div>\n      <select formControlName=\'study\'>\n        <option *ngFor="let study of studs" [(ngModel)]="study">\n          {{ studs.short_name }}\n        </option>\n      </select>\n    </label>\n    <br>\n\n 	  <ion-item>\n       <button\n         ion-button\n         block\n         color="primary"\n         text-center\n         padding-top\n         padding-bottom\n         [disabled]="!form.valid">\n          <div *ngIf="!isEditable">\n             Add a new participant\n          </div>\n\n          <div *ngIf="isEditable">\n             Update this participant\n          </div>\n          </button>\n 	  </ion-item>\n\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/home/chantz/Desktop/college/projects/capstone/WebPortal_prototype/src/pages/create_participant/create_participant.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]) === "function" && _e || Object])
    ], CreateParticipantPage);
    return CreateParticipantPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=create_participant.js.map

/***/ })

});
//# sourceMappingURL=1.js.map