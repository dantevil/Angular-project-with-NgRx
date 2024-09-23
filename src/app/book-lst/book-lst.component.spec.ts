import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookLstComponent } from './book-lst.component';

describe('BookLstComponent', () => {
  let component: BookLstComponent;
  let fixture: ComponentFixture<BookLstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookLstComponent]
    });
    fixture = TestBed.createComponent(BookLstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
