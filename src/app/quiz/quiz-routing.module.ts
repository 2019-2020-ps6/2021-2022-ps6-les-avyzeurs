import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuizzesComponent} from "./quizzes/quizzes.component";
import {QuizComponent} from "./quiz/quiz.component";

const routes: Routes = [
  {path: 'quizzes', pathMatch: 'full', component: QuizzesComponent},
  {path: 'quiz/:id', pathMatch: 'full', component: QuizComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
