import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreLoginHeaderComponent } from './pre-login-header.component';

describe('PreLoginHeaderComponent', () => {
  let component: PreLoginHeaderComponent;
  let fixture: ComponentFixture<PreLoginHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreLoginHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreLoginHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
