import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockchainProofsComponent } from './blockchain-proofs.component';

describe('BlockchainProofsComponent', () => {
  let component: BlockchainProofsComponent;
  let fixture: ComponentFixture<BlockchainProofsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockchainProofsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockchainProofsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
