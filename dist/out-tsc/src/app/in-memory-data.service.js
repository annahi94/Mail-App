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
var area_model_1 = require("./area/area.model");
var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var products = [{
                id: 1,
                name: 'iPhone',
                price: 650
            }, {
                id: 2,
                name: 'MacBook Pro',
                price: 2500
            }, {
                id: 3,
                name: 'iPad',
                price: 200
            }];
        var areas = [
            new area_model_1.Area(1, 'Area 1'),
            new area_model_1.Area(2, 'Area 2'),
            new area_model_1.Area(3, 'Area 3'),
            new area_model_1.Area(4, 'Area 4'),
            new area_model_1.Area(5, 'Area 5')
        ];
        /*const facturas = [{
          id: 1,
          cnpj: '68.877.752/0001-79',
          po: ' ',
          noNote: '000.164.384',
          totalValue: '2.406,80',
          emissionDate: '11/04/2018',
          noteType: ' '
        }, {
          id: 2,
          cnpj: '07.306.834/0001-79',
          po: ' ',
          noNote: '000.003.847',
          totalValue: '22.224,44',
          emissionDate: '11/04/2018',
          noteType: ' '
        }, {
          id: 3,
          cnpj: '00.029.372/0003-02',
          po: ' ',
          noNote: '3235623',
          totalValue: '220,44',
          emissionDate: '10/04/2018',
          noteType: ' '
        }];*/
        return { products: products /*, facturas */, areas: areas };
    };
    InMemoryDataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], InMemoryDataService);
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map