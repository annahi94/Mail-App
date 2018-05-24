<<<<<<< HEAD
=======
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { AppRoutingModule } from './app-routing.module';
>>>>>>> 9d3258ba539c98abe1958fee7dfb82f9a782b4a6
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AreaComponent } from './area/area.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

import { DatepickerModule, BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { FacturaService } from './factura.service';
import { FacturasComponent } from './facturas/facturas.component';
import { FormsModule } from "@angular/forms";

import { HeadersComponent } from './headers/headers.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { ModalModule } from 'ngx-bootstrap';

import { NgModule } from '@angular/core';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './product.service';
import { ProductsComponent } from './products/products.component';

import { Area } from './area/area.model';
import { AreaSevice } from './services/area.service';

import { ToastModule } from 'ng2-toastr/ng2-toastr';
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
<<<<<<< HEAD
    MainPipeModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot() 
    //,HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
=======
    ModalModule.forRoot(),
    ReactiveFormsModule,
    //HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
>>>>>>> 9d3258ba539c98abe1958fee7dfb82f9a782b4a6
  ],
  providers: [ProductService, FacturaService, AreaSevice],
  bootstrap: [AppComponent]
})


export class AppModule { }
