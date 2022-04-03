import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuizzesListComponent} from "./quizzes-list/quizzes-list.component";
import {QuizzesPlayComponent} from "./quizzes-play/quizzes-play.component";

const routes: Routes = [
  {path: 'quizzes', pathMatch: 'full', component: QuizzesListComponent},
  {path: 'quiz/:id', pathMatch: 'full', component: QuizzesPlayComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizzesRoutingModule {
}
