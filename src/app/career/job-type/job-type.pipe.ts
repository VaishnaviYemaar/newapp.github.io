import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'JobType'
})
export class JobTypePipe implements PipeTransform {
  transform(value: string, job_type: string): string {
    if (job_type.toLowerCase() == "full_time")
      return "FullTime" + value;
    else
      return "PartTime." + value;
  }
}
