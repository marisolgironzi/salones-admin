import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarSalonComponent } from './modificar-salon.component';

describe('ModificarSalonComponent', () => {
  let component: ModificarSalonComponent;
  let fixture: ComponentFixture<ModificarSalonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarSalonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarSalonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
