import { Component, OnInit, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { Factura } from '../factura';
import { FacturaService } from '../factura.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
declare var $: any;

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

  private connection: any;
  private proxy: any;
  private ulr: any;

  public facturas: Array<Factura>;
  invoiceIndex: Number = -1;
  pdf: Uint8Array;

  constructor(private facturaService: FacturaService, private toastr: ToastsManager, private _vcr: ViewContainerRef, private http: Http, private changeDetectorRefs: ChangeDetectorRef) {
    this.toastr.setRootViewContainerRef(_vcr);
  }

  public startConnection(): void {
    this.connection = $.hubConnection('http://localhost:52996/signalr');
    this.proxy = this.connection.createHubProxy('FacturaHub');

    this.connection.start().done((data: any) => {
      console.log('Connected to Processing Hub');
    }).catch((error: any) => {
      console.log('Hub error -> ' + error);
    });
  }

  public registerOnServerEvents(): void {
    this.proxy.on('Hello', (data: any) => {
      console.log(data);
    });

    this.proxy.on('SendInvoice', (data: any) => {
      this.facturas.push(data);
      this.changeDetectorRefs.detectChanges();
    });
  }

  // onSelectFactura(factura) {
  //   this.facturaService.getFactura(factura.facturaId).subscribe((factura : any) => {
  //     console.log(factura);
  //   });
  // }

  ngOnInit() {
    this.getFacturas();
    this.startConnection();
    this.registerOnServerEvents();

  }

  getFacturas(): void {
    this.facturaService.getFacturas().subscribe((facturas : any) => {
      this.facturas = facturas;
    });
  }

  save(factura): void {
    this.facturaService.updateFactura(factura)
      .subscribe(() => console.log('Factura saved!!'));
    this.toastr.success('Note saved!!');
  }

  showPdf(bytePdf, currentInvoice): void {
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
}
