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
        style({
          position: 'absolute',
          top: '0px',
          left: '0px',
          visibility: 'hidden',
          willChange: 'transform',
          opacity: 0,
          transitionDuration: '250ms',
          transitionTimingFunction: `cubic-bezier(0.4, 0, 0.2, 1)`,
          transitionProperty: `transform, opacity`,
          transform: `translate(0px, 0px) scale(0.11)`,
        }),
        animate('0.25s', style({
          position: 'absolute',
          top: '0px',
          left: '0px',
          visibility: 'visible',
          willChange: 'transform',
          opacity: 1,
          transitionTimingFunction: `cubic-bezier(0.4, 0, 0.2, 1)`,
          transitionProperty: `transform, opacity`,
          transform: `translate(0px, 0px) scale(1)`
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
