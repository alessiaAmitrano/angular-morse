import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { InputTextPageComponent } from './input-text-page/input-text-page.component';
import { ResultPageComponent } from './result-page/result-page.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: '/input-text',
    component: InputTextPageComponent
  },
  {
    path: 'results',
    component: ResultPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
