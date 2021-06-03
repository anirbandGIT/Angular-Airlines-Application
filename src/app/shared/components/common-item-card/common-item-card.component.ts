import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-item-card',
  templateUrl: './common-item-card.component.html',
  styleUrls: ['./common-item-card.component.scss'],
})
export class CommonItemCardComponent implements OnInit {
  @Input() public cardType: string;
  @Input() public userType: string;

  @Input() public mealData: any;
  @Input() public shopItemData: any;

  constructor() {}

  ngOnInit() {}
}
