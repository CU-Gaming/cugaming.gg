import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntramuralsComponent } from './intramurals.component';

describe('IntramuralsComponent', () => {
  let component: IntramuralsComponent;
  let fixture: ComponentFixture<IntramuralsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntramuralsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntramuralsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
