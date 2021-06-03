import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffAncillaryServicesComponent } from './staff-ancillary-services.component';

describe('StaffAncillaryServicesComponent', () => {
  let component: StaffAncillaryServicesComponent;
  let fixture: ComponentFixture<StaffAncillaryServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffAncillaryServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffAncillaryServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
