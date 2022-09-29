import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMarvelComponent } from './content-marvel.component';

describe('ContentMarvelComponent', () => {
  let component: ContentMarvelComponent;
  let fixture: ComponentFixture<ContentMarvelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentMarvelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentMarvelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
