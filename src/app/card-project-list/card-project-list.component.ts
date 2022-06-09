import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../projects/interface';

@Component({
  selector: 'app-card-project-list',
  templateUrl: './card-project-list.component.html',
  styleUrls: ['./card-project-list.component.scss'],
})
export class CardProjectListComponent implements OnInit {
  @Input() projects: Project[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
