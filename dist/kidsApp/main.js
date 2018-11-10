(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bgcolour {\r\nbackground-color: blue ;\r\nfont-size: 1em ;\r\nfont-style: normal;\r\n width: 40% ;\r\n \r\n}\r\n\r\n.textcolor {\r\n font-size: 2em ;\r\n font-style: italic;\r\n color:brown;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bgcolour\" >\n  <div class=\"col-md-offset-1\" >\n    <h1>\n      Welcome to {{title}}!\n    </h1>\n  </div>\n  \n  <a routerLink=\"/math\" class=\"textcolor\">Math tutorial</a>\n  <br/>\n  <router-outlet></router-outlet>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Learning App';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _math_math_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./math/math.component */ "./src/app/math/math.component.ts");
/* harmony import */ var _math_add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./math/add/add.component */ "./src/app/math/add/add.component.ts");
/* harmony import */ var _math_subtract_subtract_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./math/subtract/subtract.component */ "./src/app/math/subtract/subtract.component.ts");
/* harmony import */ var _math_multiply_multiply_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./math/multiply/multiply.component */ "./src/app/math/multiply/multiply.component.ts");
/* harmony import */ var _routing_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routing/routing.module */ "./src/app/routing/routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _math_devide_devide_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./math/devide/devide.component */ "./src/app/math/devide/devide.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _math_dialog_body_dialog_body_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./math/dialog-body/dialog-body.component */ "./src/app/math/dialog-body/dialog-body.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _math_math_component__WEBPACK_IMPORTED_MODULE_4__["MathComponent"],
                _math_add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"],
                _math_subtract_subtract_component__WEBPACK_IMPORTED_MODULE_6__["SubtractComponent"],
                _math_multiply_multiply_component__WEBPACK_IMPORTED_MODULE_7__["MultiplyComponent"],
                _math_devide_devide_component__WEBPACK_IMPORTED_MODULE_10__["DevideComponent"],
                _math_dialog_body_dialog_body_component__WEBPACK_IMPORTED_MODULE_12__["DialogBodyComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _routing_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            entryComponents: [_math_dialog_body_dialog_body_component__WEBPACK_IMPORTED_MODULE_12__["DialogBodyComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/math/add/add.component.css":
/*!********************************************!*\
  !*** ./src/app/math/add/add.component.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/math/add/add.component.html":
/*!*********************************************!*\
  !*** ./src/app/math/add/add.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"addForm\" >\n<div align=\"center\"  ng-app=\"myApp\" ng-controller=\"myController\">\n    <br/>  <br/>\n  <label>Max Range  &nbsp;&nbsp;</label>\n  <select formControlName=\"max\"   (ngModelChange)=\"onChange($event)\">\n    <option *ngFor=\"let max of numberMxRange\" [value]=\"max\" >{{max}}</option>\n  </select>  &nbsp;&nbsp;&nbsp;\n  \n  <br/>  <br/>\n  &nbsp;&nbsp; &nbsp;&nbsp;\n  {{disp_num1}}\n<br/><br/>\n<label>+ &nbsp;&nbsp;</label>\n{{disp_num2}} \n<br/>\n_______________________________\n<br/> <br/> &nbsp;&nbsp;&nbsp;&nbsp;\n <input formControlName=\"sum\"   [(ngModel)] =\"sum\" id =\"sum\"  style=\"text-align:center;\"  />\n <br/> <br/>\n<input type=\"submit\" value=\"Add\"  (click)=\"addNumber(addForm)\" />\n\n</div>\n</form>\n"

/***/ }),

