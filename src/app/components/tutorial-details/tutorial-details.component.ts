import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.scss']
})
export class TutorialDetailsComponent {
  @Input() tutorial?: Tutorial;
  @Output() refreshList = new EventEmitter<any>();
  currentTutorial: Tutorial = {
    title: '',
    description: '',
    published: false
  };

  constructor(private tutorialService: TutorialService) {}


  ngOnChanges() {
    this.currentTutorial = {...this.tutorial};
  }

  updatePublished(status: boolean) {
    if (this.currentTutorial.id) {
      this.tutorialService.update(this.currentTutorial.id, { published: status })
        .then(
          () => {
            this.currentTutorial.published = status
          }
        );
    }
  }

  deleteTutorial() {
    if (this.currentTutorial.id) {
      this.tutorialService.delete(this.currentTutorial.id);
      this.refreshList.emit();
    }
  }

  updateTutorial() {
    const data = {
      title: this.currentTutorial.title,
      description: this.currentTutorial.description
    };

    if (this.currentTutorial.id) {
      this.tutorialService.update(this.currentTutorial.id, data);
    }
  }
}
