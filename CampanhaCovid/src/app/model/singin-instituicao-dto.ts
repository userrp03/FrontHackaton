export interface SignInInstituicaoDTO {
  nome: string,
  email: string,
  telefone: string,
  cnpj: string,
  descricao: string,
  transporte: boolean,
  usuarioLogin: string,
  usuarioSenha: string,
  enderecoLogradouro: string,
  enderecoCep: string,
  enderecoBairro: string,
  enderecoCidade: string,
  enderecoUf: string,
  enderecoNumero: number,
  enderecoComplemento: string
}