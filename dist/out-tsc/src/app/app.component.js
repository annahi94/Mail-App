"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var menu_1 = require("./menu");
var header_1 = require("./header");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.currentURL = '';
        this.menus = [
            new menu_1.Menu('/', 'Home', new header_1.Header('Home', '../assets/images/GE-logo.png'), false, null),
            new menu_1.Menu(null, 'Catalogs', null, true, [
                new menu_1.Menu('/area', 'Area', new header_1.Header('Area', '../assets/images/GE-healthcare.png'), false, null)
            ]),
            new menu_1.Menu('/healthcare', 'Health Care', new header_1.Header('Health Care', '../assets/images/GE-healthcare.png'), false, null),
        ];
        this.currentURL = window.location.pathname;
        console.log(this.menus);
    }
    AppComponent.prototype.ngOnInit = function () {
        this.setHeader();
    };
    AppComponent.prototype.onSelectMenu = function (menu) {
        this.selectedMenu = menu;
    };
    AppComponent.prototype.setHeader = function () {
        var _this = this;
        this.menus.forEach(function (element) {
            if (element.routerLink === _this.currentURL) {
                _this.selectedMenu = element;
            }
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map