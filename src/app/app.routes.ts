import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AcentralComponent } from './pages/acentral/acentral.component';

export const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch:'full'},
  {path: 'sobre', component: AcentralComponent, pathMatch:'full'}
];
