import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonItemCardComponent } from './common-item-card.component';

describe('CommonItemCardComponent', () => {
  let component: CommonItemCardComponent;
  let fixture: ComponentFixture<CommonItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonItemCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
