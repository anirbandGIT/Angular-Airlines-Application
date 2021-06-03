import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { FlightService } from 'src/app/core/services/flight/flight.service';
import { pieChartOptions } from '../../../shared/helpers/pie-chart-options';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  public pieChart = new Chart(pieChartOptions);
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
