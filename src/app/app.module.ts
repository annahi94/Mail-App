import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AreaComponent } from './area/area.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { FacturaService } from './factura.service';
import { FacturasComponent } from './facturas/facturas.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HeadersComponent } from './headers/headers.component';

import { ModalModule } from 'ngx-bootstrap';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './product.service';
import { ProductsComponent } from './products/products.component';

import { Area } from './area/area.model';
import { AreaSevice } from './services/area.service';

import { MainPipeModule } from './main-pipe/main-pipe.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    FacturasComponent,
    HeadersComponent,
    AreaComponent
  ],
  imports: [
    BrowserModule,
    PdfViewerModule,
    ToastModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    MainPipeModule
    //HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [ProductService, FacturaService, AreaSevice],
  bootstrap: [AppComponent]
})


export class AppModule { }
