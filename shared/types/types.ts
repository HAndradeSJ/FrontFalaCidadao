export interface Categoria{
  categoria: string;
  idcategoria: string;
  fk_idsecretaria: string;  
  log_criacao: string;
  log_update: string;

}

export interface userDto {
  idusuario:string
  nome: string
  idade: number
  cpf: string
  telefone : string
  funcao : string
  email : string
  senha : string
  idagente : string
}
  
  
export interface SolicitacaoDto {
  idsolicitacao:string
  chamado:string
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
