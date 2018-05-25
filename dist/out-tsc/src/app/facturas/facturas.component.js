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
var animations_1 = require("@angular/animations");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var modal_1 = require("ngx-bootstrap/modal");
var factura_service_1 = require("../services/factura.service");
var FacturasComponent = /** @class */ (function () {
    function FacturasComponent(facturaService, toastr, _vcr, http, changeDetectorRefs, modalService) {
        this.facturaService = facturaService;
        this.toastr = toastr;
        this._vcr = _vcr;
        this.http = http;
        this.changeDetectorRefs = changeDetectorRefs;
        this.modalService = modalService;
        this.invoiceIndex = -1;
        this.toastr.setRootViewContainerRef(_vcr);
    }
    FacturasComponent.prototype.startConnection = function () {
        this.connection = $.hubConnection('http://localhost:50192/signalr');
        this.proxy = this.connection.createHubProxy('FacturaHub');
        this.connection.start().done(function (data) {
            console.log('Connected to Processing Hub');
        }).catch(function (error) {
            console.log('Hub error -> ' + error);
        });
    };
    FacturasComponent.prototype.registerOnServerEvents = function () {
        var _this = this;
        this.proxy.on('Hello', function (data) {
            console.log(data);
        });
        this.proxy.on('SendInvoice', function (data) {
            _this.facturas.push(data);
            _this.changeDetectorRefs.detectChanges();
            _this.changeDetectorRefs.markForCheck();
        });
    };
    FacturasComponent.prototype.clearPdf = function (array) {
        while (array.length > 0) {
            array;
        }
        return array;
    };
    FacturasComponent.prototype.convertDataURIToBinary = function (dataURI) {
        var raw = window.atob(dataURI);
        var rawLength = raw.length;
        var array = new Uint8Array(new ArrayBuffer(rawLength));
        for (var i = 0; i < rawLength; i++) {
            array[i] = raw.charCodeAt(i);
        }
        return array;
    };
    FacturasComponent.prototype.getFacturas = function () {
        var _this = this;
        this.facturaService.getFacturas().subscribe(function (facturas) {
            _this.facturas = facturas;
            console.log(_this.facturas);
        });
    };
    FacturasComponent.prototype.save = function (facturaSelected) {
        var _this = this;
        this.facturaService.updateFactura(facturaSelected)
            .subscribe(function () { return _this.toastr.success('Note saved!!'); });
        this.modalRef.hide();
    };
    FacturasComponent.prototype.openModal = function (template, factura) {
        this.facturaSelected = factura;
        this.modalRef = this.modalService.show(template);
    };
    FacturasComponent.prototype.showPdf = function (bytePdf, currentInvoice) {
        this.invoiceIndex === -1 ? (this.invoiceIndex = currentInvoice + 1, this.pdf = this.convertDataURIToBinary(bytePdf)) : (this.invoiceIndex = -1, this.pdf = new Uint8Array(0));
    };
    FacturasComponent.prototype.ngOnInit = function () {
        this.getFacturas();
        this.startConnection();
        this.registerOnServerEvents();
    };
    FacturasComponent = __decorate([
        core_1.Component({
            selector: 'app-facturas',
            templateUrl: './facturas.component.html',
            styleUrls: ['./facturas.component.css'],
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
        __metadata("design:paramtypes", [factura_service_1.FacturaService, ng2_toastr_1.ToastsManager, core_1.ViewContainerRef, http_1.Http, core_1.ChangeDetectorRef, modal_1.BsModalService])
    ], FacturasComponent);
    return FacturasComponent;
}());
exports.FacturasComponent = FacturasComponent;
//# sourceMappingURL=facturas.component.js.map