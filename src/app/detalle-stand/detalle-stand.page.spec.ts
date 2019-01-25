import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleStandPage } from './detalle-stand.page';

describe('DetalleStandPage', () => {
  let component: DetalleStandPage;
  let fixture: ComponentFixture<DetalleStandPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleStandPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleStandPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