/***/ "./src/app/math/add/add.component.ts":
/*!*******************************************!*\
  !*** ./src/app/math/add/add.component.ts ***!
  \*******************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dialog_body_dialog_body_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dialog-body/dialog-body.component */ "./src/app/math/dialog-body/dialog-body.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddComponent = /** @class */ (function () {
    function AddComponent(dialog) {
        this.dialog = dialog;
        this.numberMxRange = [10, 100, 1000, 1000];
        this.addForm = this.createFormGroup();
    }
    AddComponent.prototype.openDialog = function () {
        var dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        this.dialog.open(_dialog_body_dialog_body_component__WEBPACK_IMPORTED_MODULE_2__["DialogBodyComponent"], dialogConfig);
    };
    AddComponent.prototype.ngOnInit = function () {
        this.firstNum = 12;
        this.secondNum = 23;
        this.disp_num1 = "1 2";
        this.disp_num2 = "2 3";
    };
    AddComponent.prototype.createFormGroup = function () {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            secondNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            sum: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            max: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](100),
            disp_num1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            disp_num2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    };
    AddComponent.prototype.generateRanadomNumber = function () {
        do {
            this.tempFisrtNum = Math.floor(Math.random() * this.addForm.value.max);
            this.temSecondNum = Math.floor(Math.random() * this.addForm.value.max);
        } while (this.tempFisrtNum <= this.temSecondNum);
        this.firstNum = this.tempFisrtNum;
        this.secondNum = this.temSecondNum;
        this.disp_num1 = this.separateDigits_num(this.firstNum);
        this.disp_num2 = this.separateDigits_num(this.secondNum);
    };
    AddComponent.prototype.separateDigits_num = function (number) {
        var sNumber = number.toString();
        var retnum = "";
        for (var i = 0, len = sNumber.length; i < len; i += 1) {
            retnum += +sNumber.charAt(i) + "    ";
        }
        return retnum;
    };
    AddComponent.prototype.onChange = function (deviceValue) {
        alert(deviceValue);
        console.log(deviceValue);
        this.max = deviceValue;
        this.generateRanadomNumber();
    };
    AddComponent.prototype.addNumber = function (addForm) {
        // alert("first num ->"+this.firstNum)
        // alert ("second num -"+this.secondNum)
        // alert("sum file ->"+this.addForm.value.sum)
        var total = this.firstNum + this.secondNum;
        // alert ("total -"+total)
        if (parseInt(this.addForm.value.sum) == total) {
            this.playAudio("22006348_well-done_4.mp3");
            //alert("correct answer")
            this.openDialog();
        }
        else {
            this.playAudio("7528479_wrong-answer_2.mp3");
            //alert("wrong answer")
            this.openDialog();
        }
        this.addForm.value.sum = '';
        this.sum = '';
        // this.playAudio();
        this.generateRanadomNumber();
        alert(this.sum);
    };
    AddComponent.prototype.playAudio = function (voice) {
        var audio = new Audio();
        audio.src = "../../../assets/" + voice;
        audio.load();
        audio.play();
    };
    AddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/math/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.css */ "./src/app/math/add/add.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "./src/app/math/devide/devide.component.css":
/*!**************************************************!*\
  !*** ./src/app/math/devide/devide.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/math/devide/devide.component.html":
/*!***************************************************!*\
  !*** ./src/app/math/devide/devide.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"devideForm\" >\n  <div align=\"center\">\n      <br/>  <br/>\n    <label>Max Range  &nbsp;&nbsp;</label>\n    <select formControlName=\"max\"   (ngModelChange)=\"onChange($event)\">\n      <option *ngFor=\"let max of numberMxRange\" [value]=\"max\" >{{max}}</option>\n    </select>  &nbsp;&nbsp;&nbsp;\n    \n    <br/>  <br/>\n    &nbsp;&nbsp; &nbsp;&nbsp;\n    {{disp_num1}}\n  <br/><br/>\n  <label>÷ &nbsp;&nbsp;</label>\n  {{disp_num2}} \n  <br/>\n  _______________________________\n  <br/> <br/> &nbsp;&nbsp;&nbsp;&nbsp;\n   <input formControlName=\"sum\"    [(ngModel)] =\"sum\"  style=\"text-align:center;\" />\n   <br/> <br/>\n  <input type=\"submit\" value=\"Submit\"  (click)=\"addNumber(devideForm)\"/>\n  \n  </div>\n  </form>\n  "

/***/ }),

/***/ "./src/app/math/devide/devide.component.ts":
/*!*************************************************!*\
  !*** ./src/app/math/devide/devide.component.ts ***!
  \*************************************************/
