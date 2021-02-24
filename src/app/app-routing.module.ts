import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialsComponent } from './components/tutorials/tutorials.component';
import { VariablesComponent } from './components/variables/variables.component';
import { KpisComponent } from './components/kpis/kpis.component';

const routes: Routes = [
  {
    path: 'tutorials',
    component: TutorialsComponent
  },
  {
    path: 'variables',
    component: VariablesComponent
  },
  {
    path: 'kpis',
    component: KpisComponent
  },
  {
    path: '**',
    redirectTo: `tutorials`,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
