import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Project} from './interface';
import {ProjectsData} from './projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})

export class ProjectsComponent implements OnInit, OnChanges {
  projects: Project[] = ProjectsData;
  tagsUnique = this.projects.reduce((acc, next) => {
    next.tags.forEach((el) => {
      if (!acc.has(el)) {
        acc.add(el);
      }
    });
    return acc;
  }, new Set<string>());
  currentTagChoose = '';
  currentProjects: Project[] = [...this.projects];

  constructor() {
  }

  handleChooseTag(tag: string): Project[] {
    this.currentTagChoose = tag;
    if (tag) {
      this.currentProjects = this.projects.filter((project) => project.tags.includes(tag));
      return this.currentProjects;
    }
    this.currentProjects = this.projects;
    return this.projects;
  }

  ngOnInit(): void {
    console.log('Running');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

}
