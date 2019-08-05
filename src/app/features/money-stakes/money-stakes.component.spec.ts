import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyStakesComponent } from './money-stakes.component';

describe('MoneyStakesComponent', () => {
  let component: MoneyStakesComponent;
  let fixture: ComponentFixture<MoneyStakesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyStakesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyStakesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