/*! exports provided: DevideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevideComponent", function() { return DevideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DevideComponent = /** @class */ (function () {
    function DevideComponent() {
        this.numberMxRange = [10, 100, 1000, 1000];
        this.devideForm = this.createFormGroup();
    }
    DevideComponent.prototype.ngOnInit = function () {
        this.firstNum = 6;
        this.secondNum = 2;
        this.disp_num1 = "6";
        this.disp_num2 = "2";
    };
    DevideComponent.prototype.createFormGroup = function () {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            secondNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            sum: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            max: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](100),
            disp_num1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            disp_num2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    };
    DevideComponent.prototype.generateRanadomNumber = function () {
        do {
            this.tempFisrtNum = Math.floor(Math.random() * this.devideForm.value.max);
            this.temSecondNum = Math.floor(Math.random() * this.devideForm.value.max);
            //alert("tempFisrtNum-"+ this.tempFisrtNum);
            // alert("temSecondNum-" +this.temSecondNum);
            //alert("tempFisrtNum % temSecondNum =="+tempFisrtNum % temSecondNum);
            // alert( (this.temSecondNum == 0 ||   this.tempFisrtNum <  this.temSecondNum) ||  this.tempFisrtNum %  this.temSecondNum != 0)
        } while (this.temSecondNum <= 0 || this.tempFisrtNum < this.temSecondNum || this.tempFisrtNum % this.temSecondNum != 0);
        this.firstNum = this.tempFisrtNum;
        this.secondNum = this.temSecondNum;
        this.disp_num1 = this.separateDigits_num(this.firstNum);
        this.disp_num2 = this.separateDigits_num(this.secondNum);
    };
    DevideComponent.prototype.separateDigits_num = function (number) {
        var sNumber = number.toString();
        var retnum = "";
        for (var i = 0, len = sNumber.length; i < len; i += 1) {
            retnum += +sNumber.charAt(i) + "    ";
        }
        return retnum;
    };
    DevideComponent.prototype.onChange = function (deviceValue) {
        // alert(deviceValue)
        console.log(deviceValue);
        this.max = deviceValue;
        this.generateRanadomNumber();
    };
    DevideComponent.prototype.addNumber = function (addForm) {
        // alert("first num ->"+this.firstNum)
        //alert ("second num -"+this.secondNum)
        // alert("sum file ->"+this.devideForm.value.sum)
        var total = this.firstNum / this.secondNum;
        // alert ("total -"+total)
        if (this.devideForm.value.sum == total) {
            this.playAudio("22006348_well-done_4.mp3");
            alert("correct answer");
        }
        else {
            this.playAudio("7528479_wrong-answer_2.mp3");
            alert("wrong answer");
        }
        // this.playAudio();
        this.generateRanadomNumber();
    };
    DevideComponent.prototype.playAudio = function (voice) {
        var audio = new Audio();
        audio.src = "../../../assets/" + voice;
        audio.load();
        audio.play();
    };
    DevideComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-devide',
            template: __webpack_require__(/*! ./devide.component.html */ "./src/app/math/devide/devide.component.html"),
            styles: [__webpack_require__(/*! ./devide.component.css */ "./src/app/math/devide/devide.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DevideComponent);
    return DevideComponent;
}());



/***/ }),

/***/ "./src/app/math/dialog-body/dialog-body.component.css":
/*!************************************************************!*\
  !*** ./src/app/math/dialog-body/dialog-body.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/math/dialog-body/dialog-body.component.html":
/*!*************************************************************!*\
  !*** ./src/app/math/dialog-body/dialog-body.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>This is a Dialog title</h2>\n\n<mat-dialog-content>\n\n<p> Place content here </p>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n    <button class=\"mat-raised-button\" (click)=\"close()\">Close</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/math/dialog-body/dialog-body.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/math/dialog-body/dialog-body.component.ts ***!
  \***********************************************************/
