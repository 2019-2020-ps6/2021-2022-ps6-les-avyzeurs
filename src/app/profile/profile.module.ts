import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    ProfileComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    HttpClientModule
  ]
})
export class ProfileModule { }
