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
var animations_1 = require("@angular/animations");
var area_model_1 = require("./area.model");
var modal_1 = require("ngx-bootstrap/modal");
var area_service_1 = require("../services/area.service");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var AreaComponent = /** @class */ (function () {
    function AreaComponent(modalService, areaService, alert, container) {
        this.modalService = modalService;
        this.areaService = areaService;
        this.alert = alert;
        this.container = container;
        this.search = '';
        this.noDataFound = 'No data found!';
        this.messages = {
            SUCCESSFUL_OPERATION: 'Successful operation',
            ERROR: 'Error - please contact the administrator'
        };
        this.areas = [];
        this.area = new area_model_1.Area(0, '', true);
        this.actionTitle = {
            NONE: '',
            ADD: 'Add area',
            EDIT: 'Edit area',
            VIEW: 'View area'
        };
        this.actionEnum = {
            NONE: 0,
            ADD: 1,
            EDIT: 2,
            VIEW: 3
        };
        alert.setRootViewContainerRef(container);
    }
    AreaComponent.prototype.ngOnInit = function () {
        this.getAreas();
    };
    AreaComponent.prototype.openModal = function (template, action, selectedArea) {
        this.actionSelected = action;
        this.modalArea = this.modalService.show(template);
        if (this.actionSelected === this.actionEnum.ADD)
            this.reset();
        else if (this.actionSelected === this.actionEnum.EDIT)
            this.setFields(selectedArea);
        else
            this.reset();
    };
    AreaComponent.prototype.setFields = function (selectedArea) {
        this.area = Object.assign({}, selectedArea);
    };
    AreaComponent.prototype.getAreas = function () {
        var _this = this;
        this.areaService.getAreas().subscribe(function (response) {
            _this.areas = response;
        });
    };
    AreaComponent.prototype.reset = function () {
        this.area = new area_model_1.Area(0, '', true);
    };
    AreaComponent.prototype.activateOrDeactivate = function (row) {
        var _this = this;
        this.area = Object.assign({}, row);
        this.area.Active = !this.area.Active;
        this.areaService.addArea(this.area)
            .subscribe(function (area) {
            _this.getAreas();
        });
    };
    AreaComponent.prototype.addArea = function () {
        var _this = this;
        this.areaService.addArea(this.area)
            .subscribe(function (response) {
            if (response.success) {
                _this.getAreas();
                _this.modalArea.hide();
                _this.alert.success(_this.messages.SUCCESSFUL_OPERATION);
            }
            else {
                _this.alert.warning(response.msg);
            }
        });
    };
    AreaComponent.prototype.onSubmit = function () {
        this.addArea();
    };
    AreaComponent = __decorate([
        core_1.Component({
            selector: 'area',
            templateUrl: './area.component.html',
            styleUrls: ['./area.component.css'],
            animations: [
                animations_1.trigger('flyInOut', [
                    animations_1.state('in', animations_1.style({ transform: 'translateX(0)' })),
                    animations_1.transition('void => *', [
                        animations_1.style({ transform: 'translateX(-100%)' }),
                        animations_1.animate(1000)
                    ]),
                    animations_1.transition('* => void', [
                        animations_1.animate(1000, animations_1.style({ opacity: 0 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [modal_1.BsModalService,
            area_service_1.AreaSevice,
            ng2_toastr_1.ToastsManager,
            core_1.ViewContainerRef])
    ], AreaComponent);
    return AreaComponent;
}());
exports.AreaComponent = AreaComponent;
//# sourceMappingURL=area.component.js.map