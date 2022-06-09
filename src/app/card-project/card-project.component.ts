import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../projects/interface';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss'],
  animations: [
    trigger('scale', [
      transition('void => *', [
        style({opacity: 0.2, transform: `scale(0.001)`}),
        animate('0.2s 100ms ease-in-out', style({
          opacity: 1,
          transform: `scale(1)`
        }))
      ])
    ])
  ]

})
export class CardProjectComponent implements OnInit {
  @Input() project: Project;

  constructor() {
  }

  ngOnInit(): void {
  }

}
