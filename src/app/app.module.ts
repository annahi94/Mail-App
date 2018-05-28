import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PdfViewerModule } from 'ng2-pdf-viewer';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { ModalModule, TooltipModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AreaComponent } from './area/area.component';
import { FacturasComponent } from './facturas/facturas.component';
import { HeadersComponent } from './headers/headers.component';
import { MainPipeModule } from './main-pipe/main-pipe.module';
import { ActivePipe } from './pipes/active-pipe';
import { InverseActivePipe } from './pipes/inverse-active.pipe';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './product.service';
import { ProductsComponent } from './products/products.component';
import { AreaSevice } from './services/area.service';
import { FacturaService } from './services/factura.service';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    FacturasComponent,
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
    MainPipeModule,
    AlertModule.forRoot()    
    //HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [ProductService, FacturaService, AreaSevice],
  bootstrap: [AppComponent]
})


export class AppModule { }
