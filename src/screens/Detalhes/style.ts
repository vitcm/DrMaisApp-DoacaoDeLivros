import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  /* width: 100%;
  height: 20%;
  background-color: ${({ theme }) => theme.colors.azul_claro};
  flex-direction: row;
  justify-content: space-between; */
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.azul_claro};
`;

export const HeaderDetail = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 50px;
  padding-right: 10px;
`;

export const TitleWrapper = styled.View``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.worksans_bold};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.branco};
`;

export const Body = styled.View`
  width: 100%;
  height: 80%;
  /* height: ${RFValue(500)}px; */
  background-color: ${({ theme }) => theme.colors.cinza};
  align-items: center;
`;

export const Detalhe = styled.View`
  width: 100%;
  margin-top: 40px;
  padding: 0 20px;
`;

export const TitleInput = styled.Text`
  /* margin-left: 15px; */
  font-family: ${({ theme }) => theme.fonts.worksans_regular};
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.preto};
`;

export const TitleInputDois = styled.Text`
  font-family: ${({ theme }) => theme.fonts.worksans_regular};
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.preto};
`;

export const Footer = styled.View`
  bottom: 150px;
  left: 0;
  right: 0;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px 40px;
  background-color: ${({ theme }) => theme.colors.cinza};
`;

export const Topo = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
`;

export const Dados = styled.View`
  justify-content: center;
  padding-right: 10px;
`;

export const ImagemLivro = styled.Image`
  width: 120px;
  height: 180px;
`;

export const Autor = styled.Text`
  font-family: ${({ theme }) => theme.fonts.worksans_regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.preto};
  margin-bottom: 30px;
  margin-left: 10px;
`;

export const Editora = styled.Text`
  font-family: ${({ theme }) => theme.fonts.worksans_regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.preto};
  margin-bottom: 30px;
  margin-left: 10px;
`;

export const ISBN = styled.Text`
  font-family: ${({ theme }) => theme.fonts.worksans_regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.preto};
  margin-left: 10px;
`;

export const Corpo = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: "center",
  },
  showVerticalScrollIndicator: false,
})`
  padding: 0 10px;
  height: 63%;
`;

export const Sobre = styled.Text`
  font-family: ${({ theme }) => theme.fonts.worksans_regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.cinza_escuro};
  text-align: justify;
`;
