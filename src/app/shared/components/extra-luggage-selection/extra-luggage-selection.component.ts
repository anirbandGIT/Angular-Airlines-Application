import { Component, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material';

@Component({
  selector: 'app-extra-luggage-selection',
  templateUrl: './extra-luggage-selection.component.html',
  styleUrls: ['./extra-luggage-selection.component.scss'],
})
export class ExtraLuggageSelectionComponent implements OnInit {
  public extraLuggageSelection: number;
  constructor() {}

  ngOnInit() {}

  public formatLabel(value: number): string {
    return Math.round(value) + 'Kg';
  }

  public handleExtLuggageSliderChange(event: MatSliderChange): void {
    console.log('MatSliderChange event', event);
    this.extraLuggageSelection = event.value;
  }
}
