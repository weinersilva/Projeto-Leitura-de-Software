import { PostagemService } from './../postagem.service';
import { ActivatedRoute } from '@angular/router';
import { Postagem } from './../../models/Postagem.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-postagem',
  templateUrl: './full-postagem.component.html',
  styleUrls: ['./full-postagem.component.scss']
})
export class FullPostagemComponent implements OnInit {
  postagem: Postagem;

  constructor(private actvRoute: ActivatedRoute) {}

  ngOnInit() {}
}
