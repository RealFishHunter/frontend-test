import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecondComponent } from './second-screen/second.component';
import { FirstScreenComponent } from './first-screen/first-screen.component';

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts', component: FirstScreenComponent },
  { path: 'query', component: SecondComponent },
  { path: '**', component: FirstScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
