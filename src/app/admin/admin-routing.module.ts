import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LogInComponent} from "./log-in/log-in.component";
import {ProfileManagerComponent} from "./profile-manager/profile-manager.component";
import {EditProfileComponent} from "./edit-profile/edit-profile.component";
import {QuizComponent} from "./quiz/quiz.component";
import {QuizEditorComponent} from "./quiz/editor/quiz-editor.component";


const routes: Routes = [
  {path: 'admin', pathMatch: 'full', component: LogInComponent},
  {path: 'admin/profile', pathMatch: 'full', component: ProfileManagerComponent},
  {path: 'admin/quiz', pathMatch: 'full', component: QuizComponent},
  {path: 'admin/quiz/:id', pathMatch: 'full', component: QuizEditorComponent},
  {path: 'admin/quiz/new', pathMatch: 'full', component: QuizEditorComponent},
  {path: 'admin/profile/profile/:id', pathMatch: 'full', component: EditProfileComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
