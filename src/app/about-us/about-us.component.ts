import { Component, OnInit } from '@angular/core';
import { Program } from '../our-program';
import { PROGRAMS } from '../our-program-details';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  programs = PROGRAMS;
  selectedProgram: Program;

  constructor() { }

  ngOnInit() {
  }

  onSelect(program: Program): void {
    this.selectedProgram = program;
  }
}

