import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Pipe, TemplateRef, ViewContainerRef } from '@angular/core';
import { Http } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Factura } from '../factura';
import { FacturaService } from '../factura.service';


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

@Pipe({
  name: 'actStatusPipe'
})


export class FacturasComponent implements OnInit {
  facturaSelected: Factura[];
  facturas: Factura[];
  invoiceIndex: Number = -1;
  modalRef: BsModalRef;
  pdf: Uint8Array;

  

  clearPdf(array: Uint8Array) {
    while (array.length > 0) {
      array;
    }
    return array;
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

  getFacturas(): void {
    const facturas = this.facturaService.getFacturas()
      .subscribe(facturas => this.facturas = facturas);
  }

  save(facturaSelected): void {
    this.facturaService.updateFactura(facturaSelected)
      .subscribe(() => this.toastr.success('Note saved!!'));
    this.modalRef.hide()
  }

  openModal(template: TemplateRef<any>, factura: Factura[]) {
    this.facturaSelected = factura;
    this.modalRef = this.modalService.show(template);
  }

  showPdf(bytePdf, currentInvoice): void {
    this.invoiceIndex === -1 ? (this.invoiceIndex = currentInvoice + 1, this.pdf = this.convertDataURIToBinary(bytePdf)) : (this.invoiceIndex = -1, this.pdf = new Uint8Array(0));
  }

  constructor(
    private facturaService: FacturaService
    , private toastr: ToastsManager
    , private _vcr: ViewContainerRef
    , private http: Http
    , private modalService: BsModalService
  ) {
    this.toastr.setRootViewContainerRef(_vcr);
  }

  ngOnInit() {
    this.getFacturas();
  }
}