/*! exports provided: DialogBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogBodyComponent", function() { return DialogBodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DialogBodyComponent = /** @class */ (function () {
    function DialogBodyComponent(dialogRef) {
        this.dialogRef = dialogRef;
    }
    DialogBodyComponent.prototype.close = function () {
        this.dialogRef.close("Thanks for using me!");
    };
    DialogBodyComponent.prototype.ngOnInit = function () {
    };
    DialogBodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog-body',
            template: __webpack_require__(/*! ./dialog-body.component.html */ "./src/app/math/dialog-body/dialog-body.component.html"),
            styles: [__webpack_require__(/*! ./dialog-body.component.css */ "./src/app/math/dialog-body/dialog-body.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
    ], DialogBodyComponent);
    return DialogBodyComponent;
}());



/***/ }),

/***/ "./src/app/math/math.component.css":
/*!*****************************************!*\
  !*** ./src/app/math/math.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".divcss {\r\n    background-color: blue ;\r\n    font-size: 1em ;\r\n    font-style: normal;\r\n     width: 60% ;\r\n     align-content: left;     \r\n    }\r\n    \r\n    .textcolor {\r\n     font-size: 2em ;\r\n     font-style: italic;\r\n     color:brown;\r\n    }"

/***/ }),

/***/ "./src/app/math/math.component.html":
/*!******************************************!*\
  !*** ./src/app/math/math.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"divcss\">\n \n  <a class=\"textcolor\" routerLink=\"/add\"  >Addition</a>\n  <br/>\n  <a class=\"textcolor\" routerLink=\"/subtract\">Subtraction</a>\n  <br/>\n  <a class=\"textcolor\" routerLink=\"/multiply\">Multiplication</a>\n  <br/>\n  <a class=\"textcolor\" routerLink=\"/devide\">Divison</a>\n </div>\n\n\n"

/***/ }),

/***/ "./src/app/math/math.component.ts":
/*!****************************************!*\
  !*** ./src/app/math/math.component.ts ***!
  \****************************************/
/*! exports provided: MathComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathComponent", function() { return MathComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MathComponent = /** @class */ (function () {
    function MathComponent() {
    }
    MathComponent.prototype.ngOnInit = function () {
    };
    MathComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-math',
            template: __webpack_require__(/*! ./math.component.html */ "./src/app/math/math.component.html"),
            styles: [__webpack_require__(/*! ./math.component.css */ "./src/app/math/math.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MathComponent);
    return MathComponent;
}());



/***/ }),

/***/ "./src/app/math/multiply/multiply.component.css":
/*!******************************************************!*\
  !*** ./src/app/math/multiply/multiply.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/math/multiply/multiply.component.html":
/*!*******************************************************!*\
  !*** ./src/app/math/multiply/multiply.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"multiplyForm\" >\n  <div align=\"center\">\n      <br/>  <br/>\n    <label>Max Range  &nbsp;&nbsp;</label>\n    <select formControlName=\"max\"   (ngModelChange)=\"onChange($event)\">\n      <option *ngFor=\"let max of numberMxRange\" [value]=\"max\" >{{max}}</option>\n    </select>  &nbsp;&nbsp;&nbsp;\n    \n    <br/>  <br/>\n    &nbsp;&nbsp; &nbsp;&nbsp;\n    {{disp_num1}}\n  <br/><br/>\n  <label>X &nbsp;&nbsp;</label>\n  {{disp_num2}} \n  <br/>\n  _______________________________\n  <br/> <br/> &nbsp;&nbsp;&nbsp;&nbsp;\n   <input formControlName=\"sum\"   [(ngModel)] =\"sum\"  style=\"text-align:center;\" />\n   <br/> <br/>\n  <input type=\"submit\" value=\"Submit\"  (click)=\"addNumber(multiplyForm)\"/>\n  \n  </div>\n  </form>\n  "

/***/ }),

/***/ "./src/app/math/multiply/multiply.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/math/multiply/multiply.component.ts ***!
  \*****************************************************/
