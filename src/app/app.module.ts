import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {appRoutingModule} from './app.routing';

import {AppComponent} from './app.component';
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from './header/header.component';
import {LogoComponent} from './micro/logo/logo.component';
import {IndexComponent} from './index/index.component';
import { AdminComponent } from './admin/admin.component';
import { QuizzesComponent } from './admin/quizzes/quizzes.component';
import { CreateComponent } from './admin/quizzes/create/create.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent, LogoComponent, IndexComponent, IndexComponent, AdminComponent, QuizzesComponent, CreateComponent],
  imports: [BrowserModule, appRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
