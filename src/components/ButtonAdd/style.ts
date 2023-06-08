import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface ButtonProps extends TouchableOpacity {
  color?: string;
  colorBorder?: string;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  width: 45%;
  height: 40px;
  background-color: ${({ color }) => color};
  border-color: ${({ colorBorder }) => colorBorder};
  border-width: 5px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.preto};
  font-size: ${RFValue(15)}px;
`;
