import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Factura } from '../factura';
import { FacturaService } from '../factura.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(1000)
      ]),
      transition('* => void', [
        animate(1000, style({ opacity: 0 }))
      ])
    ])
  ]
})

export class FacturasComponent implements OnInit {

  constructor(private facturaService: FacturaService, private toastr: ToastsManager, private _vcr: ViewContainerRef, private http: Http) {
    this.toastr.setRootViewContainerRef(_vcr);
  }


  facturas: Factura[];
  invoiceIndex: Number = -1;
  pdf: Uint8Array;
  
  onSelectFactura(factura) {
    this.facturaService.getFactura(factura.facturaId)
      .subscribe(factura => console.log(factura));

  }

  ngOnInit() {
    this.getFacturas();
  }


  getFacturas(): void {
    const facturas = this.facturaService.getFacturas()
      .subscribe(facturas => this.facturas = facturas);
  }

  save(factura): void {
    this.facturaService.updateFactura(factura)
      .subscribe(() => console.log('Factura saved!!'));
    this.toastr.success('Note saved!!');
  }

  showPdf(bytePdf, currentInvoice): void {
    debugger;
    this.invoiceIndex === -1 ? (this.invoiceIndex = currentInvoice + 1, this.pdf = this.convertDataURIToBinary(bytePdf)) : (this.invoiceIndex = -1, this.pdf = new Uint8Array(0));
  }

  convertDataURIToBinary(dataURI: string) {
    var raw = window.atob(dataURI);
    var rawLength = raw.length;
    var array = new Uint8Array(new ArrayBuffer(rawLength));

    for (var i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
    }
    return array;
  }

  clearPdf(array: Uint8Array){
    debugger;
    while(array.length > 0){
      array;
    }
    return array;
  }
}
