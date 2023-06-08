import { TouchableOpacityProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.cinza_claro};
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
`;

export const Content = styled.View`
  padding: 10px;
  flex-direction: row;
`;

export const Nome = styled.Text`
  font-family: ${({ theme }) => theme.fonts.worksans_regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.preto};
`;

export const ImagemLivro = styled.Image`
  width: 60px;
  height: 90px;
`;

export const Autor = styled.Text`
  font-family: ${({ theme }) => theme.fonts.worksans_regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.preto};
`;

export const Editora = styled.Text`
  font-family: ${({ theme }) => theme.fonts.worksans_regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.preto};
`;

export const ISBN = styled.Text`
  font-family: ${({ theme }) => theme.fonts.worksans_regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.preto};
`;

export const Resumo = styled.View`
  justify-content: center;
  padding-left: 5px;
`;
