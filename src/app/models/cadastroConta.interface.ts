import { Endereco } from "./endereco.interface";

export interface CadastroConta {
  numeroConta: number,
  nome: string,
  documento: String,
  dataDeNascimento: number,
  email:string,
  telefone: number,
  endereco: Endereco
}
