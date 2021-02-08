import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-job-type',
  templateUrl: './job-type.component.html',
  styleUrls: ['./job-type.component.css']
})
export class JobTypeComponent {
  @Input()
  all: number;

  @Input()
  full_time: number;

  @Input()
  part_time: number;

  selectedRadioButtonValue: string = 'All';

 
  @Output()
  countRadioButtonSelectionChanged: EventEmitter<string> =
    new EventEmitter<string>();

  onRadioButtonSelectionChange() {
    this.countRadioButtonSelectionChanged
      .emit(this.selectedRadioButtonValue);
  }
}
