import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {appRoutingModule} from './app.routing';

import {AppComponent} from './app.component';
import {ComponentsModule} from "./components/components.module";
import {IndexComponent} from './index/index.component';
import {HttpClientModule} from "@angular/common/http";
import {QuizModule} from "./quiz/quiz.module";
import {ProfileModule} from "./profile/profile.module";
import {AdminModule} from "./admin/admin.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [AppComponent, IndexComponent],
    imports: [BrowserModule, appRoutingModule, ComponentsModule, HttpClientModule, QuizModule, ProfileModule, AdminModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
