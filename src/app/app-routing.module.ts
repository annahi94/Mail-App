import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { FacturasComponent } from './facturas/facturas.component';
import { AreaComponent } from './area/area.component';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'healthcare',
    component: FacturasComponent
  },
  {
    path: 'area',
    component: AreaComponent
  }
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
