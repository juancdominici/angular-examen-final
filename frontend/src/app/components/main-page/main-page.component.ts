import { Component, OnInit } from '@angular/core';
import {} from 'bootstrap';
import { empty } from 'rxjs';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  tab = '';
  tabactive = true;
  isLoaded = true;

  /* Partes del pedido */
  mozo: string;
  mesa: string;
  nota: string;

  /* Listado de productos */
  products: any[] = [
    { name: 'Hamburguesa', price: 200 },
    { name: 'Pancho con papas', price: 150 },
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
    this.values[index] = this.newItem[index];
    console.log('Valor agregado', this.values[index], this.values);
    console.log('New item', this.newItem[index]);
    this.newItem[index] = '';
  }

  deleteItem(index): void {
    this.values[index] = undefined;
  }

  reset(): void {
    this.mesa = '';
    this.mozo = '';
    this.values = [];
    this.newItem = [];
    this.nota = '';
  }

  makePedido(): void {
    const a = this.products.map((elem) => elem.name);
    const b = this.values;

    const pedido = {
      mozo: this.mozo,
      mesa: this.mesa,
      nota: this.nota,
      productos: [],
    };

    pedido.productos = a.map((elem, i) => ({ producto: elem, cantidad: b[i] }));
    console.log('Nueva forma', pedido);
  }

  handleSubmit(): void {
    this.makePedido();
    this.reset();
    alert('El envio fue enviado con éxito');
  }
}
