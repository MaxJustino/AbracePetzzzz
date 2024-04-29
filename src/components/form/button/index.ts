import { colors } from "@/styles/colors";
import styled from "styled-components/native";

export const Button = styled.Pressable`
  width: 100%;
  height: 42px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors["violet-500"]};
  font-weight: 500;
`;

export const ButtonText = styled.Text`
  color: ${colors["zinc-50"]};
`;
