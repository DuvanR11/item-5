import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilMarvelComponent } from './perfil-marvel.component';

describe('PerfilMarvelComponent', () => {
  let component: PerfilMarvelComponent;
  let fixture: ComponentFixture<PerfilMarvelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilMarvelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilMarvelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
