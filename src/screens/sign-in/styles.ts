import { colors } from "@/styles/colors";
import styled from "styled-components/native";

export const Container = styled.View`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	background-color: ${colors["zinc-950"]};
`;

export const FormContainer = styled.View`
	width: 100%;
	display: "flex";
	flex-direction: "column";
	gap: 16px;
	padding: 0 32px;
`;

export const TitlePage = styled.Text`
	font-size: 20px;
	font-weight: 700;
	text-align: center;
	color: ${colors["zinc-50"]};
`;

export const Form = styled.View`
	display: flex;
	flex-direction: column;
	gap: 24px;
`;

export const FormItem = styled.View`
	display: flex;
	flex-direction: column;
	gap: 4px;
	
`;
