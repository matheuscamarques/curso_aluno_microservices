import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOrCreateCursoModalComponent } from './select-or-create-curso-modal.component';

describe('SelectOrCreateCursoModalComponent', () => {
  let component: SelectOrCreateCursoModalComponent;
  let fixture: ComponentFixture<SelectOrCreateCursoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectOrCreateCursoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectOrCreateCursoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
