import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from "@angular/common/http";
import { HistoryComponent } from './history/history.component';
import { QuizComponent } from './history/quiz/quiz.component';


@NgModule({
    declarations: [
        ProfileComponent,
        HeaderComponent,
        HistoryComponent,
        QuizComponent
    ],
    exports: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        ProfileRoutingModule,
        HttpClientModule
    ]
})
export class ProfileModule { }
