import { Injectable } from '@angular/core';

@Injectable()
export class InMemoryDataService {
  createDb() {
    const products = [{
      id: 1,
      name: 'iPhone',
      price: 650
    }, {
      id: 2,
      name: 'MacBook Pro',
      price: 2500
    }, {
      id: 3,
      name: 'iPad',
      price: 200
    }];

    /*const facturas = [{
      id: 1,
      cnpj: '68.877.752/0001-79',
      po: ' ',
      noNote: '000.164.384',
      totalValue: '2.406,80',
      emissionDate: '11/04/2018',
      noteType: ' '
    }, {
      id: 2,
      cnpj: '07.306.834/0001-79',
      po: ' ',
      noNote: '000.003.847',
      totalValue: '22.224,44',
      emissionDate: '11/04/2018',
      noteType: ' '
    }, {
      id: 3,
      cnpj: '00.029.372/0003-02',
      po: ' ',
      noNote: '3235623',
      totalValue: '220,44',
      emissionDate: '10/04/2018',
      noteType: ' '
    }];*/

    return { products/*, facturas */};
  }

  constructor() { }

}
