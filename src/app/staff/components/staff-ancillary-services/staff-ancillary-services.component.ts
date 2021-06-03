import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { promise } from 'protractor';
import { FlightService } from 'src/app/core/services/flight/flight.service';
import { PassengerSelectionDialogComponent } from '../passenger-selection-dialog/passenger-selection-dialog.component';

@Component({
  selector: 'app-staff-ancillary-services',
  templateUrl: './staff-ancillary-services.component.html',
  styleUrls: ['./staff-ancillary-services.component.scss'],
})
export class StaffAncillaryServicesComponent implements OnInit {
  private promiseToGetFlightId: any;

  public flightId: string;
  public passengerId: string;
  public serviceType: string;
  public selectedFlightInfo: any;

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private flightService: FlightService
  ) {}

  ngOnInit() {
    this.handleRouteParameters();
    this.getFlightData();
  }

  private handleRouteParameters(): void {
    // get params
    this.route.params.subscribe((params) => {
      console.log('params', params);
      if (params && params.serviceType) {
        this.serviceType = params.serviceType.toUpperCase();
      }
    });
    // get queryparams
    this.route.queryParamMap.subscribe((queryparams) => {
      console.log('queryparams', queryparams);

      this.promiseToGetFlightId = new Promise((resolve, reject) => {
        if (queryparams.has('flight') && queryparams.get('flight') !== '') {
          this.flightId = queryparams.get('flight');
          resolve({ flightId: this.flightId });
        } else {
          reject(new Error('There is something wrong w/ the queryparams'));
          // handle error or throw it
        }
      });

      if (queryparams.has('passenger') && queryparams.get('passenger') !== '') {
        this.passengerId = queryparams.get('passenger');
      } else {
        // this.openDialog();
      }
    });
  }

  private getFlightData(): void {
    this.promiseToGetFlightId
      .then((data) => {
        console.log('resolved data', data);
        this.flightService
          .getFlightById(data.flightId)
          .subscribe((response) => {
            console.log(response);
            this.selectedFlightInfo = response[0];
          });
      })
      .catch((error: Error) => console.error(error));
  }

  public openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = { flight: this.flightId };

    this.dialog.open(PassengerSelectionDialogComponent, dialogConfig);
  }
}
