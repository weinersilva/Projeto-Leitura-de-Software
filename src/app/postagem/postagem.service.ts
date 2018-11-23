import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable, OnInit } from '@angular/core';
import { Postagem } from './../models/Postagem.model';

@Injectable()
export class PostagemService implements OnInit {
  postagens: AngularFirestoreCollection<Postagem>;

  constructor(private db: AngularFirestore, private http: HttpClient) {}

  ngOnInit() {}

  private definePostagens(): void {
    this.postagens = this.db.collection<Postagem>('/postagens');
  }

  getPostagemById() {}
}
