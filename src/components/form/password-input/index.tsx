import { colors } from "@/styles/colors";
import { Eye, EyeOff } from "lucide-react-native";
import React, { useState } from "react";
import styled from "styled-components/native";
import { InputItem } from "../input";

export const PasswordInput = ({ ...props }) => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const togglePasswordVisibility = () => {
		setIsPasswordVisible((prev) => !prev);
	};

	const inputMode = isPasswordVisible ? "text" : "none";

	return (
		<InputContainer>
			<InputItem
				{...props}
				secureTextEntry={!isPasswordVisible}
				inputMode={inputMode}
			/>
			<PasswordIcon onPress={togglePasswordVisibility}>
				{isPasswordVisible ? (
					<EyeOff size={20} color={colors["zinc-50"]} />
				) : (
					<Eye size={20} color={colors["zinc-50"]} />
				)}
			</PasswordIcon>
		</InputContainer>
	);
};

const InputContainer = styled.View`
	position: relative;
	width: 100%;
`;

const PasswordIcon = styled.Pressable`
	position: absolute;
	right: 4px;
	top: 50%;
	transform: translateY(-10px);
`;
