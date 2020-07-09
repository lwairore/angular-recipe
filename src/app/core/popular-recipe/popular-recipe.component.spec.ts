import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularRecipeComponent } from './popular-recipe.component';

describe('PopularRecipeComponent', () => {
  let component: PopularRecipeComponent;
  let fixture: ComponentFixture<PopularRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
