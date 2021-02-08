import { Component, OnInit } from '@angular/core';

import { AdService } from '../ad.service';
import { AdItem } from '../ad-item';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  ads: AdItem[];


  ngOnInit() {
    this.ads = this.adService.getAds();
  }

  jobs: any[];
  selectedJobCountRadioButton: string = 'All';
  constructor(private adService: AdService) {
    
      this.jobs = [
        {
          code: 'Jobcd101',  job_type: 'full_time',
          name: 'Teacher', description:'Need Full Time Teacher.Should have 3 years of minimum experience'
        },
        {
          code: 'Jobcd102', job_type: 'part_time',
          name: 'Driver', description: 'Need Part time Driver.Should have 3 years of minimum experience'
        },
        {
          code: 'Jobcd103', job_type: 'full_time',
          name: 'Baby Sitter', description: 'Should have 3 years of minimum experience'
        },
        {
          code: 'Jobcd104', job_type: 'part_time',
          name: 'Teacher', description: 'Should have 3 years of minimum experience'
        },
        {
          code: 'Jobcd105', job_type: 'full_time',
          name: 'PreK Teacher', description: 'Should have 3 years of minimum experience'
        },
        {
          code: 'Jobcd106', job_type: 'part_time',
          name: 'Baby Sitter', description: 'Should have 3 years of minimum experience'
        }
      ];
    }


    getTotalJobsCount(): number {
      return this.jobs.length;
    }

    getFullTimeJobsCount(): number {
      return this.jobs.filter(e => e.job_type === 'full_time').length;
    }

    getPartTimeJobsCount(): number {
      return this.jobs.filter(e => e.job_type === 'part_time').length;
    }
  
  onJobCountRadioButtonChange(selectedRadioButtonValue: string): void {
    this.selectedJobCountRadioButton = selectedRadioButtonValue;
  }
}
