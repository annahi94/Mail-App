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
    MainPipeModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    DatepickerModule.forRoot() 
    //,HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [ProductService, FacturaService],
  bootstrap: [AppComponent]
})


export class AppModule { }
