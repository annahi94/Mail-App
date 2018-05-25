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
var FacturaService = /** @class */ (function () {
    function FacturaService(http) {
        this.http = http;
        this.facturasURL = 'http://localhost:50192/api/Invoice';
    }
    FacturaService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error, "Operation: " + operation);
            return of_1.of(result);
        };
    };
    FacturaService.prototype.getFacturas = function () {
        return this.http.get(this.facturasURL)
            .pipe(operators_1.tap(function (facturas) { return console.log('Fetched facturas!'); }), operators_1.catchError(this.handleError('getFacturas', [])));
    };
    FacturaService.prototype.getFactura = function (id) {
        var url = this.facturasURL + "/" + id;
        return this.http.get(url).pipe(operators_1.tap(function (_) { return console.log("Fetched factura of id " + id + "!"); }), operators_1.catchError(this.handleError("getFactura id = " + id)));
    };
    FacturaService.prototype.updateFactura = function (factura) {
        return this.http.put(this.facturasURL + ("/" + factura.id), factura, httpOptions).pipe(operators_1.tap(function (_) { return console.log("Updated factura of id " + factura.id + "!"); }), operators_1.catchError(this.handleError('updateFactura')));
    };
    FacturaService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], FacturaService);
    return FacturaService;
}());
exports.FacturaService = FacturaService;
//# sourceMappingURL=factura.service.js.map