import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubbersComponent } from './rubbers.component';

describe('RubbersComponent', () => {
  let component: RubbersComponent;
  let fixture: ComponentFixture<RubbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RubbersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RubbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
