"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FilterTablePipe = /** @class */ (function () {
    function FilterTablePipe() {
    }
    FilterTablePipe.prototype.transform = function (items, term) {
        if (items.length === 0 || term === '') {
            return items;
        }
        var resultArray = [];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            if (item.title == term)
                resultArray.push(item);
        }
        return resultArray;
    };
    FilterTablePipe = __decorate([
        core_1.Pipe({
            name: 'filterTable',
            pure: false
        })
    ], FilterTablePipe);
    return FilterTablePipe;
}());
exports.FilterTablePipe = FilterTablePipe;
//# sourceMappingURL=filter-table.js.map