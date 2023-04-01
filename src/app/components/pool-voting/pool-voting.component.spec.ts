import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolVotingComponent } from './pool-voting.component';

describe('PoolVotingComponent', () => {
  let component: PoolVotingComponent;
  let fixture: ComponentFixture<PoolVotingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolVotingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolVotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
