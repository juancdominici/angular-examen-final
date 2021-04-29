import { Component, OnInit } from '@angular/core';
import {} from 'bootstrap';
import { HttpClient } from '@angular/common/http';

export class Product {
  constructor(public id: number, public name: string, public precio: number) {}
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
  products: Product[];

  /* Listado de cantidades del pedido */
  values: any[] = [];

  /* Listado de cantidades de los inputs */
  newItem: any[] = [];

  /* Pedidos */
  pedidos: any[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.isLoaded = true;
    this.precioTotal = 0;
    this.getProducts();
  }

  getProducts(): void {
    this.httpClient.get<any>('http://localhost:3000/api/products/').subscribe({
      next: (response) => {
        this.products = response;
      },
      error: (error) => {
        console.error(error);
      },
    });
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
      estado: 'preparación',
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

    this.httpClient
      .post<any>('http://localhost:3000/api/pedidos/', pedido, {
        headers: { 'Content-Type': 'application/json' },
      })
      .subscribe(
        (val) => {
          console.log('POST call successful value returned in body', val);
        },
        (response) => {
          console.log('POST call in error', response);
        },
        () => {
          alert('El envio fue enviado con éxito');
        }
      );
    /* this.pedidos.push(pedido); */
  }

  handleSubmit(): void {
    this.makePedido();
    this.reset();
    /**
     * !API CALL: ENVIANDO PEDIDO A LISTA DE PEDIDOS
     */
  }
}
