import { TutorialStepDto } from './tutorial-step-dto';

export interface TutorialDto {
  id?: string;
  completed?: boolean;
  title?: string;
  steps?: TutorialStepDto[];
}