/*! exports provided: MultiplyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiplyComponent", function() { return MultiplyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MultiplyComponent = /** @class */ (function () {
    function MultiplyComponent() {
        this.numberMxRange = [10, 100, 1000, 1000];
        this.multiplyForm = this.createFormGroup();
    }
    MultiplyComponent.prototype.ngOnInit = function () {
        this.firstNum = 12;
        this.secondNum = 23;
        this.disp_num1 = "1 2";
        this.disp_num2 = "2 3";
    };
    MultiplyComponent.prototype.createFormGroup = function () {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            secondNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            sum: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            max: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](100),
            disp_num1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            disp_num2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    };
    MultiplyComponent.prototype.generateRanadomNumber = function () {
        do {
            this.tempFisrtNum = Math.floor(Math.random() * this.multiplyForm.value.max);
            this.temSecondNum = Math.floor(Math.random() * this.multiplyForm.value.max);
        } while (this.tempFisrtNum <= this.temSecondNum);
        this.firstNum = this.tempFisrtNum;
        this.secondNum = this.temSecondNum;
        this.disp_num1 = this.separateDigits_num(this.firstNum);
        this.disp_num2 = this.separateDigits_num(this.secondNum);
    };
    MultiplyComponent.prototype.separateDigits_num = function (number) {
        var sNumber = number.toString();
        var retnum = "";
        for (var i = 0, len = sNumber.length; i < len; i += 1) {
            retnum += +sNumber.charAt(i) + "    ";
        }
        return retnum;
    };
    MultiplyComponent.prototype.onChange = function (deviceValue) {
        // alert(deviceValue)
        console.log(deviceValue);
        this.max = deviceValue;
        this.generateRanadomNumber();
    };
    MultiplyComponent.prototype.addNumber = function (addForm) {
        //alert("first num ->"+this.firstNum)
        // alert ("second num -"+this.secondNum)
        //alert("sum file ->"+this.multiplyForm.value.sum)
        var total = this.firstNum * this.secondNum;
        // alert ("total -"+total)
        if (this.multiplyForm.value.sum == total) {
            this.playAudio("22006348_well-done_4.mp3");
            alert("correct answer");
        }
        else {
            this.playAudio("7528479_wrong-answer_2.mp3");
            alert("wrong answer");
        }
        // 
        this.generateRanadomNumber();
    };
    MultiplyComponent.prototype.playAudio = function (voice) {
        var audio = new Audio();
        audio.src = "../../../assets/" + voice;
        audio.load();
        audio.play();
    };
    MultiplyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-multiply',
            template: __webpack_require__(/*! ./multiply.component.html */ "./src/app/math/multiply/multiply.component.html"),
            styles: [__webpack_require__(/*! ./multiply.component.css */ "./src/app/math/multiply/multiply.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MultiplyComponent);
    return MultiplyComponent;
}());



/***/ }),

/***/ "./src/app/math/subtract/subtract.component.css":
/*!******************************************************!*\
  !*** ./src/app/math/subtract/subtract.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/math/subtract/subtract.component.html":
/*!*******************************************************!*\
  !*** ./src/app/math/subtract/subtract.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"subForm\" >\n  <div align=\"center\">\n      <br/>  <br/>\n    <label>Max Range  &nbsp;&nbsp;</label>\n    <select formControlName=\"max\"   (ngModelChange)=\"onChange($event)\">\n      <option *ngFor=\"let max of numberMxRange\" [value]=\"max\" >{{max}}</option>\n    </select>  &nbsp;&nbsp;&nbsp;\n    \n    <br/>  <br/>\n    &nbsp;&nbsp; &nbsp;&nbsp;\n    {{disp_num1}}\n  <br/><br/>\n  <label>- &nbsp;&nbsp;</label>\n  {{disp_num2}} \n  <br/>\n  _______________________________\n  <br/> <br/> &nbsp;&nbsp;&nbsp;&nbsp;\n   <input formControlName=\"sum\"   [(ngModel)] =\"sum\"  style=\"text-align:center;\" />\n   <br/> <br/>\n  <input type=\"submit\" value=\"Submit\"  (click)=\"addNumber(subForm)\"/>\n  \n  </div>\n  </form>\n  "

/***/ }),

/***/ "./src/app/math/subtract/subtract.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/math/subtract/subtract.component.ts ***!
  \*****************************************************/
