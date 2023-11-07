import { Injectable } from '@angular/core';
import { Egreso } from "../models/egreso.model";

@Injectable({
  providedIn: 'root'
})
export class EgresosService {

  private egresos: Egreso[] = [];

  getEgresos() {
    return this.egresos;
  }

  agregarEgreso(egreso: Egreso) {
    this.egresos.push(egreso);
  }

  editarEgreso(index: number, egreso: Egreso) {
    this.egresos[index] = egreso;
  }

  eliminarEgreso(index: number) {
    this.egresos.splice(index, 1);
  }
}
