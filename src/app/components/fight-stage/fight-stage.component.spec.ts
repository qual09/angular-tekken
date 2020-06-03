import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FightStageComponent } from './fight-stage.component';

describe('FightStageComponent', () => {
  let component: FightStageComponent;
  let fixture: ComponentFixture<FightStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FightStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FightStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
