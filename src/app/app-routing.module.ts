import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlchartComponent } from './controlchart/controlchart.component';
import { MachineoeeComponent } from './machineoee/machineoee.component';
import { OsrComponent } from './osr/osr.component';
import { ProdtrackComponent } from './prodtrack/prodtrack.component';

const routes: Routes = [
  {path:'controlchart', component:ControlchartComponent},
  {path:'machineoee', component:MachineoeeComponent},
  {path:'prodtrack', component:ProdtrackComponent},
  {path:'osr', component:OsrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
