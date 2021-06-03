import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostLoginFooterComponent } from './post-login-footer.component';

describe('PostLoginFooterComponent', () => {
  let component: PostLoginFooterComponent;
  let fixture: ComponentFixture<PostLoginFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostLoginFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostLoginFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
