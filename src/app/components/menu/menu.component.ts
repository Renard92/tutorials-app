import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  selectedItem = 'Donec gravida elit eget';
  items: string[] = [
    'Donec gravida elit eget',
    'Integer ut quam porta',
    'Mauris sed risus',
    'Sed vel dui vitae',
    'Nam a elit vitae',
    'Dolor lobortis efficitur',
  ];

  constructor() { }

  ngOnInit() {
  }

}
