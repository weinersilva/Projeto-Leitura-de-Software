import { Usuario } from './Usuario.model';

export interface Postagem {
  Id: string;
  Titulo: string;
  Texto: string;
  Autor: Usuario;
}
