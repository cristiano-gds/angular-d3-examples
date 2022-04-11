import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrendingCirclesComponent } from './charts/trending-circles/trending-circles.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'trending-circles', component: TrendingCirclesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
