import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipescomponentComponent } from './pipescomponent.component';

describe('PipescomponentComponent', () => {
  let component: PipescomponentComponent;
  let fixture: ComponentFixture<PipescomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipescomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipescomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
