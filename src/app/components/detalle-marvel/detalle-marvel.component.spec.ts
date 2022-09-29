import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleMarvelComponent } from './detalle-marvel.component';

describe('DetalleMarvelComponent', () => {
  let component: DetalleMarvelComponent;
  let fixture: ComponentFixture<DetalleMarvelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleMarvelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleMarvelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
