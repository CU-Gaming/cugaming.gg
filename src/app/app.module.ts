import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from 'src/material.module';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { TeamsComponent } from './components/teams/teams.component';
import { HomeComponent } from './components/home/home.component';
import { RecruitmentComponent } from './components/recruitment/recruitment.component';
import { IntramuralsComponent } from './components/intramurals/intramurals.component';
import { LeadershipComponent } from './components/leadership/leadership.component';
import { InclusionComponent } from './components/inclusion/inclusion.component';
import { SocialsComponent } from './components/socials/socials.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    RecruitmentComponent,
    IntramuralsComponent,
    LeadershipComponent,
    InclusionComponent,
    SocialsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'teams', component: TeamsComponent },
      { path: 'recruitment', component: RecruitmentComponent },
      { path: 'intramurals', component: IntramuralsComponent },
      { path: 'leadership', component: LeadershipComponent },
      { path: 'inclusion', component: InclusionComponent },
      { path: 'socials', component: SocialsComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
