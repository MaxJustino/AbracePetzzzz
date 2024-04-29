export default interface Conta {
    id: number; // Identificador único da conta (pode ser gerado automaticamente pelo banco de dados)
    nome: string;
    cpf: string;
    telefone: string;
    email: string;
    senha: string;
  }
  