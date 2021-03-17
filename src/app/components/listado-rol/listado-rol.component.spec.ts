import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoRolComponent } from './listado-rol.component';

describe('ListadoRolComponent', () => {
  let component: ListadoRolComponent;
  let fixture: ComponentFixture<ListadoRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoRolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
