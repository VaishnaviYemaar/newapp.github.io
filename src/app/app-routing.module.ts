import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';
import {CareerComponent} from './career/career.component';
import {ContactUsComponent} from './contact-us/contact-us.component'
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  
  { path: 'about-us', component: AboutUsComponent },
  { path: 'career', component: CareerComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '**', component: HomepageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
