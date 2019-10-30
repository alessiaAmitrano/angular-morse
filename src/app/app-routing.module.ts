import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/containers/landing-page/landing-page.component';
import { InputTextPageComponent } from './components/containers/input-text-page/input-text-page.component';
import { ResultPageComponent } from './components/containers/result-page/result-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    data: { page: 'landing' }
  },
  {
    path: 'input-text',
    component: InputTextPageComponent,
    data: { page: 'input' }
  },
  {
    path: 'results',
    component: ResultPageComponent,
    data: { page: 'result' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
