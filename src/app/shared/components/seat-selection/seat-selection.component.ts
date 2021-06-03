import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';

@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.scss'],
})
export class SeatSelectionComponent implements OnInit {
  businessClassSeatType: '4';
  col1FirstRowtNum = 1;
  col2FirstRowtNum = 7;
  col3FirstRowtNum = 35;

  col1Rows = 6;
  col1RowSeatsNum = 6;
  col1RowArr = new Array(this.col1Rows).fill('');
  col1RowSeatArr = new Array(this.col1RowSeatsNum).fill('');

  col2Rows = 28;
  col2RowSeatsNum = 6;
  col2RowArr = new Array(this.col2Rows).fill('');
  col2RowSeatArr = new Array(this.col2RowSeatsNum).fill('');

  col3Rows = 9;
  col3RowSeatsNum = 6;
  col3RowArr = new Array(this.col3Rows).fill('');
  col3RowSeatArr = new Array(this.col3RowSeatsNum).fill('');

  selectedCheckBox: string;

  constructor() {}

  ngOnInit() {}

  public convertSeatRowNumToChar(num: number): string {
    return String.fromCharCode(65 + num);
  }

  public handleCheckBoxSelection(event: MatCheckboxChange): void {
    // console.log('MatCheckboxChange event', event);
    // console.log('checkBoxValue', checkBoxValue);
    this.selectedCheckBox = event.checked === true ? event.source.value : null;
    console.log('selectedCheckBox', this.selectedCheckBox);
  }

  public handleScrollToViewOnButtonClick(
    event: Event,
    elementId: string
  ): void {
    const elementToFocus = document.getElementById(elementId);
    // console.log(elementToFocus);
    if (elementToFocus !== null) {
      elementToFocus.scrollIntoView();
    }
  }
}
