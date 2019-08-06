import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryMainViewComponent } from './summary-main-view.component';

describe('SummaryMainViewComponent', () => {
  let component: SummaryMainViewComponent;
  let fixture: ComponentFixture<SummaryMainViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryMainViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
