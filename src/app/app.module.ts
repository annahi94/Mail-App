import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
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
import { ModalModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    FacturasComponent,
    FacturaDetailComponent,
    HeadersComponent,
    AreaComponent    
  ],
  imports: [
    BrowserModule,
    ToastModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    ModalModule.forRoot()
    //,HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [ProductService, FacturaService],
  bootstrap: [AppComponent]
})


export class AppModule { }
