import { TutorialDto } from './dto/tutorial-dto';
import { TutorialStep } from './tutorial-step';
import * as _ from 'lodash';

export class Tutorial {
  private _steps: TutorialStep[] = [];
  private _stepIndex = 0;
  private _percentage = 0;
  private _currentStep: TutorialStep;

  constructor(private _dto: TutorialDto = {}) {
    this.withSteps(_.map(_dto.steps, (stepDto) => new TutorialStep(stepDto)));
  }

  get id(): string {
    return this._dto.id;
  }

  set id(value: string) {
    this._dto.id = value;
  }

  withId(value: string): Tutorial {
    this.id = value;
    return this;
  }

  get completed(): boolean {
    return this._dto.completed;
  }

  set completed(value: boolean) {
    this._dto.completed = value;
  }

  withCompleted(value: boolean): Tutorial {
    this.completed = value;
    return this;
  }

  get title(): string {
    return this._dto.title;
  }

  set title(value: string) {
    this._dto.title = value;
  }

  withTitle(value: string): Tutorial {
    this.title = value;
    return this;
  }

  get steps(): TutorialStep[] {
    return this._steps;
  }

  set steps(value: TutorialStep[]) {
    this._steps = value;
    this.selectStep(0);
  }

  withSteps(value: TutorialStep[] = []): Tutorial {
    this.steps = value;
    return this;
  }

  get stepIndex(): number {
    return this._stepIndex;
  }

  previousStep(): Tutorial {
    this.selectStep(this._stepIndex - 1);
    return this;
  }

  nextStep(): Tutorial {
    this.selectStep(this._stepIndex + 1);
    return this;
  }

  public selectStep(index: number): Tutorial {
    this._stepIndex = this._safeIndex(index);
    this._currentStep = this.steps[this._stepIndex];
    this._percentage = this.steps.length
      ? (100 / this.steps.length) * (this._stepIndex + 1)
      : 0;
    return this;
  }

  private _safeIndex(index: number = 0): number {
    const length = this.steps.length;
    return ((length + index) % length) || 0;
  }

  get currentStep(): TutorialStep {
    return this._currentStep;
  }

  get percentage(): number {
    return this._percentage;
  }

  get canPrevious(): boolean {
    return this._stepIndex > 0;
  }

  get canNext(): boolean {
    return this._stepIndex < this.steps.length - 1;
  }

  get canComplete(): boolean {
    return !this.completed && !this.canNext;
  }
}
