import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LogInComponent} from "./log-in/log-in.component";
import {ProfileManagerComponent} from "./profile-manager/profile-manager.component";


const routes: Routes = [
  {path: 'admin', pathMatch: 'full', component: LogInComponent},
  {path: 'admin/profileManager', pathMatch: 'full', component: ProfileManagerComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
