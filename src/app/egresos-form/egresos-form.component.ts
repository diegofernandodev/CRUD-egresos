import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Egreso } from '../models/egreso.model';
import { EgresosService } from '../services/egresos.service';

@Component({
  selector: 'app-egresos-form',
  templateUrl: './egresos-form.component.html',
  styleUrls: ['./egresos-form.component.css' ],
})
export class EgresosFormComponent implements OnInit {
  egreso: Egreso = {
    numero: 0,
    detalle: '',
    categoria: '',
    fecha: '',
    valor: 0,
  };

  modoEdicion = false;
  egresoIndex: number | undefined;

  constructor(
    private egresosService: EgresosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params['index']) {
        this.modoEdicion = true;
        this.egresoIndex = +params['index'];
        const egreso = this.egresosService.getEgresos()[this.egresoIndex];
        this.egreso = { ...egreso };
      } else {
        const navigationState = this.router.getCurrentNavigation()?.extras.state;
        if (navigationState && navigationState['egreso']) {
          this.egreso = navigationState['egreso'];
        }
      }
    });
  }

  guardarEgreso() {
    if (this.modoEdicion && this.egresoIndex !== undefined) {
      this.egresosService.editarEgreso(this.egresoIndex, this.egreso);
    } else {
      this.egresosService.agregarEgreso(this.egreso);
    }
    this.router.navigate(['/egresos']);
  }
}
