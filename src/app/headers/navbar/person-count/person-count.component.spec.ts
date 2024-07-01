import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonCountComponent } from './person-count.component';

describe('PersonCountComponent', () => {
  let component: PersonCountComponent;
  let fixture: ComponentFixture<PersonCountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonCountComponent]
    });
    fixture = TestBed.createComponent(PersonCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
