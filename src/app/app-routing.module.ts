import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StaffComponent } from './staff/staff.component';
import { AboutComponent } from './about/about.component';
import { CanteenComponent } from './canteen/canteen.component';
import { SportsComponent } from './sports/sports.component';
import { SubstanceComponent } from './substance/substance.component';
import { HealthyComponent } from './healthy/healthy.component';
import { ChaplaincyComponent } from './chaplaincy/chaplaincy.component';
import { CampusComponent } from './campus/campus.component';
import { OffcampusComponent } from './offcampus/offcampus.component';

const routes: Routes = [

 
  { path:'home', component:HomeComponent},
  { path:'staff', component:StaffComponent},
  { path:'canteen', component:CanteenComponent},
  { path:'sports', component:SportsComponent},
  { path:'substance', component:SubstanceComponent},
  { path:'healthy', component:HealthyComponent},
  { path:'chaplaincy', component:ChaplaincyComponent},
  { path:'campus', component:CampusComponent},
  { path:'offcampus', component:OffcampusComponent},
  { path:'about', component:AboutComponent},
  {
    path:'**',redirectTo:'home', pathMatch: 'prefix'
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
