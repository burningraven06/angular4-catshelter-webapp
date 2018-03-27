webpackJsonp([1,4],{

/***/ 102:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 102;


/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(115);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppNavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppNavbarComponent = (function () {
    function AppNavbarComponent() {
    }
    return AppNavbarComponent;
}());
AppNavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__(180),
        styles: [__webpack_require__(172)]
    })
], AppNavbarComponent);

//# sourceMappingURL=app-navbar.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-main',
        template: __webpack_require__(181),
        styles: [__webpack_require__(173)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routes__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_navbar_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cats_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cat_detail_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__cat_crud_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__cat_search_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__about_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__cat_search_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular_in_memory_web_api__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__in_memory_data_service__ = __webpack_require__(114);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__app_navbar_component__["a" /* AppNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__cats_component__["a" /* CatsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__cat_detail_component__["a" /* CatDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_13__dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_15__cat_search_component__["a" /* CatSearchComponent */],
            __WEBPACK_IMPORTED_MODULE_14__about_component__["a" /* AboutComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routes__["a" /* AppRoutes */]),
            __WEBPACK_IMPORTED_MODULE_16_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_17__in_memory_data_service__["a" /* InMemoryDataService */]),
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__cat_crud_service__["a" /* CatCrudService */], __WEBPACK_IMPORTED_MODULE_12__cat_search_service__["a" /* CatSearchService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cats_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cat_detail_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_component__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });





var AppRoutes = [
    {
        path: 'cats',
        component: __WEBPACK_IMPORTED_MODULE_0__cats_component__["a" /* CatsComponent */]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__home_component__["a" /* HomeComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_3__dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_4__about_component__["a" /* AboutComponent */]
    },
    {
        path: 'cat-info/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__cat_detail_component__["a" /* CatDetailComponent */]
    }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cat_search_service__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CatSearchComponent = (function () {
    function CatSearchComponent(catSearchService, router) {
        this.catSearchService = catSearchService;
        this.router = router;
        this.searchTerms = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
    }
    CatSearchComponent.prototype.searchByName = function (term) {
        this.searchTerms.next(term);
    };
    CatSearchComponent.prototype.searchByColor = function (term) {
        this.searchTerms.next(term);
    };
    CatSearchComponent.prototype.searchResultsByName = function () {
        var _this = this;
        this.catsByName = this.searchTerms.debounceTime(300).distinctUntilChanged().switchMap(function (term) { return term ? _this.catSearchService.searchByName(term) : __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of([]); });
    };
    CatSearchComponent.prototype.searchResultsByColor = function () {
        var _this = this;
        this.catsByColor = this.searchTerms.debounceTime(300).distinctUntilChanged().switchMap(function (term) { return term ? _this.catSearchService.searchByColor(term) : __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of([]); });
    };
    CatSearchComponent.prototype.ngOnInit = function () {
        this.searchResultsByColor();
        this.searchResultsByName();
    };
    CatSearchComponent.prototype.goToDetail = function (cat) {
        var link = ['/cat-info', cat.id];
        this.router.navigate(link);
    };
    return CatSearchComponent;
}());
CatSearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'cat-search',
        template: __webpack_require__(183),
        styles: [__webpack_require__(175)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__cat_search_service__["a" /* CatSearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__cat_search_service__["a" /* CatSearchService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], CatSearchComponent);

var _a, _b;
//# sourceMappingURL=cat-search.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cat; });
var Cat = (function () {
    function Cat() {
    }
    return Cat;
}());

//# sourceMappingURL=cat.class.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryDataService; });
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var cats = [
            {
                id: 1,
                name: "FatNinja",
                color: "red",
                found_location: "Dakota",
                found_by: "Erik Liam",
                isHealthy: true
            },
            {
                id: 2,
                name: "Adam",
                color: "white",
                found_location: "Canberra",
                found_by: "Brian Smith",
                isHealthy: true
            },
            {
                id: 3,
                name: "Felicity",
                color: "Mixed",
                found_location: "Beijing",
                found_by: "Adrian Hammer",
                isHealthy: true
            },
            {
                id: 4,
                name: "Harry",
                color: "Brown",
                found_location: "Delhi",
                found_by: "Jason James",
                isHealthy: true
            },
            {
                id: 5,
                name: "Tom",
                color: "Grey",
                found_location: "Washington",
                found_by: "Andy Riktor",
                isHealthy: false
            },
            {
                id: 6,
                name: "Lambda",
                color: "Brown",
                found_location: "Shanghai",
                found_by: "Rudolph Sam",
                isHealthy: true
            },
            {
                id: 7,
                name: "Cindrella",
                color: "White",
                found_location: "New York",
                found_by: "Mary Saint",
                isHealthy: true
            },
            {
                id: 8,
                name: "Rudolph",
                color: "Black",
                found_location: "Oklahoma",
                found_by: "Hermes Smith",
                isHealthy: false
            },
            {
                id: 9,
                name: "Adelaide",
                color: "Mixed",
                found_location: "Alaska",
                found_by: "John James",
                isHealthy: true
            },
            {
                id: 10,
                name: "Pumpkin",
                color: "Black",
                found_location: "Seoul",
                found_by: "Mindy Dames",
                isHealthy: true
            },
            {
                id: 11,
                name: "Charlie",
                color: "White",
                found_location: "Sri Lanka",
                found_by: "Finn James",
                isHealthy: true
            },
            {
                id: 12,
                name: "Xavier",
                color: "White",
                found_location: "Sydney",
                found_by: "Baron Thompson",
                isHealthy: false
            }
        ];
        return { cats: cats };
    };
    return InMemoryDataService;
}());

//# sourceMappingURL=in-memory-data.service.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".marg-top-bot-5{\n\tmargin-top: 5%;\n\tmargin-bottom: 5%;\n\t}\n.blue-underline{\n\tborder-bottom: 1px solid #1b96fe;\n\tpadding-bottom: 1%;\n}\n.marg-top-5{\n\tmargin-top: 5%;\n}\n.marg-left-5{\n\tmargin-left: 5%;\n}\n.marg-left-10{\n\tmargin-left: 10%;\n}\n.marg-top-10{\n\tmargin-top: 10%;\n}\n.builtbyText{\n\tfont-family: mono;\n\tfont-weight: bold;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".top-bar{\n\tbackground-color: white;\n\tborder-bottom: 0.5px solid #e2f2ff;\n/*\tmargin-bottom: 10px;\n*/}\n.menu{\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, "#cat-info-div{\n\tborder: 1px solid lightgrey;\n\tborder-radius: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".search-results{\n/*\tborder-bottom: 1px solid grey;\n*/\tcursor: pointer;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".cats > li{\n\tlist-style: none;\n}\n.marg-right-3{\n\tmargin-right: 3%;\n}\n.chosen{\n\tborder: 2px solid #1b96fe;\n\tborder-radius: 10px;\n}\n.card{\n\tcursor: pointer;\n}\n.marg-top-bot-3{\n\tmargin-top: 3%;\n\tmargin-bottom: 3%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".card{\n\tcursor: pointer;\n}\n#dashboard_heading{\n\tmargin-top: 3%;\n\tmargin-bottom: 3%;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(false);
// imports


// module
exports.push([module.i, ".marg-top5{\n\tmargin-top: 5%;\n}\n.marg-top10{\n\tmargin-top: 10%\n}\n.marg-left10{\n\tmargin-left: 10%;\n}\n#blue-line-heading{\n\tborder-bottom: 1px solid #1b96fe\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 179:
/***/ (function(module, exports) {

module.exports = "<div class='row'>\n\t<div class='small-12 medium-12 large-12 columns'>\n\t\t<h1 class='marg-top-bot-5'> <span class='blue-underline'> Alexander Cat Shelter </span></h1>\n\t</div>\n\t<div class='small-12 medium-6 large-6 columns'>\n\t\t<p class='marg-left-10'> Built With</p>\n\t\t<div class='marg-left-10'>\n\t\t\t<h3 class='marg-top-5'> Angular 4</h3>\n\t\t\t<h6> FrontEnd Javascript MVW Framework</h6>\n\t\t</div> \n\t\t<div class=' marg-left-10'>\n\t\t\t<h3 class='marg-top-5'> ZURB Foundation 6.3.1</h3>\n\t\t\t<h5> FrontEnd Design Framework</h5>\n\t\t</div>\n\t\t\n\t</div>\n\t<div class='small-12 medium-6 large-6 columns'>\n\t\t<div class='marg-left-10'>\n\t\t\t<h3> What Now?</h3>\n\t\t\t<p class='marg-top-10'> If you want to discuss about this Project then feel free to contact me.</p>\n\t\t</div>\n\t\t<div class='marg-left-10'>\n\t\t\t<p> Thanks for your interest in Alexander Cat Shelter & Have a nice Day!</p>\n\t\t\t<p> </p>\n\t\t\t<p class='marg-top-10'> Built by <span class='marg-left-5 builtbyText'> burningRaven06 </span>\n\t\t\t</p>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

module.exports = "<div class='row'>\n\t<div class='small-12 medium-12 large-12 columns'>\n\t\t<div class='top-bar'>\n\t\t\t<div class='top-bar-title'>\n\t\t\t\t<a routerLink='/'> <img src='/assets/nav-logo.png'> </a>\n\t\t\t</div>\n\t\t\t<div class='top-bar-right'>\n\t\t\t\t<ul class='menu'>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a class='button default ' routerLink='/dashboard' routerLinkActive=\"active\"> Dashboard</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li> \n\t\t\t\t\t\t<a class='button default ' routerLink='/cats' routerLinkActive=\"active\">Cats</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a class='button default ' routerLink='/about' routerLinkActive=\"active\"> About</a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ 181:
/***/ (function(module, exports) {

module.exports = "\n<app-navbar></app-navbar>\n<router-outlet></router-outlet>"

/***/ }),

/***/ 182:
/***/ (function(module, exports) {

module.exports = "<div class='row' id='cat-selected' *ngIf='cat'>\n\n\t<div class='small-12 medium-12 large-12 columns'>\n\t\t<button class='button float-right' (click) = 'goBack()'> Back</button>\n\t</div>\n\n\t<div class='medium-4 small-12 large-4 columns'>\n\t\t<div class='text-center'>\n\t\t\t<img  src='/assets/cat-icon.png'>\n\t\t\t<h3 class='text-center'> \t<strong> {{cat.name}} </strong>\n\t\t\t</h3>\t\n\t\t</div>\n\t</div> \n\n\t<div class='medium-4 small-12 large-4 columns' id='cat-info-div'>\n\t\t<h3 class='text-center'> Profile Summary</h3>\n\t\t<p> <label> ID: </label> <strong> {{ cat.id}} </strong></p>\n\t\t<p> <label> Name: </label> <strong> {{ cat.name}} </strong></p>\n\t\t<p> <label> Color: </label> <strong> {{ cat.color}}</strong></p>\n\t\t<p> <label> Rescued From: </label> <strong> {{ cat.found_location}}</strong></p>\n\t\t<p> <label> Rescued By: </label> <strong> {{ cat.found_by}}</strong></p>\n\t\t<p> <label> Health Status: </label> <strong> <span *ngIf = 'cat.isHealthy; else cat_not_fine'> Fine</span> </strong></p>\n\t\t<ng-template #cat_not_fine> Injured</ng-template>\n\t</div>\n\t<div class='medium-4 large-4 small-12 columns'>\n\t\t<h3 class='text-center'> Update {{ cat.name}}</h3>\n\t\t<label> Name: </label> <input [(ngModel)] = ' cat.name' placeholder='Name' type='text' /> \n\t\t<label> Color: </label> <input [(ngModel)] =' cat.color' placeholder=\"Color\" type='text'/>\n\t\t<label> Rescued From: </label> <input [(ngModel)] =' cat.found_location' placeholder = \"Rescued From\" type='text'/>\n\t\t<label> Rescued By: </label> <input [(ngModel)] = ' cat.found_by' placeholder = \"Saint who Rescued Cat\" type='text'/>\n\t\t<label> Health Status\n\t\t\t<select [(ngModel)] = ' cat.isHealthy'>\n\t\t\t\t<option value = 'true'> All OK</option>\n\t\t\t\t<option value = 'false'> Suffered Injuries</option>\n\t\t\t</select>\n\t\t</label>\n\t\t<button class='success button expanded' (click) = \"saveCatDetails()\"> Update</button>\n\t</div>\n</div>"

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports = "<div class='row'>\n\t<h2 class='text-center'> Search Cats</h2>\n\t<div class='small-12 medium-6 large-6 columns'>\n\t\t<h5> By Name</h5>\n\t\t<input #searchBox1 (keyup)='searchByName(searchBox1.value)' type='text' placeholder=\"Type Name of Cat\" />\n\t\t<div *ngFor = 'let cat of catsByName | async' (click) = 'goToDetail(cat)'>\n\t\t\t<span class='search-results'> {{ cat.name }} </span>\n\t\t</div>\n\t</div>\t\n\t<div class='small-12 medium-6 large-6 columns'>\n\t\t<h5> By Color</h5>\n\t\t<input #searchBox2 (keyup)='searchByColor(searchBox2.value)' type='text' placeholder='Type Color of Cat' />\n\t\t<div *ngFor = 'let cat of catsByColor | async' (click) = 'goToDetail(cat)'>\n\t\t\t<span class='search-results'> {{ cat.name }} </span>\n\t\t</div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

module.exports = "<!-- <cat-detail [cat]='selectedCat'></cat-detail> -->\n<div class='row'>\n\t<div class='small-12 medium-12 large-12 columns'>\n\t\t<h2 class='marg-top-bot-3 float-left'> Cats in our Shelter</h2>\n\t\t<button class='success button marg-top-bot-3 float-right' (click)='showCatAddForm()' > Add New Cat to Shelter </button>\n\t</div>\n\t<div class='small-12 medium-12 large-12 columns' *ngIf=\" selectedCat \" >\n\t\t<p> {{selectedCat.name}} is a {{selectedCat.color | lowercase}} cat from {{selectedCat.found_location}}</p>\n\t\t<button class='button warning' (click) = 'goToCatInfo()'> {{selectedCat.name }}'s Profile</button>\n\t</div>\n\n</div>\n\n<div class='row'*ngIf='displayCatAddForm'>\n\t<div class='small-12 medium-6 medium-centered large-6 large-centered columns'>\n\t\t<div class='small-12 medium-12 large-12 columns'>\n\t\t\t<div class='float-left'> <h5> Place Rescued Cat in Shelter</h5> </div>\n\t\t\t<div class='float-right'> <button class='button secondary' (click)='hideCatAddForm()'> Cancel</button></div>\n\t\t</div>\n\t\t<div class='small-12 medium-12 large-12 columns'>\n\t\t\t<form [formGroup]='addCatForm' ngvalidate (ngSubmit)='saveCat(addCatForm.value, addCatForm.valid)'>\n\t\t\t\t<label> Name: </label> <input formControlName=\"name\" placeholder='Name' type='text' />\n\t\t\t\t<p [hidden]=\"addCatForm.controls.name.valid || addCatForm.controls.name.pristine && !submitted\"> <span class='label warning'> **Name is required (Minimum 3 characters) </span> </p> \n\n\t\t\t\t<label> Color: </label> <input formControlName=\"color\" placeholder=\"Color\" type='text'/>\n\t\t\t\t<p [hidden]=\"addCatForm.controls.color.valid || addCatForm.controls.color.pristine && !submitted\"> <span class='label warning'> **Color is required (Minimum 3 characters) </span></p>\n\n\t\t\t\t<label> Rescued From: </label> <input formControlName=\"found_location\" placeholder = \"Rescued From\" type='text'/>\n\t\t\t\t<p [hidden]=\"addCatForm.controls.found_location.valid || addCatForm.controls.found_location.pristine && !submitted\"> <span class='label warning'> **Please tell us where the cat was found </span> </p>\n\n\t\t\t\t<label> Rescued By: </label> <input formControlName='found_by' placeholder = \"Saint who Rescued Cat\" type='text'/>\n\t\t\t\t<p [hidden]=\"addCatForm.controls.found_by.valid || addCatForm.controls.found_by.pristine && !submitted\"> <span class='label warning'> **Please tell us who found the cat </span></p>\n\n\t\t\t\t<label> Health Status\n\t\t\t\t\t<select formControlName='isHealthy'>\n\t\t\t\t\t\t<option value = 'true'> All OK</option>\n\t\t\t\t\t\t<option value = 'false'> Suffered Injuries</option>\n\t\t\t\t\t</select>\n\t\t\t\t</label>\n\t\t\t\t<p [hidden]=\"addCatForm.controls.isHealthy.valid || addCatForm.controls.isHealthy.pristine && !submitted\"> <span class='label warning'> **Please mention cat's status </span></p>\n\n\t\t\t\t<button class='success button expanded'> Add</button>\t\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>\n\n<div class='row'>\t\n\t<div class='small-4 medium-4 large-2 columns ' *ngFor = ' let cat of cats' (click) = \"onSelect(cat)\" [class.chosen]=\"cat === selectedCat\" title='Click for details of {{ cat.name}}'>\n\t\t<div class='card'>\n\t\t\t<img src='/assets/cat-icon.png'>\n\t\t\t<div class='card-section'>\n\t\t\t\t<h5> \n\t\t\t\t\t<span class='badge float-left marg-right-3'> {{ cat.id }} </span> {{ cat.name}}\t\n\t\t\t\t\t<span class='badge warning float-right' (click) = 'removeCat(cat); $event.stopPropagation()' title='Delete {{cat.name}}'> X </span>\n\t\t\t\t</h5>\n\t\t\t\t<p> {{cat.color}}, <span *ngIf = 'cat.isHealthy; else cat_not_fine'> Fine</span> </p>\n\t\t\t\t<ng-template #cat_not_fine> Injured </ng-template>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

module.exports = "<cat-search></cat-search>\n<div class='row'>\n\t<div class='small-12 medium-12 large-12 columns'>\n\t\t<h2 id='dashboard_heading'> Recently Rescued Cats</h2>\n\t</div>\n\n\t<div *ngFor = \"let cat of cats\" [routerLink] =\"['/cat-info', cat.id]\" class='small-4 medium-4 large-2 columns' title='Click for details of {{ cat.name}}'>\n\t\t<div class='card'>\n\t\t\t<img src='/assets/cat-icon.png'>\n\t\t\t<div class='card-section'>\n\t\t\t\t<h5> <span class='badge text-left marg-right-3'> {{ cat.id }} </span> {{ cat.name}}</h5>\n\t\t\t\t<p> {{cat.color}}, <span *ngIf = 'cat.isHealthy; else cat_not_fine'> Fine</span> </p>\n\t\t\t\t<ng-template #cat_not_fine> Injured </ng-template>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

module.exports = "<div class='row'>\n\t<div class='small-12 medium-12 large-6 columns marg-top5'>\n\t\t<div class='text-center'>\n\t\t\t<img src='/assets/home-logo.png'>\n\t\t</div>\t\n\t</div>\n\t<div class='small-12 medium-12 large-6 columns marg-top10'>\n\t\t<div class='marg-left10'>\n\t\t\t<h2 > Rescue a Cat & </h2> \n\t\t\t<h2 > <span id='blue-line-heading'> Deliver to our Shelter </span></h2>\n\t\t</div>\n\t</div>\n</div>\n<div class='row'>\n<div class='small-12 medium-12 large-12 text-center marg-top10'>\n\t\t<h2> Save a Stranded Cat, <span id='blue-line-heading'>Save a Life </span></h2>\n\t</div>\n</div>"

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(103);


/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatCrudService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CatCrudService = (function () {
    function CatCrudService(http) {
        this.http = http;
        this.catsUrl = 'api/cats';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    CatCrudService.prototype.getCats = function () {
        // return Promise.resolve(ALLCATS);
        return this.http.get(this.catsUrl).toPromise().then(function (res) { return res.json().data; }).catch(this.catchError);
    };
    CatCrudService.prototype.getCat = function (id) {
        // return this.getCats().then(res_cats => res_cats.find(cat => cat.id === id))
        var getCatByIDURL = this.catsUrl + "/" + id;
        return this.http.get(getCatByIDURL).toPromise().then(function (res) { return res.json().data; }).catch(this.catchError);
    };
    CatCrudService.prototype.updateCat = function (cat) {
        var updateCatByURL = this.catsUrl + "/" + cat.id;
        return this.http.put(updateCatByURL, JSON.stringify(cat), { headers: this.headers }).toPromise().then(function () { return cat; }).catch(this.catchError);
    };
    CatCrudService.prototype.createCat = function (cat) {
        return this.http.post(this.catsUrl, JSON.stringify(cat), { headers: this.headers }).toPromise().then(function (res) { return res.json().data; }).catch(this.catchError);
    };
    CatCrudService.prototype.deleteCat = function (id) {
        var deleteCatByIDURL = this.catsUrl + "/" + id;
        return this.http.delete(deleteCatByIDURL, { headers: this.headers }).toPromise().then(function () { return null; }).catch(this.catchError);
    };
    CatCrudService.prototype.catchError = function (error) {
        console.error('Error: ', error);
        return Promise.reject(error.message);
    };
    return CatCrudService;
}());
CatCrudService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CatCrudService);

var _a;
//# sourceMappingURL=cat-crud-service.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__(179),
        styles: [__webpack_require__(171)]
    })
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cat_class__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cat_crud_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CatDetailComponent = (function () {
    function CatDetailComponent(catCrudService, activatedRoute, location) {
        this.catCrudService = catCrudService;
        this.activatedRoute = activatedRoute;
        this.location = location;
    }
    CatDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.switchMap(function (params) { return _this.catCrudService.getCat(+params['id']); }).subscribe(function (res_cat) { return _this.cat = res_cat; });
    };
    CatDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    CatDetailComponent.prototype.saveCatDetails = function () {
        var _this = this;
        this.catCrudService.updateCat(this.cat).then(function () { return _this.goBack(); });
    };
    return CatDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cat_class__["a" /* Cat */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cat_class__["a" /* Cat */]) === "function" && _a || Object)
], CatDetailComponent.prototype, "cat", void 0);
CatDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'cat-detail',
        template: __webpack_require__(182),
        styles: [__webpack_require__(174)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__cat_crud_service__["a" /* CatCrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__cat_crud_service__["a" /* CatCrudService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["g" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["g" /* Location */]) === "function" && _d || Object])
], CatDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=cat-detail.component.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatSearchService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CatSearchService = (function () {
    function CatSearchService(http) {
        this.http = http;
    }
    CatSearchService.prototype.searchByName = function (name_query) {
        return this.http.get("app/cats/?name=" + name_query).map(function (res) { return res.json().data; });
    };
    CatSearchService.prototype.searchByColor = function (color_query) {
        return this.http.get("app/cats/?color=" + color_query).map(function (res) { return res.json().data; });
    };
    return CatSearchService;
}());
CatSearchService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], CatSearchService);

