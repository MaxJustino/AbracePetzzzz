import React, { useState } from "react";
import { Button } from "react-native";
import { Input } from "react-native-elements";
import { Container, FormContainer, TitlePage, Form, FormItem } from "./styles";
import { buscarContaPorEmail } from "@/database/databaseService"; // Corrigido o caminho da importação

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !senha) {
      console.log("Por favor, preencha todos os campos.");
      return;
    }

    setLoading(true);
    const conta = await buscarContaPorEmail(email);
    setLoading(false);

    if (conta && conta.senha === senha) {
      console.log("Usuário autenticado com sucesso");
    } else {
      console.log("Credenciais inválidas");
    }
  };

  return (
    <Container>
      <FormContainer>
        <TitlePage>Faça seu login</TitlePage>
        <Form>
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
          <Button title="Entrar" onPress={handleLogin} disabled={loading} />
        </Form>
      </FormContainer>
    </Container>
  );
}
