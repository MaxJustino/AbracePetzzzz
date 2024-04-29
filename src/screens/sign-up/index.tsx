import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { Input } from "react-native-elements";
import { Container, FormContainer, TitlePage, Form, FormItem } from "./styles";

interface Conta {
  nome: string;
  cpf: string;
  telefone: string;
  email: string;
  senha: string;
}

export default function SignUp() {
  const [nome, setNome] = useState("");
  const [cpf, setCPF] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cadastroSucesso, setCadastroSucesso] = useState<boolean | null>(null);
  const [logInterno, setLogInterno] = useState<string>(""); // Log interno para armazenar detalhes das contas cadastradas

  const handleCadastro = () => {
    if (nome && cpf && telefone && email && senha) {

		
      // Verificar se o CPF tem 11 dígitos
      if (cpf.length !== 11) {
        setLogInterno("CPF inválido. O CPF deve conter 11 dígitos.\n");
        setCadastroSucesso(false);
        return;
      }

      // Verificar se o telefone tem 11 dígitos
      if (telefone.length !== 11) {
        setLogInterno("Telefone inválido. O telefone deve conter 11 dígitos.\n");
        setCadastroSucesso(false);
        return;
      }

      // Verificar se o email tem um formato válido

      // Aqui você pode adicionar a lógica para verificar se o CPF ou email já existem na lista de contas

      // Se tudo estiver válido, o cadastro é bem-sucedido
      setLogInterno("Cadastro realizado com sucesso!\n");
      setCadastroSucesso(true);
    } else {
      setLogInterno("Por favor, preencha todos os campos.\n");
      setCadastroSucesso(false);
    }
  };

  const handleCPFChange = (text: string) => {
    // Remover todos os caracteres não numéricos do texto
    const formattedText = text.replace(/\D/g, "");

    // Adicionar a formatação XXX.XXX.XXX-XX
    let formattedCPF = "";
    for (let i = 0; i < formattedText.length; i++) {
      if (i === 3 || i === 6) {
        formattedCPF += ".";
      } else if (i === 9) {
        formattedCPF += "-";
      }
      formattedCPF += formattedText[i];
    }

    // Limitar o CPF a 14 caracteres (incluindo pontos e traço)
    setCPF(formattedCPF.substring(0, 14));
  };

  const handleTelefoneChange = (text: string) => {
    // Remover todos os caracteres não numéricos do texto
    const formattedText = text.replace(/\D/g, "");

    // Adicionar a formatação (XX) XXXXX-XXXX
    let formattedTelefone = "(";
    for (let i = 0; i < formattedText.length; i++) {
      if (i === 2) {
        formattedTelefone += ") ";
      } else if (i === 7) {
        formattedTelefone += "-";
      }
      formattedTelefone += formattedText[i];
    }

    // Limitar o telefone a 14 caracteres (incluindo parênteses e traço)
    setTelefone(formattedTelefone.substring(0, 14));
  };

  return (
    <Container>
      <FormContainer>
        <TitlePage>Crie Sua Conta</TitlePage>
        <Form>
          <FormItem>
            <Input
              label="Nome"
              placeholder="Digite seu nome"
              value={nome}
              onChangeText={setNome}
            />
          </FormItem>
          <FormItem>
            <Input
              label="CPF"
              placeholder="Digite seu CPF"
              keyboardType="numeric"
              value={cpf}
              onChangeText={handleCPFChange}
            />
          </FormItem>
          <FormItem>
            <Input
              label="Telefone"
              placeholder="(XX) XXXXX-XXXX"
              keyboardType="phone-pad"
              value={telefone}
              onChangeText={handleTelefoneChange}
            />
          </FormItem>
          <FormItem>
            <Input
              label="Email"
              placeholder="Digite seu email"
              value={email}
              onChangeText={setEmail}
            />
          </FormItem>
          <FormItem>
            <Input
              label="Senha"
              placeholder="Digite sua senha"
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
            />
          </FormItem>

          <Button title="Cadastre-se" onPress={handleCadastro} />
        </Form>
      </FormContainer>

      {cadastroSucesso !== null && (
        <View style={{ backgroundColor: cadastroSucesso ? 'green' : 'red', padding: 10, marginVertical: 10, borderRadius: 5 }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>
            {cadastroSucesso ? "Cadastrado com sucesso" : "Cadastro inválido"}
          </Text>
        </View>
      )}

      {/* Log interno - Não visível para o usuário final */}
      <View style={{ display: "none" }}>{logInterno}</View>
    </Container>
  );
}
