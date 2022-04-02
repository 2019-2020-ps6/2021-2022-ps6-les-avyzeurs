import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {QuizzesRoutingModule} from './quizzes-routing.module';
import {QuizzesListComponent} from './quizzes-list/quizzes-list.component';
import {HttpClientModule} from "@angular/common/http";
import {QuizzesQuizElementComponent} from "./quizzes-list/quiz-element/quizzes-quiz-element.component";
import { QuizzesPlayComponent } from './quizzes-play/quizzes-play.component';


@NgModule({
  declarations: [
    QuizzesListComponent, QuizzesQuizElementComponent, QuizzesPlayComponent
  ],
  imports: [
    CommonModule,
    QuizzesRoutingModule,
    HttpClientModule
  ]
})
export class QuizzesModule {
}
