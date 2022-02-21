import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FooterComponent} from "./footer/footer.component";
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './micro/logo/logo.component';
import { CopyrightComponent } from './footer/copyright/copyright.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    CopyrightComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
