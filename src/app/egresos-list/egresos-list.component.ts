import { Component, OnInit } from '@angular/core';
import { EgresosService } from '../services/egresos.service';
import { Egreso } from '../models/egreso.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-egresos-list',
  templateUrl: './egresos-list.component.html',
  styleUrls: ['./egresos-list.component.css'],
})
export class EgresosListComponent implements OnInit {
  egresos: Egreso[] = [];

  constructor(private egresosService: EgresosService, private router: Router) {}

  ngOnInit() {
    this.egresos = this.egresosService.getEgresos();
  }

  nuevoEgreso() {
    this.router.navigate(['/egresos/nuevo']);
  }

  editarEgreso(index: number) {
    // Redirige al formulario de edición con el índice del egreso
    this.router.navigate([`/egresos/editar/${index}`]); // Cambio aquí para usar backticks
  }

  eliminarEgreso(index: number) {
    this.egresosService.eliminarEgreso(index);
  }
}
