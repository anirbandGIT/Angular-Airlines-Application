import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonDataCardComponent } from './common-data-card.component';

describe('CommonDataCardComponent', () => {
  let component: CommonDataCardComponent;
  let fixture: ComponentFixture<CommonDataCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonDataCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonDataCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
