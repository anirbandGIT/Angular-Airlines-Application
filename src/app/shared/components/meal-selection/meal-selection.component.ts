import { Component, OnInit } from '@angular/core';
import { PassengerMealService } from 'src/app/core/services/passenger-meal/passenger-meal.service';

@Component({
  selector: 'app-meal-selection',
  templateUrl: './meal-selection.component.html',
  styleUrls: ['./meal-selection.component.scss'],
})
export class MealSelectionComponent implements OnInit {
  public passengerMeals: Array<any>;
  public mealsSelectionAvailable = false;

  constructor(private passengerMealService: PassengerMealService) {}

  ngOnInit() {
    this.getAllMealForFlight();
  }

  private getAllMealForFlight(): void {
    this.passengerMealService.getMealById('1A - 1211').subscribe((response) => {
      console.log(response);
      this.passengerMeals = response[0].meals;
    });
  }
}
