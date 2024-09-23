import { Transacao } from './transacao.interface';
export interface ConsultaExtrato {
  numeroConta: string
  transacoes: Transacao []
}
