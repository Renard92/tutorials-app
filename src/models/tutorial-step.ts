import { TutorialStepDto } from './dto/tutorial-step-dto';
import * as _ from 'lodash';
import { TutorialStepSection } from './tutorial-step-section';

export class TutorialStep {
  private _sections: TutorialStepSection[] = [];

  constructor(private _dto: TutorialStepDto = {}) {
    this.withSections(_.map(_dto.sections, (sectionDto) => new TutorialStepSection(sectionDto)));
  }

  get title(): string {
    return this._dto.title;
  }

  set title(value: string) {
    this._dto.title = value;
  }

  withTitle(value: string): TutorialStep {
    this.title = value;
    return this;
  }

  get description(): string {
    return this._dto.description;
  }

  set description(value: string) {
    this._dto.description = value;
  }

  withDescription(value: string): TutorialStep {
    this.description = value;
    return this;
  }

  get imageSrc(): string {
    return this._dto.imageSrc;
  }

  set imageSrc(value: string) {
    this._dto.imageSrc = value;
  }

  withImageSrc(value: string): TutorialStep {
    this.imageSrc = value;
    return this;
  }

  get videoSrc(): string {
    return this._dto.videoSrc;
  }

  set videoSrc(value: string) {
    this._dto.videoSrc = value;
  }

  withVideoSrc(value: string): TutorialStep {
    this.videoSrc = value;
    return this;
  }

  get gifSrc(): string {
    return this._dto.gifSrc;
  }

  set gifSrc(value: string) {
    this._dto.gifSrc = value;
  }

  withGifSrc(value: string): TutorialStep {
    this.gifSrc = value;
    return this;
  }

  get sections(): TutorialStepSection[] {
    return this._sections;
  }

  set sections(value: TutorialStepSection[]) {
    this._sections = value;
  }

  get readMoreUrl(): string {
    return this._dto.readMoreUrl;
  }

  set readMoreUrl(value: string) {
    this._dto.readMoreUrl = value;
  }

  withReadMoreUrl(value: string): TutorialStep {
    this.readMoreUrl = value;
    return this;
  }

  withSections(value: TutorialStepSection[] = []): TutorialStep {
    this.sections = value;
    return this;
  }
}
