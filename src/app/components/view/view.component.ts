import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  settings = {
    columns: {
      id: {
        title: 'ID Plataforma'
      },
      orderNumber: {
        title: 'Nº Pedido'
      },
      instance: {
        title: 'Instancia'
      },
      code: {
        title: 'Código'
      },
      created: {
        title: 'Creado'
      },
      order: {
        title: 'Pedido'
      },
      delivery: {
        title: 'Entrega'
      },
      group: {
        title: 'Grupo'
      },
      store: {
        title: 'Tienda'
      },
      paymentMethod: {
        title: 'Forma de Pago'
      },
      client: {
        title: 'Cliente'
      },
      name: {
        title: 'Nombre'
      },
      totalAmount: {
        title: 'Monto Total'
      },
      shippingAmount: {
        title: 'Monto Envío'
      },
      type: {
        title: 'Tipo'
      },
      status: {
        title: 'Estado'
      }
    },
    hideSubHeader: true,
    actions: false,

  };

  constructor() { }

  ngOnInit(): void {
  }

}
