import { Injectable } from '@angular/core';

import { JobAdComponent } from './job-ad.component';
import { AdItem } from './ad-item';

@Injectable()
export class AdService {
  getAds() {
    return [
     
      new AdItem(JobAdComponent,   {headline: 'Hiring for several positions',
                                        body: 'Submit your resume today!'}),

      new AdItem(JobAdComponent,   {headline: 'Openings in all departments',
        body: 'Apply today'
      }),
      new AdItem(JobAdComponent, {
        headline: 'Free VPK',
        body: 'Register Today!'
      }),

      new AdItem(JobAdComponent, {
        headline: 'Summer Course',
        body: 'Apply today'
      }),
    ];
  }
}
