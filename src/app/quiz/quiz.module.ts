import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {QuizRoutingModule} from './quiz-routing.module';
import {QuizComponent} from './quiz/quiz.component';
import {HttpClientModule} from "@angular/common/http";
import {QuizzesComponent} from "./quizzes/quizzes.component";
import {QuestionComponent} from "./quiz/question/question.component";
import {ComponentsModule} from "../components/components.module";
import {ResultComponent} from './quiz/result/result.component';
import {ProfileModule} from "../profile/profile.module";


@NgModule({
  declarations: [
    QuizzesComponent,
    QuizComponent,
    QuestionComponent,
    ResultComponent
  ],
    imports: [
        CommonModule,
        QuizRoutingModule,
        HttpClientModule,
        ComponentsModule,
        ProfileModule
    ]
})
export class QuizModule { }
