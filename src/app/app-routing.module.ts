import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { FacturasComponent } from './facturas/facturas.component';

const routes: Routes = [{
  path: 'products',
  component: ProductsComponent
},{
  path: 'healthcare',
  component: FacturasComponent
}]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
