import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { Http } from '@angular/http';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Factura } from '../factura';
import { FacturaService } from '../services/factura.service';
declare var $: any;

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
  public facturas: Array<Factura>;
  invoiceIndex: Number = -1;
  pdf: Uint8Array;
  facturaSelected: Factura[];
  modalRef: BsModalRef;

  constructor(private facturaService: FacturaService, private toastr: ToastsManager, private _vcr: ViewContainerRef, private http: Http, private changeDetectorRefs: ChangeDetectorRef, private modalService: BsModalService) {
    this.toastr.setRootViewContainerRef(_vcr);
  }

  public startConnection(): void {
    this.connection = $.hubConnection('http://localhost:50192/signalr');
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
      this.changeDetectorRefs.markForCheck();
    });
  }

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
    this.facturaService.getFacturas().subscribe((facturas: Array<Factura>) => {
      this.facturas = facturas;
      console.log(this.facturas);
    });
  }

  save(facturaSelected): void {
    this.facturaService.updateFactura(facturaSelected)
      .subscribe(() => {
        this.toastr.success('Note saved!!');        
      });
    this.modalRef.hide()
  }

  openModal(template: TemplateRef<any>, factura: Factura[]) {
    this.facturaSelected = factura;
    this.modalRef = this.modalService.show(template);
  }

  showPdf(bytePdf, currentInvoice): void {
    this.invoiceIndex === -1 ? (this.invoiceIndex = currentInvoice + 1, this.pdf = this.convertDataURIToBinary(bytePdf)) : (this.invoiceIndex = -1, this.pdf = new Uint8Array(0));
  }

  ngOnInit() {
    this.getFacturas();
    this.startConnection();
    this.registerOnServerEvents();
  }
}
