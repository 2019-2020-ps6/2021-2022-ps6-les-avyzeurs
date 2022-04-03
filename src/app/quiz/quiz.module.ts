import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz/quiz.component';
import {HttpClientModule} from "@angular/common/http";
import {QuizzesComponent} from "./quizzes/quizzes.component";
import {QuestionComponent} from "./quiz/question/question.component";
import {ComponentsModule} from "../components/components.module";


@NgModule({
  declarations: [
    QuizzesComponent,
    QuizComponent,
    QuestionComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    HttpClientModule,
    ComponentsModule
  ]
})
export class QuizModule { }
