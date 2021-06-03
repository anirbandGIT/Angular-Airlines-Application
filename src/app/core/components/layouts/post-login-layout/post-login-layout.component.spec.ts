import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLoginLayoutComponent } from './post-login-layout.component';

describe('PostLoginLayoutComponent', () => {
  let component: PostLoginLayoutComponent;
  let fixture: ComponentFixture<PostLoginLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostLoginLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostLoginLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
