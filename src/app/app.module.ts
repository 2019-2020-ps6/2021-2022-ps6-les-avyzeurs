import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {appRoutingModule} from './app.routing';

import {AppComponent} from './app.component';
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from './header/header.component';
import {LogoComponent} from './micro/logo/logo.component';
import {IndexComponent} from './index/index.component';
import {AdminModule} from "./admin/admin.module";
import {QuizzesModule} from "./quizzes/quizzes.module";

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent, LogoComponent, IndexComponent],
  imports: [BrowserModule, appRoutingModule, AdminModule, QuizzesModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
