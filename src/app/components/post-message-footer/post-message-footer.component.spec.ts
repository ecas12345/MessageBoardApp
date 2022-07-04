import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostMessageFooterComponent } from './post-message-footer.component';

describe('PostMessageFooterComponent', () => {
  let component: PostMessageFooterComponent;
  let fixture: ComponentFixture<PostMessageFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostMessageFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostMessageFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
