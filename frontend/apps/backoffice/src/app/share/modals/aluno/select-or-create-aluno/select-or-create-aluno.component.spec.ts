import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOrCreateAlunoComponent } from './select-or-create-aluno.component';

describe('SelectOrCreateAlunoComponent', () => {
  let component: SelectOrCreateAlunoComponent;
  let fixture: ComponentFixture<SelectOrCreateAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectOrCreateAlunoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectOrCreateAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
