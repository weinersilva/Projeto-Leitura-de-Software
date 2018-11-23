import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPostagemComponent } from './item-postagem.component';

describe('ItemPostagemComponent', () => {
  let component: ItemPostagemComponent;
  let fixture: ComponentFixture<ItemPostagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemPostagemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPostagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
