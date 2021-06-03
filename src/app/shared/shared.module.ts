// modules
import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// @angular/flex-layout
import { FlexLayoutModule } from '@angular/flex-layout';
// components
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CommonDataCardComponent } from './components/common-data-card/common-data-card.component';
// services
import { SnackbarService } from './services/snackbar/snackbar.service';
import { CommonDataService } from './services/common-data/common-data.service';
import { CommonModule } from '@angular/common';
import { CommonDialogComponent } from './components/common-dialog/common-dialog.component';
import { SeatSelectionComponent } from './components/seat-selection/seat-selection.component';
import { ExtraLuggageSelectionComponent } from './components/extra-luggage-selection/extra-luggage-selection.component';
import { MealSelectionComponent } from './components/meal-selection/meal-selection.component';
import { CommonItemCardComponent } from './components/common-item-card/common-item-card.component';

const SharedComponentDeclaration = [
  CommonDataCardComponent,
  SeatSelectionComponent,
  ExtraLuggageSelectionComponent,
  MealSelectionComponent,
  CommonItemCardComponent,
];

@NgModule({
  declarations: [
    PageNotFoundComponent,
    ...SharedComponentDeclaration,
    CommonDialogComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    ...SharedComponentDeclaration,
  ],
  providers: [SnackbarService, CommonDataService],
})
export class SharedModule {}
