import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPostsByUserComponent } from './search-posts-by-user.component';

describe('SearchPostsByUserComponent', () => {
  let component: SearchPostsByUserComponent;
  let fixture: ComponentFixture<SearchPostsByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPostsByUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPostsByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
