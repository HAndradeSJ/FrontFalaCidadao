export interface Categoria{
  categoria: string;
  idcategoira: string;
  fk_idsecretaria: string;  
  log_criacao: string;
  log_update: string;

}

  
  
export interface SolicitacaoDto {
  idsolicitacao:string
  protocolo:number
  data_abertura:string
  data_encerramento:string
  fk_idusuario : string
  fk_idagente : string
  status: string
  imagemUrl: string
  descricao:string
  logradouro: string
  numero: number
  bairro: string
  justifictiva: string
  pontoderef: string
  comentario: string
  fk_idcategoria:string
}
