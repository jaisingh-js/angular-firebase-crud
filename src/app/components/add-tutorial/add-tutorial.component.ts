import { Component } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.scss']
})
export class AddTutorialComponent {
  tutorial = new Tutorial();
  submitted = false;

  constructor(private tutorialService: TutorialService) { }
  
  saveNote() {
    this.tutorialService.create(this.tutorial).then(() => {
      console.log('tutorial created successfully');
      this.submitted = true;
    })
  }

  newTutorial() {
    this.tutorial = new Tutorial();
    this.submitted = false;
  }
}
