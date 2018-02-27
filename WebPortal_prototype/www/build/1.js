webpackJsonp([1],{

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateQuestionPageModule", function() { return CreateQuestionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_question__ = __webpack_require__(542);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateQuestionPageModule = (function () {
    function CreateQuestionPageModule() {
    }
    CreateQuestionPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_question__["a" /* CreateQuestionPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_question__["a" /* CreateQuestionPage */]),
            ],
        })
    ], CreateQuestionPageModule);
    return CreateQuestionPageModule;
}());

//# sourceMappingURL=create_question.module.js.map

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateQuestionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateQuestionPage = (function () {
    function CreateQuestionPage(navCtrl, params, _FB, _DB, _ALERT) {
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
         * @name type
         * @type {string}
         * @public
         * @description     Model for population form field
         */
        this.type = '';
        /**
         * @name qtext
         * @type {string}
         * @public
         * @description     Model for established form field
         */
        this.qtext = '';
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
        this._COLL = "Questions";
        // Use Formbuilder API to create a FormGroup object
        // that will be used to programmatically control the
        // form / form fields in the component template
        this.form = _FB.group({
            'name': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            'type': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            'qtext': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required]
        });
        // If we have navigation parameters then we need to
        // parse these as we know these will be used for
        // editing an existing record
        if (params.get('isEdited')) {
            var record = params.get('record');
            this.name = record.location.name;
            this.type = record.location.type;
            this.qtext = record.location.qtext;
            this.docID = record.location.id;
            this.isEditable = true;
            this.title = 'Update this question';
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
    CreateQuestionPage.prototype.saveDocument = function (val) {
        var _this = this;
        var name = this.form.controls["name"].value, type = this.form.controls["type"].value, qtext = this.form.controls["qtext"].value;
        // If we are editing an existing record then handle this scenario
        if (this.isEditable) {
            // Call the DatabaseProvider service and pass/format the data for use
            // with the updateDocument method
            this._DB.updateDocument(this._COLL, this.docID, {
                name: name,
                type: type,
                qtext: qtext
            })
                .then(function (data) {
                _this.clearForm();
                _this.displayAlert('Success', 'The question ' + name + ' was successfully updated');
            })
                .catch(function (error) {
                _this.displayAlert('Updating question failed', error.message);
            });
        }
        else {
            // Call the DatabaseProvider service and pass/format the data for use
            // with the addDocument method
            this._DB.addDocument(this._COLL, {
                name: name,
                type: type,
                qtext: qtext
            })
                .then(function (data) {
                _this.clearForm();
                _this.displayAlert('Question added', 'The question ' + name + ' was successfully added');
            })
                .catch(function (error) {
                _this.displayAlert('Adding question failed', error.message);
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
    CreateQuestionPage.prototype.displayAlert = function (title, message) {
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
    CreateQuestionPage.prototype.clearForm = function () {
        this.name = '';
        this.type = '';
        this.qtext = '';
    };
    CreateQuestionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-question',template:/*ion-inline-start:"/home/chantz/Desktop/college/projects/capstone/WebPortal_prototype/src/pages/create_question/create_question.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ title }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form\n    [formGroup]=\'form\'\n    (ngSubmit)=\'saveDocument(form.value)\'>\n\n    <ion-item>\n      <ion-label stacked>Question Name:</ion-label>\n      <ion-input\n        type=\'text\'\n        formControlName=\'name\'\n        [(ngModel)]=\'name\'>\n      </ion-input>\n    </ion-item>\n    <!--\n    <br>\n\n    <label stacked class ="item item-input item-select">\n      <div class ="input-label">\n        Question Type:\n      </div>\n      <select formControlName=\'type\'>\n        <option>Text</option>\n        <option>Radio</option>\n        <option>Multiple Choice</option>\n        <option>Slider</option>\n      </select>\n    </label>\n    <br>\n\n    <ion-item>\n       <ion-label stacked>Question Type:</ion-label>\n       <select>\n         <option>Text</option>\n         <option>Radio</option>\n         <option>Multiple Choice</option>\n         <option>Slider</option>\n        </select>\n 	  </ion-item>-->\n  <ion-item>\n       <ion-label stacked>Question Type:</ion-label>\n       <ion-input\n          type="text"\n          formControlName="type"\n          [(ngModel)]="type" value= \'text\' disabled=\'true\'></ion-input>\n 	  </ion-item>\n\n    <ion-item>\n       <ion-label stacked>Question Text:</ion-label>\n       <ion-input\n          type="text"\n          formControlName="qtext"\n          [(ngModel)]="qtext"></ion-input>\n 	  </ion-item>\n\n 	  <ion-item>\n       <button\n         ion-button\n         block\n         color="primary"\n         text-center\n         padding-top\n         padding-bottom\n         [disabled]="!form.valid">\n          <div *ngIf="!isEditable">\n             Add a new question\n          </div>\n\n          <div *ngIf="isEditable">\n             Update this question\n          </div>\n          </button>\n 	  </ion-item>\n\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/home/chantz/Desktop/college/projects/capstone/WebPortal_prototype/src/pages/create_question/create_question.html"*/,
        })
        /*export class storage {
            qtypes = [
                {name: 'Text'},
                {name: 'Radio'},
                {name: 'Multiple Choice'},
                {name: 'Slider'}
            ];
        }*/
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], CreateQuestionPage);
    return CreateQuestionPage;
}());

//# sourceMappingURL=create_question.js.map

/***/ })

});
//# sourceMappingURL=1.js.map