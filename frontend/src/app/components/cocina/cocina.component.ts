import {
  ChangeDetectionStrategy,
  Component,
  NgZone,
  OnInit,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cocina',
  templateUrl: './cocina.component.html',
  styleUrls: ['./cocina.component.css'],
})
export class CocinaComponent implements OnInit {
  clicks: number[] = [];
  pedidos: any[] = [];

  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {
    this.clicks.length = this.pedidos.length;
    this.clicks.fill(0, 0, this.pedidos.length);
    this.getPedidos();
  }

  getPedidos(): void {
    this.httpClient.get<any>('http://localhost:3000/api/pedidos/').subscribe({
      next: (response) => {
        this.pedidos = response;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  handlePedido(i): void {
    if (this.pedidos[i].estado === 'preparación') {
      this.actualizarEstado('retirar', i);
    }
    if (this.pedidos[i].estado === 'retirar') {
      this.actualizarEstado('entregado', i);
    }
  }

  actualizarEstado(e, i): void {
    const idPedido = this.pedidos[i]._id;
    const headers = { 'Content-Type': 'application/json' };

    this.httpClient
      .put<any>(
        `http://localhost:3000/api/pedidos/${idPedido}`,
        {
          mozo: this.pedidos[i].mozo,
          mesa: this.pedidos[i].mesa,
          nota: this.pedidos[i].nota,
          estado: e,
          total: this.pedidos[i].total,
          productos: this.pedidos[i].productos,
        },
        { headers }
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );

    this.getPedidos();
  }
  removePedido(i): void {
    const idPedido = this.pedidos[i]._id;
    const headers = { 'Content-Type': 'application/json' };
    this.httpClient
      .delete<any>(`http://localhost:3000/api/pedidos/${idPedido}`, { headers })
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );

    this.getPedidos();
  }
}
