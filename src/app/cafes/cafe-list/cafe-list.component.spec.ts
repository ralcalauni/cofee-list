import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CafeListComponent } from './cafe-list.component';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ContadorComponent } from '../contador/contador.component';
import { HeaderComponent } from '../../shared/header/header.component';

describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CafeListComponent, ContadorComponent, HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;
  });

  it('debería crear la tabla con 3 cafés más el encabezado', () => {
    component.cafes = [
      {
        id: 1, nombre: 'Café Especial A', tipo: 'Blend', region: 'Antioquia',
        sabor: '',
        altura: 0,
        imagen: ''
      },
      {
        id: 2, nombre: 'Café Especial B', tipo: 'Café de Origen', region: 'Caldas',
        sabor: '',
        altura: 0,
        imagen: ''
      },
      {
        id: 3, nombre: 'Café Especial C', tipo: 'Blend', region: 'Tolima',
        sabor: '',
        altura: 0,
        imagen: ''
      }
    ];

    fixture.detectChanges();
    const rows = fixture.debugElement.queryAll(By.css('table tbody tr'));
    expect(rows.length).toBe(3);
    const header = fixture.debugElement.queryAll(By.css('table thead tr'));
    expect(header.length).toBe(1);
  });
});