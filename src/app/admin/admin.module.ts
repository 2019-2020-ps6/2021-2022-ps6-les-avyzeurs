import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {LogInComponent} from "./log-in/log-in.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProfileManagerComponent } from './profile-manager/profile-manager.component';
import {ComponentsModule} from "../components/components.module";



@NgModule({
  declarations: [LogInComponent, ProfileManagerComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule
  ]
})
export class AdminModule { }
