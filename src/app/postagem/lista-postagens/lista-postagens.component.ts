import { Router } from '@angular/router';
import { Postagem } from './../../models/Postagem.model';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '@app/models/Usuario.model';

@Component({
  selector: 'app-lista-postagens',
  templateUrl: './lista-postagens.component.html',
  styleUrls: ['./lista-postagens.component.scss']
})
export class ListaPostagensComponent implements OnInit {
  usuario: Usuario = {
    Nome: 'Jose',
    Login: 'jose',
    Senha: '123456'
  };
  postagens: Postagem[] = [
    {
      Id: '12345',
      Titulo: 'dsjoaids',
      Texto: '4543543543543',
      Autor: this.usuario
    },
    {
      Id: '12345',
      Titulo: '32132 32 1sdsa',
      Texto: '3213 2 3121 23 12 3',
      Autor: this.usuario
    }
  ];

  selecionada: Postagem;

  constructor(private router: Router) {}

  ngOnInit() {}

  onSelecionaPostagem(postagem: Postagem) {
    this.selecionada = postagem;
    this.router.navigate([`/postagem/${this.selecionada.Id}`]);
  }
}
