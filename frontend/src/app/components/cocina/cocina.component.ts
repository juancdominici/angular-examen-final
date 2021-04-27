import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cocina',
  templateUrl: './cocina.component.html',
  styleUrls: ['./cocina.component.css'],
})
export class CocinaComponent implements OnInit {
  clicks: number[] = [];
  pedidos: any[] = [
    {
      mozo: '2',
      mesa: '4',
      nota: 'Hay nota.',
      estado: 'preparación',
      total: 450.12,
      productos: [
        { producto: 'Hamburguesa', cantidad: '3' },
        { producto: 'Pancho con papas', cantidad: '1' },
      ],
    },
    {
      mozo: '2',
      mesa: '1',
      nota: 'this.nota',
      estado: 'preparación',
      total: 450.12,
      productos: [
        { producto: 'Hamburguesa', cantidad: '2' },
        { producto: 'Pancho con papas', cantidad: '1' },
      ],
    },
    {
      mozo: '2',
      mesa: '1',
      nota: 'this.nota',
      estado: 'preparación',
      total: 450.12,
      productos: [
        { producto: 'Hamburguesa', cantidad: '20' },
        { producto: 'Pancho con papas', cantidad: '1' },
      ],
    },
    {
      mozo: '2',
      mesa: '1',
      nota: 'this.nota',
      estado: 'preparación',
      total: 450.12,
      productos: [
        { producto: 'Hamburguesa', cantidad: '2' },
        { producto: 'Pancho con papas', cantidad: '15' },
      ],
    },
  ];

  constructor() {}
  ngOnInit(): void {
    this.clicks.length = this.pedidos.length;
    this.clicks.fill(0, 0, this.pedidos.length);
  }

  handlePedido(i): void {
    this.clicks[i] += 1;

    this.clicks[i] === 1
      ? (this.pedidos[i].estado = 'retirar')
      : this.clicks[i] === 2
      ? (this.pedidos[i].estado = 'entregado')
      : null;
  }
}
