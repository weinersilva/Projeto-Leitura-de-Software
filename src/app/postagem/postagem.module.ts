import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaPostagensComponent } from './lista-postagens/lista-postagens.component';
import { ItemPostagemComponent } from './item-postagem/item-postagem.component';
import { TranslateModule } from '@ngx-translate/core';
import { FullPostagemComponent } from './full-postagem/full-postagem.component';

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [ListaPostagensComponent, ItemPostagemComponent, FullPostagemComponent],
  exports: [ListaPostagensComponent, ItemPostagemComponent, FullPostagemComponent]
})
export class PostagemModule {}
