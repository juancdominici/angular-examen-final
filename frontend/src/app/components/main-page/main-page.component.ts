import { Component, OnInit } from '@angular/core';
import {} from 'bootstrap';
import { empty } from 'rxjs';

interface KeyValuePair {
  name: string;
  precio: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  tab = 'inicio';
  tabactive = true;
  isLoaded = true;

  /* Partes del pedido */
  mozo: string;
  mesa: string;
  nota: string;
  precioTotal: number;

  /* Listado de productos */
  products: KeyValuePair[] = [
    { name: 'Hamburguesa', precio: 200 },
    { name: 'Pancho con papas', precio: 150 },
  ];

  /* Listado de cantidades del pedido */
  values: any[] = [];

  /* Listado de cantidades de los inputs */
  newItem: any[] = [];

  /* Pedidos */
  pedidos: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.isLoaded = true;
    this.precioTotal = 0;
  }

  changeTab(a): void {
    this.tab = a;
    this.isLoaded = false;
  }

  handleActive(): void {
    this.tabactive = true;
  }

  addItem(index): void {
    this.values.length = this.products.length;
    this.newItem.length = this.products.length;
    this.values[index] = parseInt(this.newItem[index], 10);
    const cantidad = parseInt(this.newItem[index], 10);
    this.precioTotal =
      this.precioTotal + cantidad * this.products[index].precio;

    this.newItem[index] = '';
  }

  deleteItem(index): void {
    this.precioTotal =
      this.precioTotal -
      parseInt(this.values[index], 10) * this.products[index].precio;
    this.values[index] = undefined;
  }

  reset(): void {
    this.mesa = '';
    this.mozo = '';
    this.values = [];
    this.newItem = [];
    this.nota = '';
    this.precioTotal = 0;
  }

  makePedido(): void {
    const a = this.products.map((elem) => elem.name);
    const b = this.values;

    const pedido = {
      mozo: this.mozo,
      mesa: this.mesa,
      nota: this.nota,
      total: this.precioTotal,
      productos: [],
    };

    /* Filter products */
    pedido.productos = a.map((elem, i) => {
      if (b[i] !== undefined) {
        return { producto: elem, cantidad: b[i] };
      }
    });
    pedido.productos = pedido.productos.filter((el, i) => {
      return el;
    });
    /**
     * !API CALL: ESTO SE VA CUANDO EL PEDIDO SE MANDA AL BACK
     */
    this.pedidos.push(pedido);
  }

  handleSubmit(): void {
    this.makePedido();
    this.reset();
    /**
     * !API CALL: ENVIANDO PEDIDO A LISTA DE PEDIDOS
     */

    alert('El envio fue enviado con éxito');
  }
}
