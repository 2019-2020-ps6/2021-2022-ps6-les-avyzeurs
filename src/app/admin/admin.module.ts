import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {LogInComponent} from "./log-in/log-in.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProfileManagerComponent} from './profile-manager/profile-manager.component';
import {ComponentsModule} from "../components/components.module";
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {HeaderComponent} from './header/header.component';
import {ProfileModule} from "../profile/profile.module";
import {QuizComponent} from './quiz/quiz.component';
import {AdminQuizComponent} from './components/quiz/quiz.component';
import {QuizEditorComponent} from './quiz/editor/quiz-editor.component';
import { QuestionComponent } from './quiz/editor/question/question.component';
import { AnswerComponent } from './quiz/editor/answer/answer.component';
import { LightProfileComponent } from './light-profile/light-profile.component'
import {HistoryComponentAdmin} from "./edit-profile/history/admin.history.component";
import {QuizComponentAdmin} from "./edit-profile/history/quiz/admin.quiz.component";


@NgModule({
  declarations: [LogInComponent, ProfileManagerComponent, EditProfileComponent, HeaderComponent, EditProfileComponent, QuizComponent, AdminQuizComponent, QuizEditorComponent, QuestionComponent, AnswerComponent, LightProfileComponent, HistoryComponentAdmin, QuizComponentAdmin],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    ProfileModule,

  ]
})
export class AdminModule {
}
