import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CareerComponent } from './career/career.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobTypeComponent } from './career/job-type/job-type.component';
import { JobTypePipe } from './career/job-type/job-type.pipe';


import { JobAdComponent } from './job-ad.component';
import { AdBannerComponent } from './ad-banner.component';
import { AdDirective } from './ad.directive';
import { AdService } from './ad.service';


@NgModule({                                   
  declarations: [
    AppComponent,
    AboutUsComponent,
    CareerComponent,
    ContactUsComponent,
    HomepageComponent,
    JobTypeComponent,
    JobTypePipe,

    AdBannerComponent,
    JobAdComponent,
    AdDirective
  ],
  entryComponents: [JobAdComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
