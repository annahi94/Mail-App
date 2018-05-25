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
var http_1 = require("@angular/common/http");
var of_1 = require("rxjs/observable/of");
var operators_1 = require("rxjs/operators");
var httpOptions = {
    headers: new http_1.HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Content-Type': 'application/json'
    })
};
var AreaSevice = /** @class */ (function () {
    function AreaSevice(http) {
        this.http = http;
        this.url = 'http://localhost:50192/api/Area';
    }
    //private url = 'api/areas';
    AreaSevice.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error, "Operation: " + operation);
            return of_1.of(result);
        };
    };
    AreaSevice.prototype.getAreas = function () {
        return this.http.get(this.url)
            .pipe(operators_1.tap(function (areas) { return console.log('Areas'); }), operators_1.catchError(this.handleError('getAreas', [])));
    };
    AreaSevice.prototype.addArea = function (area) {
        return this.http.post(this.url, area, httpOptions)
            .pipe(operators_1.tap(function (area) { return console.log("Added area of id " + area.Id + "!"); }), operators_1.catchError(this.handleError('addArea')));
    };
    AreaSevice = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AreaSevice);
    return AreaSevice;
}());
exports.AreaSevice = AreaSevice;
//# sourceMappingURL=area.service.js.map