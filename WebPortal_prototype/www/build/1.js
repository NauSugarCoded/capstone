webpackJsonp([1],{

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectModulePageModule", function() { return SelectModulePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_module__ = __webpack_require__(555);
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

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectModulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(65);
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
         * @name recurrence
         * @type {string}
         * @public
         * @description     Model for established form field
         */
        this.recurrence = '';
        /**
         * @name start_date
         * @type {date}
         * @public
         * @description     Model for established form field
         */
        this.start_date = '';
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
            'type': ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            'recurrence': [''],
            'start_time': [''],
            'start_date': [''],
            'end_date': ['']
        });
        // If we have navigation parameters then we need to
        // parse these as we know these will be used for
        // editing an existing record
        if (params.get('isEdited')) {
            var record = params.get('record');
            this.name = record.location.name;
            this.type = record.location.type;
            this.recurrence = record.location.recurrence;
            this.start_time = record.location.start_time;
            this.start_date = record.location.start_date;
            this.end_date = record.location.end_date;
            this.owner = record.location.owner;
            this.docID = record.location.id;
            this.isEditable = true;
            this.title = 'Update this document';
            this.module = record.location;
        }
    }
    SelectModulePage.prototype.ionViewDidEnter = function () {
        this.retrieveCollection();
        if (this.docID != '') {
            this.retrieveSubCollection();
        }
    };
    SelectModulePage.prototype.retrieveCollection = function () {
        var _this = this;
        this._DB.getQuestions_Modules("Questions")
            .then(function (data) {
            _this.quests = data;
            console.log(_this.quests);
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
    SelectModulePage.prototype.updateModule = function (val) {
        var _this = this;
        var name = this.form.controls["name"].value, type = this.form.controls["type"].value, recurrence = this.form.controls['recurrence'].value, start_time = this.form.controls['start_time'].value, start_date = this.form.controls['start_date'].value, end_date = this.form.controls['end_date'].value;
        // If we are editing an existing record then handle this scenario
        if (this.isEditable) {
            // Call the DatabaseProvider service and pass/format the data for use
            // with the updateDocument method
            this._DB.updateDocument(this._COLL, this.docID, {
                name: name,
                type: type,
                recurrence: recurrence,
                start_time: start_time,
                start_date: start_date,
                end_date: end_date
            })
                .then(function (data) {
                _this.displayAlert('Success', 'The module ' + name + ' was successfully updated');
            })
                .catch(function (error) {
                _this.displayAlert('Updating module failed', error.message);
            });
        }
        else {
            // Call the DatabaseProvider service and pass/format the data for use
            // with the addDocument method
            this._DB.addDocument(this._COLL, {
                name: name,
                type: type,
                recurrence: recurrence,
                start_time: start_time,
                start_date: start_date,
                end_date: end_date
            })
                .then(function (data) {
                _this.displayAlert('Record added', 'The module ' + name + ' was successfully added');
            })
                .catch(function (error) {
                _this.displayAlert('Adding module failed', error.message);
            });
        }
    };
    SelectModulePage.prototype.deleteDocument = function () {
        var _this = this;
        this._DB.deleteDocument(this._COLL, this.docID)
            .then(function (data) {
            _this.displayAlert('Success', 'The module ' + _this.name + ' was successfully removed');
        })
            .catch(function (error) {
            _this.displayAlert('Error', error.message);
        });
    };
    SelectModulePage.prototype.saveQuestions = function (val, moduleID) {
        var _this = this;
        if (val.type == "text") {
            this._DB.addModules_Questions("Modules", this.docID, "Questions", {
                name: val.name,
                id: val.id,
                type: val.type,
                qtext: val.qtext,
                owner: val.owner,
                moduleID: moduleID
            })
                .then(function (data) {
                _this.displayAlert('Success', 'The question ' + val.name + ' was successfully added');
            })
                .catch(function (error) {
                _this.displayAlert('Error', error.message);
            });
        }
        else if (val.type == "multi") {
            this.saveQuestionsHelper(val)
                .then(function (opts) {
                console.log(_this.opts);
                _this._DB.addModules_Questions("Modules", _this.docID, "Questions", {
                    name: val.name,
                    id: val.id,
                    type: val.type,
                    qtext: val.qtext,
                    owner: val.owner,
                    option1: opts[0],
                    option2: opts[1],
                    option3: opts[2],
                    option4: opts[3],
                    option5: opts[4],
                    option6: opts[5],
                    moduleID: moduleID
                })
                    .then(function (data) {
                    _this.displayAlert('Success', 'The question ' + val.name + ' was successfully added');
                })
                    .catch(function (error) {
                    _this.displayAlert('Error', error.message);
                });
            });
        }
        else if (val.type == "radio") {
            this.saveQuestionsHelper(val)
                .then(function (opts) {
                _this._DB.addModules_Questions("Modules", _this.docID, "Questions", {
                    name: val.name,
                    type: val.type,
                    id: val.id,
                    qtext: val.qtext,
                    owner: val.owner,
                    option1: opts[0],
                    option2: opts[1],
                    option3: opts[2],
                    option4: opts[3],
                    option5: opts[4],
                    option6: opts[5],
                    moduleID: moduleID
                })
                    .then(function (data) {
                    _this.displayAlert('Success', 'The question ' + val.name + ' was successfully added');
                })
                    .catch(function (error) {
                    _this.displayAlert('Error', error.message);
                });
            });
        }
        else {
            this._DB.addModules_Questions("Modules", this.docID, "Questions", {
                name: val.name,
                id: val.id,
                type: val.type,
                qtext: val.qtext,
                owner: val.owner,
                moduleID: moduleID
            })
                .then(function (data) {
                _this.displayAlert('Success', 'The question ' + val.name + ' was successfully added');
            })
                .catch(function (error) {
                _this.displayAlert('Error', error.message);
            });
        }
    };
    SelectModulePage.prototype.saveQuestionsHelper = function (val) {
        var opts = [];
        var i = 0;
        for (i = 0; i < this.quests.length; i++) {
            if (this.quests[i] == val.name) {
                opts[0] = this.quests[i].option1;
                opts[1] = this.quests[i].option2;
                opts[2] = this.quests[i].option3;
                opts[3] = this.quests[i].option4;
                opts[4] = this.quests[i].option5;
                opts[5] = this.quests[i].option6;
            }
        }
        return opts;
    };
    SelectModulePage.prototype.updateDocument = function (object) {
        var params = {
            collection: this._COLL,
            location: object
        };
        this.navCtrl.push('branching', { record: params });
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
            selector: 'page-select-module',template:/*ion-inline-start:"/home/chantz/Desktop/projects/capstone/WebPortal_prototype/src/pages/select_module/select_module.html"*/'<!--\n  Generated template for the SelectModulePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Module</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <form\n    [formGroup]=\'form\'\n    (ngSubmit)=\'updateModule(form.value)\'>\n\n    <ion-item>\n      <ion-label stacked>Modules Name:</ion-label>\n      <ion-input\n        type=\'text\'\n        formControlName=\'name\'\n        [(ngModel)]=\'name\'>\n      </ion-input>\n    </ion-item>\n\n    <ion-item>\n       <ion-label stacked>Type:</ion-label>\n       <ion-input\n          type="text"\n          formControlName="type"\n          [(ngModel)]="type"></ion-input>\n 	  </ion-item>\n\n    <div *ngIf="type == \'Time Initiated\'">\n      <ion-item>\n        <ion-label> Recurrence: </ion-label>\n        <ion-select formControlName="recurrence" [(ngModel)]="recurrence">\n          <ion-option value="once"> Once </ion-option>\n          <ion-option value="day"> Daily </ion-option>\n          <ion-option value="week"> Weekly </ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n         <ion-label stacked> Start Time </ion-label>\n         <ion-datetime\n            displayFormat="hh:mma"\n            type="time"\n            formControlName="start_time"\n            [(ngModel)]="start_time"></ion-datetime>\n   	  </ion-item>\n\n      <ion-item>\n         <ion-label stacked> Start Date </ion-label>\n         <ion-input\n            formControlName="start_date"\n            [(ngModel)]="start_date"></ion-input>\n   	  </ion-item>\n\n      <ion-item>\n         <ion-label stacked> End Date</ion-label>\n         <ion-input\n            formControlName="end_date"\n            [(ngModel)]="end_date"></ion-input>\n   	  </ion-item>\n    </div>\n\n    <ion-item>\n       <button\n         ion-button\n         block\n         color="primary"\n         text-center\n         padding-top\n         padding-bottom\n         [disabled]="!form.valid">\n          <div *ngIf="!isEditable">\n             Add a new Module\n          </div>\n\n          <div *ngIf="isEditable">\n             Update this Module\n          </div>\n          </button>\n 	  </ion-item>\n\n  </form>\n\n  <ion-item>\n  <div *ngIf="isEditable">\n      <button\n        ion-button\n        block\n        color="danger"\n        text-center\n        padding-top\n        padding-bottom\n        [disabled]="!form.valid"\n        (click)="deleteDocument()">\n        Delete Module\n      </button>\n    </div>\n  </ion-item>\n\n  <h2> Questions </h2>\n\n  <!--<ion-item>\n     <button\n       ion-button\n       block\n       color="primary"\n       text-center\n       padding-top\n       padding-bottom\n       (click)="updateDocument()">\n           Add Branching\n      </button>\n    </ion-item>-->\n\n  <ion-list>\n    <button ion-item *ngFor=\'let question of questions\' (click)="updateDocument(question)">\n      <h2> {{ question.name }} </h2>\n    </button>\n  </ion-list>\n\n  <h2> Add Questions </h2>\n  <button ion-item *ngFor=\'let quest of quests\' (click)="saveQuestions(quest, docID)">\n    Add {{ quest.name }}\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"/home/chantz/Desktop/projects/capstone/WebPortal_prototype/src/pages/select_module/select_module.html"*/,
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