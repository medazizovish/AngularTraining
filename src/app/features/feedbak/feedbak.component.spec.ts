import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbakComponent } from './feedbak.component';

describe('FeedbakComponent', () => {
  let component: FeedbakComponent;
  let fixture: ComponentFixture<FeedbakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedbakComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
