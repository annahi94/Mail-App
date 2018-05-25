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
    headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
};
var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.productsUrl = 'api/products';
    }
    ProductService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error, "Operation: " + operation);
            return of_1.of(result);
        };
    };
    ProductService.prototype.getProducts = function () {
        return this.http.get(this.productsUrl)
            .pipe(operators_1.tap(function (products) { return console.log('Fetched products!'); }), operators_1.catchError(this.handleError('getProducts', [])));
    };
    ProductService.prototype.getProduct = function (id) {
        var url = this.productsUrl + "/" + id;
        return this.http.get(url).pipe(operators_1.tap(function (_) { return console.log("Fetched product of id " + id + "!"); }), operators_1.catchError(this.handleError("getProduct id = " + id)));
    };
    ProductService.prototype.updateProdcut = function (product) {
        return this.http.put(this.productsUrl, product, httpOptions).pipe(operators_1.tap(function (_) { return console.log("Updated product of id " + product.id + "!"); }), operators_1.catchError(this.handleError('updateProduct')));
    };
    ProductService.prototype.addProduct = function (product) {
        return this.http.post(this.productsUrl, product, httpOptions).pipe(operators_1.tap(function (product) { return console.log("Added product of id " + product.id + "!"); }), operators_1.catchError(this.handleError('addProduct')));
    };
    ProductService.prototype.deleteProduct = function (productId) {
        var url = this.productsUrl + "/" + productId;
        return this.http.delete(url, httpOptions).pipe(operators_1.tap(function (_) { return console.log("Deleted product of id " + productId + "!"); }), operators_1.catchError(this.handleError('deleteProduct')));
    };
    ProductService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map