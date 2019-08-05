import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleTechComponent } from './people-tech.component';

describe('PeopleTechComponent', () => {
  let component: PeopleTechComponent;
  let fixture: ComponentFixture<PeopleTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
