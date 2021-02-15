import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tutorial } from '../models/tutorial';
import { TutorialStep } from '../models/tutorial-step';
import { TutorialStepSection } from '../models/tutorial-step-section';
import { delay } from 'rxjs/operators';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  private _list: Tutorial[] = [
    new Tutorial()
      .withId('how-tutorials-work')
      .withTitle(`How tutorials work`)
      .withCompleted(false)
      .withSteps([
        new TutorialStep()
          .withTitle('Based on the <span class="text-primary">Sidebar Panel</span>')
          .withDescription('Lorem ipsum. Phasellus lectus metus, volutpat sit amet volutpat quis, auctor ut dui.')
          .withImageSrc('https://images.alphacoders.com/985/thumb-1920-985803.png')
          .withSections([
            new TutorialStepSection()
              .withDescription('In quis lacus sit amet sem ultrices pharetra. Donec ac iaculis felis. Integer porttitor viverra lorem nec iaculis.')
          ]),
        new TutorialStep()
          .withTitle('An <span class="text-primary">UUID</span> to load them all')
          .withDescription('Lorem <span class="text-primary">ipsum</span> dolor sit amet, consectetur adipiscing elit. Aliquam quam arcu, ultricies sit.')
          .withImageSrc('https://images.alphacoders.com/176/thumb-1920-176123.jpg')
          .withSections([
            new TutorialStepSection()
              .withDescription(`Phasellus lectus metus, volutpat sit amet volutpat quis, auctor ut dui. Ut nec rutrum eros. Quisque congue, sem sed aliquam suscipit, sem arcu tristique nunc, eget hendrerit erat nisl ut ante.`)
          ]),
        new TutorialStep()
          .withTitle('Divided into few <span class="text-primary">steps</span>')
          .withDescription('Dolor sit amet, consectetur <span class="text-primary">adipiscing</span> elit. Aliquam quam arcu, ultricies sit.')
          .withImageSrc('https://images.alphacoders.com/250/thumb-1920-250481.jpg')
          .withSections([
            new TutorialStepSection()
              .withTitle('Nothing is impossible.')
              .withDescription('Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aeneenas egestas sem arcu, feugiat vulputate neque sollicitudin vel'),
          ]),
        new TutorialStep()
          .withTitle('An <span class="text-primary">image</span>, a <span class="text-primary">title</span> and a <span class="text-primary">description</span>')
          .withDescription('Amet, consectetur adipiscing elit. <span class="text-primary">Aliquam</span> quam arcu, ultricies sit.')
          .withImageSrc('https://images5.alphacoders.com/695/thumb-1920-695931.jpg')
          .withSections([
            new TutorialStepSection()
              .withTitle('And a section with a <span class="text-info">Read more</span> button')
              .withDescription('In quis lacus. With a <span class="text-primary">title</span> and a <span class="text-primary">description</span> too. Donec ac iaculis felis. Integer porttitor viverra lorem nec iaculis.')
              .withReadMoreUrl('https://getbootstrap.com/docs/5.0/components/buttons/#outline-buttons'),
            new TutorialStepSection()
              .withTitle('Everything is <span class="text-info">Localized</span>')
              .withDescription('In quis lacus. Donec ac iaculis felis. Integer porttitor viverra lorem nec iaculis.')
          ]),
        new TutorialStep()
          .withTitle('You can <span class="text-primary">highlight</span> everything you want')
          .withDescription('Lorem ipsum. Phasellus lectus metus, volutpat sit amet volutpat quis, auctor ut dui.')
          .withImageSrc('https://images5.alphacoders.com/735/thumb-1920-735561.jpg')
          .withSections([
            new TutorialStepSection()
              .withTitle('You can do it easily with <span class="text-info">Bootstrap</span>')
              .withDescription('Donec ac iaculis felis. Integer porttitor viverra lorem nec iaculis.')
              .withReadMoreUrl('https://getbootstrap.com/docs/5.0/utilities/colors/#colors'),
            new TutorialStepSection()
              .withTitle('Yes you <span class="text-success">can</span>!')
              .withDescription('Sed libero est, imperdiet eu cursus id, fringilla id nisl. Maecenas egestas sem arcu, feugiat vulputate neque sollicitudin vel')
          ]),
        new TutorialStep()
          .withTitle('Please, speak <span class="text-primary">Human</span>!')
          .withDescription('Sed libero est, imperdiet eu cursus id, fringilla id nisl. Maecenas egestas sem arcu, feugiat vulputate neque sollicitudin vel.')
          .withImageSrc('https://images7.alphacoders.com/678/thumb-1920-678780.jpg')
          .withSections([
            new TutorialStepSection()
              .withTitle('<span class="text-success">Do</span> this')
              .withDescription('In quis lacus sit amet sem ultrices pharetra. Donec ac iaculis felis. Integer porttitor viverra lorem nec iaculis.'),
            new TutorialStepSection()
              .withTitle(`<span class="text-danger">Don't</span> do this`)
              .withDescription('Nothing.')
          ]),
        new TutorialStep()
          .withTitle(`Was it that hard?`)
          .withDescription(`I don't think so.`)
          .withImageSrc('https://images5.alphacoders.com/436/thumb-1920-436400.jpg')
          .withSections([
            new TutorialStepSection()
              .withTitle(`What are we waiting for?`)
              .withDescription(`Nothing. Let's do it!`),
            new TutorialStepSection()
              .withTitle('This code is available on <span class="text-info">GitHub</span>')
              .withDescription(`Thanks for watching. Please, check out the description below and don't forget to subscribe. And, guys, see you next time!`)
              .withReadMoreUrl('https://www.youtube.com/watch?v=g3jCAyPai2Y')
          ]),
      ]),
    new Tutorial()
      .withId('how-datagrids-work')
      .withTitle(`How datagrids work`)
      .withCompleted(false)
      .withSteps([
        new TutorialStep()
          .withTitle('Ask <span class="text-primary">Eddy Malou</span>, he knows everything')
          .withDescription('Lorem <span class="text-primary">ipsum</span> dolor sit amet, consectetur adipiscing elit. Aliquam quam arcu, ultricies sit.')
          .withImageSrc('https://images.alphacoders.com/176/thumb-1920-176123.jpg')
          .withSections([
            new TutorialStepSection()
              .withDescription(`Phasellus lectus metus, volutpat sit amet volutpat quis, auctor ut dui. Ut nec rutrum eros. Quisque congue, sem sed aliquam suscipit, sem arcu tristique nunc, eget hendrerit erat nisl ut ante.`)
          ]),
      ]),
    new Tutorial()
      .withId('how-kpis-work')
      .withTitle(`How KPI's work`)
      .withCompleted(true)
      .withSteps([
        new TutorialStep()
          .withTitle('Ask <span class="text-primary">Eddy Malou</span>, he knows everything')
          .withDescription('Lorem <span class="text-primary">ipsum</span> dolor sit amet, consectetur adipiscing elit. Aliquam quam arcu, ultricies sit.')
          .withImageSrc('https://images8.alphacoders.com/869/thumb-1920-869819.jpg')
          .withSections([
            new TutorialStepSection()
              .withDescription(`Phasellus lectus metus, volutpat sit amet volutpat quis, auctor ut dui. Ut nec rutrum eros. Quisque congue, sem sed aliquam suscipit, sem arcu tristique nunc, eget hendrerit erat nisl ut ante.`)
          ]),
      ]),
    new Tutorial()
      .withId('how-flows-work')
      .withTitle(`How flows work`)
      .withCompleted(false)
      .withSteps([
        new TutorialStep()
          .withTitle('Ask <span class="text-primary">Eddy Malou</span>, he knows everything')
          .withDescription('Lorem <span class="text-primary">ipsum</span> dolor sit amet, consectetur adipiscing elit. Aliquam quam arcu, ultricies sit.')
          .withImageSrc('https://images8.alphacoders.com/869/thumb-1920-869819.jpg')
          .withSections([
            new TutorialStepSection()
              .withDescription(`Phasellus lectus metus, volutpat sit amet volutpat quis, auctor ut dui. Ut nec rutrum eros. Quisque congue, sem sed aliquam suscipit, sem arcu tristique nunc, eget hendrerit erat nisl ut ante.`)
          ]),
      ]),
    new Tutorial()
      .withId('how-situations-work')
      .withTitle(`How situations work`)
      .withCompleted(true)
      .withSteps([
        new TutorialStep()
          .withTitle('Ask <span class="text-primary">Eddy Malou</span>, he knows everything')
          .withDescription('Lorem <span class="text-primary">ipsum</span> dolor sit amet, consectetur adipiscing elit. Aliquam quam arcu, ultricies sit.')
          .withImageSrc('https://images8.alphacoders.com/869/thumb-1920-869819.jpg')
          .withSections([
            new TutorialStepSection()
              .withDescription(`Phasellus lectus metus, volutpat sit amet volutpat quis, auctor ut dui. Ut nec rutrum eros. Quisque congue, sem sed aliquam suscipit, sem arcu tristique nunc, eget hendrerit erat nisl ut ante.`)
          ]),
      ])
  ];

  constructor() { }

  find(id: string): Observable<Tutorial> {
    return of(_.find(this._list, (tutorial) => tutorial.id === id));
  }

  list(): Observable<Tutorial[]> {
    return of(this._list);
  }

  complete(id: string): Observable<boolean> {
    return of(true).pipe(delay(250));
  }
}
