import {Component, OnInit} from '@angular/core';
import {TechUsedData} from './techUsed';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
})
export class PersonalInfoComponent implements OnInit {
  techUsed = TechUsedData;

  constructor() {
  }

  ngOnInit(): void {
  }

}
