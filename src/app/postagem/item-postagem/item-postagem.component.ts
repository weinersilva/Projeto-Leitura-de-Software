import { Postagem } from './../../models/Postagem.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item-postagem',
  templateUrl: './item-postagem.component.html',
  styleUrls: ['./item-postagem.component.scss']
})
export class ItemPostagemComponent {
  @Input()
  postagem: Postagem;
  @Output()
  selecionaPostagem = new EventEmitter<Postagem>();

  executarAcao(acao: string): void {
    this[acao].emit(this.postagem);
  }
}
