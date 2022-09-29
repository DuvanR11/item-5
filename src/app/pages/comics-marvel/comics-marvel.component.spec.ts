import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsMarvelComponent } from './comics-marvel.component';

describe('ComicsMarvelComponent', () => {
  let component: ComicsMarvelComponent;
  let fixture: ComponentFixture<ComicsMarvelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicsMarvelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComicsMarvelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
