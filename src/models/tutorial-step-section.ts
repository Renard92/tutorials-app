import { TutorialStepSectionDto } from './dto/tutorial-step-section-dto';

export class TutorialStepSection {
  constructor(private _dto: TutorialStepSectionDto = {}) {
  }

  get title(): string {
    return this._dto.title;
  }

  set title(value: string) {
    this._dto.title = value;
  }

  withTitle(value: string): TutorialStepSection {
    this.title = value;
    return this;
  }

  get description(): string {
    return this._dto.description;
  }

  set description(value: string) {
    this._dto.description = value;
  }

  withDescription(value: string): TutorialStepSection {
    this.description = value;
    return this;
  }

  get readMoreUrl(): string {
    return this._dto.readMoreUrl;
  }

  set readMoreUrl(value: string) {
    this._dto.readMoreUrl = value;
  }

  withReadMoreUrl(value: string): TutorialStepSection {
    this.readMoreUrl = value;
    return this;
  }
}
