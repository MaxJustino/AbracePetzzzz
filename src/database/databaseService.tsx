import db from './databaseConfig';
import Conta from './contas';

export const criarConta = async (conta: Conta) => {
  const { nome, cpf, telefone, email, senha } = conta;
  (await db).transaction((tx: { executeSql: (arg0: string, arg1: any[], arg2: (_: any, result: any) => void, arg3: (_: any, error: any) => void) => void; }) => {
    tx.executeSql(
      'INSERT INTO contas (nome, cpf, telefone, email, senha) VALUES (?, ?, ?, ?, ?)',
      [nome, cpf, telefone, email, senha],
      (_) => {
        console.log('Conta criada com sucesso');
      },
      (_, error) => {
        console.error('Erro ao criar conta', error);
      }
    );
  });
};

export const buscarContaPorEmail = async (email: string, callback: (conta: Conta | null) => void) => {
  (await db).transaction((tx: { executeSql: (arg0: string, arg1: string[], arg2: (_: any, result: any) => void, arg3: (_: any, error: any) => void) => void; }) => {
    tx.executeSql(
      'SELECT * FROM contas WHERE email = ?',
      [email],
      (_, result) => {
        const conta = result.rows.length > 0 ? result.rows.item(0) as Conta : null;
        callback(conta);
      },
      (_, error) => {
        console.error('Erro ao buscar conta por email', error);
        callback(null);
      }
    );
  });
};

export const atualizarSenhaDaConta = async (email: string, novaSenha: string) => {
  (await db).transaction((tx: { executeSql: (arg0: string, arg1: string[], arg2: (_: any, result: any) => void, arg3: (_: any, error: any) => void) => void; }) => {
    tx.executeSql(
      'UPDATE contas SET senha = ? WHERE email = ?',
      [novaSenha, email],
      (_, result) => {
        console.log('Senha da conta atualizada com sucesso');
      },
      (_, error) => {
        console.error('Erro ao atualizar senha da conta', error);
      }
    );
  });
};

export const excluirContaPorEmail = async (email: string) => {
  (await db).transaction((tx: { executeSql: (arg0: string, arg1: string[], arg2: (_: any, result: any) => void, arg3: (_: any, error: any) => void) => void; }) => {
    tx.executeSql(
      'DELETE FROM contas WHERE email = ?',
      [email],
      (_, result) => {
        console.log('Conta excluída com sucesso');
      },
      (_, error) => {
        console.error('Erro ao excluir conta por email', error);
      }
    );
  });
};

export default {
  criarConta,
  buscarContaPorEmail,
  atualizarSenhaDaConta,
  excluirContaPorEmail
};