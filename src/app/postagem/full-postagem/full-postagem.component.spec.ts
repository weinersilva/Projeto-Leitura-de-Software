import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullPostagemComponent } from './full-postagem.component';

describe('FullPostagemComponent', () => {
  let component: FullPostagemComponent;
  let fixture: ComponentFixture<FullPostagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FullPostagemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullPostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
