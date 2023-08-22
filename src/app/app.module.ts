import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { StaffComponent } from './staff/staff.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { CampusComponent } from './campus/campus.component';
import { OffcampusComponent } from './offcampus/offcampus.component';
import { HealthyComponent } from './healthy/healthy.component';
import { SubstanceComponent } from './substance/substance.component';
import { ChaplaincyComponent } from './chaplaincy/chaplaincy.component';
import { CanteenComponent } from './canteen/canteen.component';
import { SportsComponent } from './sports/sports.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    StaffComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    CampusComponent,
    OffcampusComponent,
    HealthyComponent,
    SubstanceComponent,
    ChaplaincyComponent,
    CanteenComponent,
    SportsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
