import { Component } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.scss']
})
export class TutorialsListComponent {
  tutorials: Tutorial[] = [];
  currentTutorial?: Tutorial;
  currentIndex?: number;

  constructor(private tutorialService: TutorialService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.tutorialService.getAll().valueChanges({ idField: 'id' }).subscribe(
      (data) => {
        this.tutorials = data;
      }
    );
  }

  setActiveTutorial(tutorial: Tutorial, index: number) {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  refreshList() {
    this.currentTutorial = undefined;
    this.currentIndex = -1;
    this.getData();
  }
}