/*! exports provided: SubtractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubtractComponent", function() { return SubtractComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubtractComponent = /** @class */ (function () {
    function SubtractComponent() {
        this.numberMxRange = [10, 100, 1000, 1000];
        this.subForm = this.createFormGroup();
    }
    SubtractComponent.prototype.ngOnInit = function () {
        this.firstNum = 12;
        this.secondNum = 23;
        this.disp_num1 = "4 2";
        this.disp_num2 = "2 3";
    };
    SubtractComponent.prototype.createFormGroup = function () {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            secondNum: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            sum: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            max: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](100),
            disp_num1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            disp_num2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    };
    SubtractComponent.prototype.generateRanadomNumber = function () {
        do {
            this.tempFisrtNum = Math.floor(Math.random() * this.subForm.value.max);
            this.temSecondNum = Math.floor(Math.random() * this.subForm.value.max);
        } while (this.tempFisrtNum <= this.temSecondNum);
        this.firstNum = this.tempFisrtNum;
        this.secondNum = this.temSecondNum;
        this.disp_num1 = this.separateDigits_num(this.firstNum);
        this.disp_num2 = this.separateDigits_num(this.secondNum);
    };
    SubtractComponent.prototype.separateDigits_num = function (number) {
        var sNumber = number.toString();
        var retnum = "";
        for (var i = 0, len = sNumber.length; i < len; i += 1) {
            retnum += +sNumber.charAt(i) + "    ";
        }
        return retnum;
    };
    SubtractComponent.prototype.onChange = function (deviceValue) {
        alert(deviceValue);
        console.log(deviceValue);
        this.max = deviceValue;
        this.generateRanadomNumber();
    };
    SubtractComponent.prototype.addNumber = function (addForm) {
        //alert("first num ->"+this.firstNum)
        //alert ("second num -"+this.secondNum)
        //alert("sum file ->"+this.subForm.value.sum)
        var total = this.firstNum - this.secondNum;
        //alert ("total -"+total)
        if (this.subForm.value.sum == total) {
            this.playAudio("22006348_well-done_4.mp3");
            alert("correct answer");
        }
        else {
            this.playAudio("7528479_wrong-answer_2.mp3");
            alert("wrong answer");
        }
        // this.playAudio();
        this.generateRanadomNumber();
    };
    SubtractComponent.prototype.playAudio = function (voice) {
        var audio = new Audio();
        audio.src = "../../../assets/" + voice;
        audio.load();
        audio.play();
    };
    SubtractComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subtract',
            template: __webpack_require__(/*! ./subtract.component.html */ "./src/app/math/subtract/subtract.component.html"),
            styles: [__webpack_require__(/*! ./subtract.component.css */ "./src/app/math/subtract/subtract.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SubtractComponent);
    return SubtractComponent;
}());



/***/ }),

/***/ "./src/app/routing/routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/routing/routing.module.ts ***!
  \*******************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _math_add_add_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math/add/add.component */ "./src/app/math/add/add.component.ts");
/* harmony import */ var _math_subtract_subtract_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../math/subtract/subtract.component */ "./src/app/math/subtract/subtract.component.ts");
/* harmony import */ var _math_multiply_multiply_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../math/multiply/multiply.component */ "./src/app/math/multiply/multiply.component.ts");
/* harmony import */ var _math_math_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../math/math.component */ "./src/app/math/math.component.ts");
/* harmony import */ var _math_devide_devide_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../math/devide/devide.component */ "./src/app/math/devide/devide.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'add', component: _math_add_add_component__WEBPACK_IMPORTED_MODULE_2__["AddComponent"] },
    { path: 'subtract', component: _math_subtract_subtract_component__WEBPACK_IMPORTED_MODULE_3__["SubtractComponent"] },
    { path: 'multiply', component: _math_multiply_multiply_component__WEBPACK_IMPORTED_MODULE_4__["MultiplyComponent"] },
    { path: 'devide', component: _math_devide_devide_component__WEBPACK_IMPORTED_MODULE_6__["DevideComponent"] },
    { path: 'math', component: _math_math_component__WEBPACK_IMPORTED_MODULE_5__["MathComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\svn-checkout\repo\kidsApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map