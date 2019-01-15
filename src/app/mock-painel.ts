import { Painel } from './painel';
import { Painel2 } from './painel';
import { Painel3 } from './painel';
import { Painel4 } from './painel';

export const PAINELS: Painel[] = [
  { link: '#envio', name: 'Envio'},
  { link: '#assinatura', name: 'Assinatura'},
  { link: '#envio-de-duplicatas', name: 'Envio de Duplicatas'},
  { link: '#assinatura-digital', name: 'Assinatura Digital'},
  { link: '#nova-operacao', name: 'Nova Operação'}
];
export const PAINELS2: Painel2[] = [
  { link: '#carteiras', name: 'Carteira'},
  { link: '#instrucoes', name: 'Instruções'}
];
export const PAINELS3: Painel3[] = [
  { qtd: 23 , class: 'none'},
  { qtd: 13 , class: 'block'},
  { qtd: 23 , class: 'block'},
];
export const PAINELS4: Painel4[] = [
  { action:'ações', id:0},
  { action:'excluir', id:1},
  { action:'incluir', id:2},
];