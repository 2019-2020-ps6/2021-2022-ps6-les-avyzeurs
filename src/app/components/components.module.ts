import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogoComponent} from './logo/logo.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {RouterModule} from "@angular/router";
import {ProfileComponent} from './profile/profile.component';
import {QuizComponent} from './quiz/quiz.component';


@NgModule({
  declarations: [
    LogoComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    QuizComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ProfileComponent,
    QuizComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule {
}
