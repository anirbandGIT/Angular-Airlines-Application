import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerSelectionDialogComponent } from './passenger-selection-dialog.component';

describe('PassengerSelectionDialogComponent', () => {
  let component: PassengerSelectionDialogComponent;
  let fixture: ComponentFixture<PassengerSelectionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengerSelectionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerSelectionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
