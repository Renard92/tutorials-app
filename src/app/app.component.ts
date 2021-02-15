import { Component, OnInit } from '@angular/core';
import { Tutorial } from '../models/tutorial';
import { TutorialService } from '../services/tutorial.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public sideBarExpanded = false;
  public menuExpanded = true;
  public tutorialsUnlocked = false;
  public tutorialsDropdownExpanded = false;
  public tutorial$: Observable<Tutorial>;
  public tutorials$: Observable<Tutorial[]>;

  constructor(private tutorialService: TutorialService) {
  }

  ngOnInit(): void {
    this.tutorials$ = this.tutorialService.list();
  }

  onToggleMenu(): void {
    this.menuExpanded = !this.menuExpanded;
  }

  onToggleSideBar(): void {
    this.sideBarExpanded = !this.sideBarExpanded;
  }

  onGotIt(): void {
    this.tutorialsUnlocked = true;
    this.sideBarExpanded = false;
  }

  onToggleTutorials(): void {
    this.tutorialsDropdownExpanded = !this.tutorialsDropdownExpanded;
  }

  onTutorialClick(tutorial: Tutorial): void {
    this.tutorial$ = of(tutorial);
    this.sideBarExpanded = true;
    this.tutorialsDropdownExpanded = false;
  }

  onHowItWorksClick(): void {
    if (this.sideBarExpanded) {
      this.sideBarExpanded = false;
    } else {
      this.tutorial$ = this.tutorialService.find('how-tutorials-work');
      this.sideBarExpanded = true;
    }
  }

}
