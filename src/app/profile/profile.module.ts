import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import {ProfileComponent} from "./profile.component";


@NgModule({
  declarations: [
    ProfileComponent,
    ProfileHeaderComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
