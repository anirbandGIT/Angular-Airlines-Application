import { Component, Inject, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PassengerService } from 'src/app/core/services/passenger/passenger.service';

@Component({
  selector: 'app-passenger-selection-dialog',
  templateUrl: './passenger-selection-dialog.component.html',
  styleUrls: ['./passenger-selection-dialog.component.scss'],
})
export class PassengerSelectionDialogComponent implements OnInit {
  public pssngrTypeChkboxes = [
    {
      name: 'PssngrTypePregnantOrWithInfant',
      label: 'Pregnant/ Travelling w/ Infant',
    },
    {
      name: 'PssngrTypeYoungTraveller',
      label: 'Young Traveller',
    },
  ];
  public checkedItems = new Map();
  public passengers: Array<any>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private passengerService: PassengerService
  ) {}

  ngOnInit() {
    // initialise checkboxes
    for (const checkbox of this.pssngrTypeChkboxes) {
      this.checkedItems.set(checkbox.name, false);
    }
    console.log(this.data);
    this.getAllPassengersData();
  }

  public getAllPassengersData(): void {
    this.passengerService.getAllPassengers().subscribe(
      (response) => {
        console.log(response);
        this.passengers = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public handleCheckboxChange($event: MatCheckboxChange): void {
    console.log($event); // MatCheckboxChange type event

    const itemName = $event.source.name; // key
    const itemIsChecked = $event.checked; // value
    this.checkedItems.set(itemName, itemIsChecked);
    // console.log('AFTER CHECKBOX CLICK', this.checkedItems);
  }
}
