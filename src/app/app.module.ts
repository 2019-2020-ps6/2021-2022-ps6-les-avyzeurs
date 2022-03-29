import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {appRoutingModule} from './app.routing';

import {AppComponent} from './app.component';
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from './header/header.component';
import {LogoComponent} from './micro/logo/logo.component';
import {IndexComponent} from './index/index.component';
import {AdminQuizzesComponent} from './admin/quizzes/admin-quizzes.component';
import {AdminQuizzesCreateComponent} from './admin/quizzes/create/admin-quizzes-create.component';
import {AdminIndexComponent} from "./admin/index/admin-index.component";
import {AdminModule} from "./admin/admin.module";

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent, LogoComponent, IndexComponent, AdminIndexComponent, AdminQuizzesComponent, AdminQuizzesCreateComponent],
  imports: [BrowserModule, appRoutingModule, AdminModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
