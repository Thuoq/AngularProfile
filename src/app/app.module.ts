import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {PersonalInfoComponent} from './personal-info/personal-info.component';
import {ResumeComponent} from './resume/resume.component';
import {ProjectsComponent} from './projects/projects.component';
import {FooterComponent} from './footer/footer.component';
import {CardProjectComponent} from './card-project/card-project.component';
import {CardProjectListComponent} from './card-project-list/card-project-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PersonalInfoComponent,
    ResumeComponent,
    ProjectsComponent,
    FooterComponent,
    CardProjectComponent,
    CardProjectListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
