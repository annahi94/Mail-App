import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacturaDetailComponent } from './factura-detail/factura-detail.component';
import { FacturaService } from './factura.service';
import { FacturasComponent } from './facturas/facturas.component';
import { HeadersComponent } from './headers/headers.component';
//import { InMemoryDataService } from './in-memory-data.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './product.service';
import { ProductsComponent } from './products/products.component';
import { AreaComponent } from './area/area.component';
import { Area } from './area/area.model';
import { ModalModule, TooltipModule } from 'ngx-bootstrap';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AreaSevice } from './services/area.service';
import { ActivePipe } from './pipes/active-pipe';
import { InverseActivePipe } from './pipes/inverse-active.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    FacturasComponent,
    FacturaDetailComponent,
    HeadersComponent,
    AreaComponent,
    ActivePipe,
    InverseActivePipe
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
    TooltipModule.forRoot(),
    ReactiveFormsModule,
    //HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [ProductService, FacturaService, AreaSevice],
  bootstrap: [AppComponent]
})


export class AppModule { }
