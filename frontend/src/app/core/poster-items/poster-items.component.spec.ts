import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterItemsComponent } from './poster-items.component';

describe('PosterItemsComponent', () => {
  let component: PosterItemsComponent;
  let fixture: ComponentFixture<PosterItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosterItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PosterItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
