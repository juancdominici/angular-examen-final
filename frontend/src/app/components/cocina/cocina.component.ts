import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cocina',
  templateUrl: './cocina.component.html',
  styleUrls: ['./cocina.component.css'],
})
export class CocinaComponent implements OnInit {
  pedidos: any[] = [
    {
      mozo: '2',
      mesa: '4',
      nota: 'Hay nota.',
      estado: 'En preparación.',
      total: 450.12,
      productos: [
        { producto: 'Hamburguesa', cantidad: '200' },
        { producto: 'Pancho con papas', cantidad: '150' },
      ],
    },
    {
      mozo: '2',
      mesa: '1',
      nota: 'this.nota',
      estado: 'En preparación.',
      total: 450.12,
      productos: [
        { producto: 'Hamburguesa', cantidad: '200' },
        { producto: 'Pancho con papas', cantidad: '150' },
      ],
    },
    {
      mozo: '2',
      mesa: '1',
      nota: 'this.nota',
      estado: 'En preparación.',
      total: 450.12,
      productos: [
        { producto: 'Hamburguesa', cantidad: '200' },
        { producto: 'Pancho con papas', cantidad: '150' },
      ],
    },
    {
      mozo: '2',
      mesa: '1',
      nota: 'this.nota',
      estado: 'En preparación.',
      total: 450.12,
      productos: [
        { producto: 'Hamburguesa', cantidad: '200' },
        { producto: 'Pancho con papas', cantidad: '150' },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  removePedido(i): void {
    this.pedidos.splice(i, 1);
  }
}
