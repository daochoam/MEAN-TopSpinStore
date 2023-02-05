import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcoLoginComponent } from './ico-login.component';

describe('IcoLoginComponent', () => {
  let component: IcoLoginComponent;
  let fixture: ComponentFixture<IcoLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcoLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IcoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
