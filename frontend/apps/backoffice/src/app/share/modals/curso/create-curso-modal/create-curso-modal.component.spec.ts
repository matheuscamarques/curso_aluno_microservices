import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCursoModalComponent } from './create-curso-modal.component';

describe('CreateCursoModalComponent', () => {
  let component: CreateCursoModalComponent;
  let fixture: ComponentFixture<CreateCursoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCursoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCursoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