var _a;
//# sourceMappingURL=cat-search.service.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cat_crud_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CatsComponent = (function () {
    function CatsComponent(catCrudService, router, formBuilder) {
        this.catCrudService = catCrudService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.displayCatAddForm = false;
    }
    //cats = CATS;
    CatsComponent.prototype.fetchAllCats = function () {
        var _this = this;
        //this.cats = this.catCrudService.getCats();
        this.catCrudService.getCats().then(function (res_cats) { return _this.cats = res_cats; });
    };
    CatsComponent.prototype.onSelect = function (cat) {
        this.selectedCat = cat;
    };
    CatsComponent.prototype.goToCatInfo = function () {
        this.router.navigate(['/cat-info', this.selectedCat.id]);
    };
    CatsComponent.prototype.showCatAddForm = function () {
        this.displayCatAddForm = true;
    };
    CatsComponent.prototype.hideCatAddForm = function () {
        this.displayCatAddForm = false;
    };
    CatsComponent.prototype.saveCat = function (cat, isValid) {
        var _this = this;
        if (isValid) {
            this.catCrudService.createCat(cat).then(function (cat) {
                _this.cats.push(cat);
                _this.selectedCat = null;
            });
            this.displayCatAddForm = false;
            this.initializeBlankForm();
        }
        this.submitted = true;
    };
    CatsComponent.prototype.removeCat = function (cat) {
        var _this = this;
        this.catCrudService.deleteCat(cat.id).then(function () {
            _this.cats = _this.cats.filter(function (c) { return c !== cat; });
            if (_this.selectedCat === cat) {
                _this.selectedCat = null;
            }
        });
    };
    CatsComponent.prototype.initializeBlankForm = function () {
        this.addCatForm = this.formBuilder.group({
            name: ["", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].minLength(3)]],
            color: ["", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].minLength(3)]],
            found_location: ["", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]],
            found_by: ["", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].minLength(3)]],
            isHealthy: ["", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* Validators */].required]]
        });
    };
    CatsComponent.prototype.ngOnInit = function () {
        this.fetchAllCats();
        this.initializeBlankForm();
    };
    return CatsComponent;
}());
CatsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-cats',
        template: __webpack_require__(184),
        styles: [__webpack_require__(176)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cat_crud_service__["a" /* CatCrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cat_crud_service__["a" /* CatCrudService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormBuilder */]) === "function" && _c || Object])
], CatsComponent);

var _a, _b, _c;
//# sourceMappingURL=cats.component.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cat_crud_service__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(catCrudService) {
        this.catCrudService = catCrudService;
        this.cats = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.catCrudService.getCats().then(function (res_cats) { return _this.cats = res_cats.slice(res_cats.length - 6, res_cats.length); });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__(185),
        styles: [__webpack_require__(177)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cat_crud_service__["a" /* CatCrudService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cat_crud_service__["a" /* CatCrudService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-homepage',
        template: __webpack_require__(186),
        styles: [__webpack_require__(178)]
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ })

},[251]);
//# sourceMappingURL=main.bundle.js.map