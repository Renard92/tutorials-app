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
          .withTitle('One <span class="text-info">Feature</span>, One <span class="text-primary">Tutorial</span>')
          .withDescription('First, a tutorial must explain a feature in a few words. It should be short and effective. No need to be exhaustive.')
          .withImageSrc('https://images.alphacoders.com/176/thumb-1920-176123.jpg')
          .withSections([
            new TutorialStepSection()
              .withTitle('An <span class="text-primary">UUID</span> to load them all')
              .withDescription('Lorem <span class="text-primary">ipsum</span> dolor sit amet, consectetur adipiscing elit. Aliquam quam arcu, ultricies sit.'),
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
          // .withImageSrc('https://images.alphacoders.com/176/thumb-1920-176123.jpg')
          .withGifSrc('https://giphy.com/embed/3o6ZtpxSZbQRRnwCKQ')
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
          .withVideoSrc('https://www.youtube-nocookie.com/embed/j3nEwX7R1q8?controls=0')
          .withSections([
            new TutorialStepSection()
              .withDescription(`Phasellus lectus metus, volutpat sit amet volutpat quis, auctor ut dui. Ut nec rutrum eros. Quisque congue, sem sed aliquam suscipit, sem arcu tristique nunc, eget hendrerit erat nisl ut ante.`)
          ]),
      ]),
    new Tutorial()
      .withId('how-variables-work')
      .withTitle(`How variables work`)
      .withCompleted(false)
      .withSteps([
        new TutorialStep()
          .withImageSrc('https://images3.alphacoders.com/581/thumb-1920-581876.png')
          .withTitle(`What is a <span class="text-primary">Variable</span>?`)
          .withDescription(`It is a <span class="text-info">Function</span> that takes different parameters to <span class="font-weight-bold">return a value</span>.`)
          .withSections([
            new TutorialStepSection()
              .withDescription(`Variables can be used in <span class="text-info">KPI's</span> or <span class="text-info">Datagrids</span> to customize your own resources.`)
              .withReadMoreUrl('https://fontawesome.com/icons?d=gallery&p=2&m=free'),
            new TutorialStepSection()
              .withTitle(`The different <span class="text-primary">Types</span> of Variables`),
            new TutorialStepSection()
              .withDescription(`An <span class="text-primary">Aggregation</span> Variable can aggregate a bunch of variables.`),
            new TutorialStepSection()
              .withDescription(`You can create an <span class="text-primary">Expression</span> Variable to lorem ipsum dolor sit.`),
            new TutorialStepSection()
              .withDescription(`A <span class="text-primary">Manual</span> Variable must be used in the case dolor sit amet.`),
            new TutorialStepSection()
              .withDescription(`An <span class="text-primary">Operational</span> Variable is based on a operational flow.`),
          ]),
        new TutorialStep()
          .withImageSrc('https://images2.alphacoders.com/261/thumb-1920-26102.jpg')
          .withTitle(`What is an <span class="text-primary">Aggregation</span> variable?`)
          .withDescription(`Sed libero est, imperdiet eu cursus id, fringilla id nisl. Maecenas egestas sem arcu, feugiat vulputate neque sollicitudin vel.`)
          .withSections([
            new TutorialStepSection()
              .withDescription(`Imperdiet eu cursus id, fringilla id nisl. Maecenas egestas sem arcu, feugiat vulputate neque sollicitudin vel.`),
            new TutorialStepSection()
              .withDescription(`Phasellus lectus metus, volutpat sit amet volutpat quis, auctor ut dui. Ut nec rutrum eros. Quisque congue, sem sed aliquam.`)
              .withReadMoreUrl('https://fontawesome.com/icons?d=gallery&p=2&m=free')
          ]),
        new TutorialStep()
          .withImageSrc('https://images.alphacoders.com/478/thumb-1920-478518.jpg')
          .withTitle(`What is an <span class="text-primary">Expression</span> variable?`)
          .withDescription(`Phasellus lectus metus, volutpat sit amet volutpat quis, auctor ut dui. Ut nec rutrum eros. Quisque congue, sem sed aliquam.`)
          .withSections([
            new TutorialStepSection()
              .withDescription(`Sed libero est, imperdiet eu cursus id, fringilla id nisl. Maecenas egestas sem arcu, feugiat vulputate neque sollicitudin vel.`)
              .withReadMoreUrl('https://fontawesome.com/icons?d=gallery&p=2&m=free')
          ]),
        new TutorialStep()
          .withImageSrc('https://images8.alphacoders.com/685/thumbbig-685055.jpg')
          .withTitle(`What is a <span class="text-primary">Manual</span> variable?`)
          .withDescription(`Lectus metus, volutpat sit amet volutpat quis, auctor ut dui. Ut nec rutrum eros. Quisque congue, sem sed aliquam.`)
          .withSections([
            new TutorialStepSection()
              .withDescription(`Imperdiet eu cursus id, fringilla id nisl. Maecenas egestas sem arcu, feugiat vulputate neque sollicitudin vel.`)
              .withReadMoreUrl('https://fontawesome.com/icons?d=gallery&p=2&m=free')
          ]),
        new TutorialStep()
          .withImageSrc('https://images2.alphacoders.com/438/thumb-1920-438689.jpg')
          .withTitle(`What is an <span class="text-primary">Operational</span> variable?`)
          .withDescription(`Volutpat sit amet volutpat quis, auctor ut dui. Ut nec rutrum eros. Quisque congue, sem sed aliquam`)
          .withSections([
            new TutorialStepSection()
              .withDescription(`Fringilla id nisl. Maecenas egestas sem arcu, feugiat vulputate neque sollicitudin.`)
              .withReadMoreUrl('https://fontawesome.com/icons?d=gallery&p=2&m=free')
          ]),
        new TutorialStep()
          .withImageSrc('https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80')
          .withTitle(`The <span class="text-primary">Format</span> of a variable`)
          .withSections([
            new TutorialStepSection()
              .withTitle('<span class="text-info">Types</span> of results')
              .withDescription(`You have the possibility to select a type of results: <span class="font-weight-bold">Percentage</span>, <span class="font-weight-bold">Amount</span> or <span class="font-weight-bold">Currency</span>.`)
              .withReadMoreUrl('https://fontawesome.com/icons?d=gallery&p=2&m=free'),
            new TutorialStepSection()
              .withTitle('You can choose a <span class="text-info">Custom Unit</span>')
              .withDescription(`It can be whatever you want: <span class="font-weight-bold">Apple(s)</span>, <span class="font-weight-bold">Pear(s)</span>, <span class="font-weight-bold">Peache(s)</span>, etc.`)
              .withReadMoreUrl('https://getbootstrap.com/docs/4.4/utilities/colors/#background-color'),
            new TutorialStepSection()
              .withTitle('Change the <span class="text-info">Unit Position</span>')
              .withDescription(`Of course, you can decide where the unit will be displayed: On the <span class="font-weight-bold">Left</span>, on the <span class="font-weight-bold">Right</span>, etc.`),
            new TutorialStepSection()
              .withTitle('You can customize the number of <span class="text-info">Decimals</span>')
              .withDescription(`Sometimes, it is important to show some decimals in the amounts like this: 0.<span class="font-weight-bold">000</span>`)
              .withReadMoreUrl('https://getbootstrap.com/docs/4.4/utilities/colors/#background-color'),
          ]),
        new TutorialStep()
          .withImageSrc('https://images.unsplash.com/photo-1562408590-e32931084e23?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')
          .withTitle(`You can <span class="text-primary">Simulate</span> a variable`)
          .withDescription(`Here, this is to test your variable. Just to know if everything is OK.`)
          .withSections([
            new TutorialStepSection()
              .withTitle('First, choose a <span class="text-info">Period</span>')
              .withDescription(`A lot of periods are available at this time: <span class="font-weight-bold">Month</span>, <span class="font-weight-bold">Quarter</span>, <span class="font-weight-bold">Year</span>, etc.`)
              .withReadMoreUrl('https://getbootstrap.com/docs/4.4/utilities/colors/#background-color'),
            new TutorialStepSection()
              .withTitle('And you can <span class="text-info">Shift</span> in the time')
              .withDescription(`For example, you can see the result of your variable at the <span class="font-weight-bold">End of Year</span> - 1 <span class="font-weight-bold">Week</span>.`)
              .withReadMoreUrl('https://fontawesome.com/icons?d=gallery&p=2&m=free')
          ])
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
