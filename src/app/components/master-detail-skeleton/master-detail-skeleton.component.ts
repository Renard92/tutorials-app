import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-master-detail-skeleton',
  templateUrl: './master-detail-skeleton.component.html',
  styleUrls: ['./master-detail-skeleton.component.scss']
})
export class MasterDetailSkeletonComponent implements OnInit {
  @Input() withPreview = false;

  constructor() { }

  ngOnInit() {
  }

}
