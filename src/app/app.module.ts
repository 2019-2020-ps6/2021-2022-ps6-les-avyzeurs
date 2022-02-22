import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {appRoutingModule} from './app.routing';

import {AppComponent} from './app.component';
import {FooterComponent} from "./footer/footer.component";
import {HeaderComponent} from './header/header.component';
import {LogoComponent} from './micro/logo/logo.component';
import {CopyrightComponent} from './footer/copyright/copyright.component';
import {HomeComponent} from './home/home.component';
import {HomeCreateComponent} from './home/create/home-create.component';
import {HomeProfilesComponent} from './home/profiles/home-profiles.component';
import {HomeProfilesProfileComponent} from "./home/profiles/profile/home-profiles-profile.component";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
    CopyrightComponent,
    HomeComponent,
    HomeProfilesProfileComponent,
    HomeCreateComponent,
    HomeProfilesComponent
  ],
  imports: [
    BrowserModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
