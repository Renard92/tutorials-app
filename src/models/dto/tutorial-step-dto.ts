import {TutorialStepSectionDto} from './tutorial-step-section-dto';

export interface TutorialStepDto {
  imageSrc?: string;
  title?: string;
  description?: string;
  readMoreUrl?: string;
  sections?: TutorialStepSectionDto[];
}
