import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsBrowserComponent } from './planets-browser.component';

describe('PlanetsBrowserComponent', () => {
  let component: PlanetsBrowserComponent;
  let fixture: ComponentFixture<PlanetsBrowserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetsBrowserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
