import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {LogInComponent} from "./log-in/log-in.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProfileManagerComponent } from './profile-manager/profile-manager.component';
import {ComponentsModule} from "../components/components.module";
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { HeaderComponent } from './header/header.component';
import {ProfileModule} from "../profile/profile.module";



@NgModule({
  declarations: [LogInComponent, ProfileManagerComponent, EditProfileComponent, HeaderComponent, EditProfileComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    ProfileModule
  ]
})
export class AdminModule { }
