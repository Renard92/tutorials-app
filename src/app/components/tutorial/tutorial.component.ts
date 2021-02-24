import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { Tutorial } from '../../../models/tutorial';
import { TutorialService } from '../../../services/tutorial.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.scss']
})
export class TutorialComponent implements OnInit, OnDestroy {
  @Input() tutorial: Tutorial;
  @Output() close = new EventEmitter<void>();
  @Output() gotIt = new EventEmitter<Tutorial>();

  private _destroyed$ = new Subject<void>();

  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.tutorial.selectStep(0);
    this.tryToComplete();
  }

  ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  tryToComplete(): void {
    if (this.tutorial.canComplete) {
      this.complete();
    }
  }

  complete(): void {
    this.tutorialService
      .complete(this.tutorial.id)
      .toPromise()
      .then(() => this.tutorial.completed = true);
  }

  onNextStep(): void {
    this.tutorial.nextStep();
    this.tryToComplete();
  }

  onGotIt(): void {
    this.gotIt.emit(this.tutorial);
  }

  onClose(): void {
    this.close.emit();
  }

  onReadMoreClick(url: string): void {
    window.open(url);
  }

  get progressStyle(): any {
    return {
      width: `${this.tutorial.percentage}%`
    };
  }

}
