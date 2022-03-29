import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminNavigationComponent} from './navigation/admin-navigation.component';
import {AdminProfilesComponent} from './profiles/admin-profiles.component';
import {AdminQuizzesComponent} from "./quizzes/admin-quizzes.component";
import {AdminQuizzesCreateComponent} from "./quizzes/create/admin-quizzes-create.component";

@NgModule({
  imports: [CommonModule, AdminRoutingModule],
  declarations: [
    AdminNavigationComponent,
    AdminProfilesComponent,
    AdminQuizzesComponent,
    AdminQuizzesCreateComponent
  ],
  exports: [
    AdminNavigationComponent
  ]
})
export class AdminModule {
}
