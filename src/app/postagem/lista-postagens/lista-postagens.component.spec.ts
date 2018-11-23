import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPostagensComponent } from './lista-postagens.component';

describe('ListaPostagensComponent', () => {
  let component: ListaPostagensComponent;
  let fixture: ComponentFixture<ListaPostagensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListaPostagensComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPostagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
