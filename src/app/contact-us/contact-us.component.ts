import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdService } from '../ad.service';
import { AdItem } from '../ad-item';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  ads: AdItem[];

  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'Thankyou. We will reach you Shortly...';
  }
 
  constructor(private adService: AdService) { }
    title = 'Angular 4 Project!';
  todaydate: any;
  componentproperty: any;
  emailid: any;
   formdata: any;
  ngOnInit() {
    this.ads = this.adService.getAds();
      this.formdata = new FormGroup({
         emailid: new FormControl("", Validators.compose([
            Validators.required,
            Validators.pattern("[^ @]*@[^ @]*")
         ])),
       
        contactname: new FormControl("", Validators.compose([
          Validators.required
        ]))
      });
  }
  onClickSubmit(data: any) { this.emailid = data.emailid; }

}
