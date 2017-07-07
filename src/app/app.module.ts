import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { AssessmentComponent } from './assessment/assessment.component';
import { CareersComponent } from './careers/careers.component';
import { ServiceProvidersComponent } from './service-providers/service-providers.component';
import { CreateAnAccountComponent } from './create-an-account/create-an-account.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    FooterComponent,
    AssessmentComponent,
    
    CareersComponent,
    ServiceProvidersComponent,
    CreateAnAccountComponent,
    TermsAndConditionsComponent,
    PrivacyPolicyComponent,

  ],
  imports: [
    BrowserModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
