"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_2 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var ng2_pdf_viewer_1 = require("ng2-pdf-viewer");
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var area_component_1 = require("./area/area.component");
var facturas_component_1 = require("./facturas/facturas.component");
var headers_component_1 = require("./headers/headers.component");
var main_pipe_module_1 = require("./main-pipe/main-pipe.module");
var active_pipe_1 = require("./pipes/active-pipe");
var inverse_active_pipe_1 = require("./pipes/inverse-active.pipe");
var product_detail_component_1 = require("./product-detail/product-detail.component");
var product_service_1 = require("./product.service");
var products_component_1 = require("./products/products.component");
var area_service_1 = require("./services/area.service");
var factura_service_1 = require("./services/factura.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                products_component_1.ProductsComponent,
                product_detail_component_1.ProductDetailComponent,
                facturas_component_1.FacturasComponent,
                headers_component_1.HeadersComponent,
                area_component_1.AreaComponent,
                active_pipe_1.ActivePipe,
                inverse_active_pipe_1.InverseActivePipe
            ],
            imports: [
                platform_browser_1.BrowserModule,
                ng2_pdf_viewer_1.PdfViewerModule,
                ng2_toastr_1.ToastModule.forRoot(),
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                http_2.HttpModule,
                http_1.HttpClientModule,
                ngx_bootstrap_1.ModalModule.forRoot(),
                ngx_bootstrap_1.TooltipModule.forRoot(),
                forms_1.ReactiveFormsModule,
                main_pipe_module_1.MainPipeModule
                //HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
            ],
            providers: [product_service_1.ProductService, factura_service_1.FacturaService, area_service_1.AreaSevice],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map