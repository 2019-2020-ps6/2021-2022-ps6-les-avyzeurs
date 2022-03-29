import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminNavigationComponent} from './navigation/admin-navigation.component';
import {AdminProfilesComponent} from './profiles/admin-profiles.component';

@NgModule({
  imports: [CommonModule, AdminRoutingModule],
  declarations: [
    AdminNavigationComponent,
    AdminProfilesComponent
  ],
  exports: [
    AdminNavigationComponent
  ]
})
export class AdminModule {
}
