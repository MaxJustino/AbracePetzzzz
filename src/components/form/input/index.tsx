import { colors } from "@/styles/colors";
import styled from "styled-components/native";

export const InputItem = ({ ...props }) => {
	return <Input {...props} placeholderTextColor={colors["zinc-500"]} />;
};

const Input = styled.TextInput`
  height: 42px;
  border-color: ${colors["zinc-900"]};
  border-bottom-width: 1px;
  color: ${colors["zinc-50"]};
`;
