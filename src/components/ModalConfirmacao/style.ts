import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.preto};
`;

export const EstiloModal = styled.View`
  background-color: ${({ theme }) => theme.colors.cinza_claro};
  width: 70%;
  height: 200px;
  border-radius: 15px;

  margin-top: 300px;
  margin-left: 60px;
`;

export const Content = styled.View`
  padding: 10px;
`;

export const Titulo = styled.Text`
  font-family: ${({ theme }) => theme.fonts.worksans_bold};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.preto};
  margin-bottom: 10px;
`;

export const Confirmacao = styled.Text`
  font-family: ${({ theme }) => theme.fonts.worksans_regular};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.preto};
`;

export const Footer = styled.View`
  bottom: -40px;
  flex-direction: row;
  justify-content: space-evenly;
`;
