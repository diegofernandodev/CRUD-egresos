import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EgresosFormComponent } from './egresos-form/egresos-form.component';
import { EgresosListComponent } from './egresos-list/egresos-list.component';

const routes: Routes = [
  { path: 'egresos', component: EgresosListComponent },
  { path: 'egresos/nuevo', component: EgresosFormComponent },
  { path: 'egresos/editar/:index', component: EgresosFormComponent },
  { path: '', redirectTo: '/egresos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
