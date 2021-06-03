import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/core/services/flight/flight.service';

@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.scss'],
})
export class StaffDashboardComponent implements OnInit {
  public flights = [];

  constructor(private flightService: FlightService) {}

  ngOnInit() {
    this.getAllFlightsData();
  }

  getAllFlightsData(): void {
    this.flightService.getAllFlights().subscribe((response) => {
      console.log(response);
      this.flights = response;
    });
  }
}
