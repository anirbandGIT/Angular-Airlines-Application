import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraLuggageSelectionComponent } from './extra-luggage-selection.component';

describe('ExtraLuggageSelectionComponent', () => {
  let component: ExtraLuggageSelectionComponent;
  let fixture: ComponentFixture<ExtraLuggageSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraLuggageSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraLuggageSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
