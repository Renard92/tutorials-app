import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Output() selectItem = new EventEmitter<any>();

  items = [
    {
      route: 'tutorials',
      text: 'Tutorials',
      tutorialId: 'how-tutorials-work'
    },
    {
      route: 'variables',
      text: 'Variables',
      tutorialId: 'how-variables-work'
    },
    {
      route: 'kpis',
      text: 'KPIs',
      tutorialId: 'how-kpis-work'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  onSelectItem(item): void {
    this.selectItem.emit(item);
  }

}
