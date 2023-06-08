import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 100px;
  /* height: ${RFValue(120)}px; */
  background-color: ${({ theme }) => theme.colors.azul_claro};
`;

export const TitleWrapper = styled.View`
  align-items: center;
  padding-top: 50px;
  padding-right: 10px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.worksans_bold};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.branco};
`;

export const Body = styled.View`
  width: 100%;
  height: 90%;
  /* height: ${RFValue(500)}px; */
  background-color: ${({ theme }) => theme.colors.cinza};
  align-items: center;
`;

export const Insercao = styled.View`
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

export const Footer = styled.View`
  bottom: 100px;
  left: 0;
  right: 0;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;

export const Titulo = styled.View`
  width: 90%;
`;

export const Autor = styled.View`
  width: 90%;
`;

export const Editora = styled.View`
  width: 90%;
`;

export const ISBN = styled.View`
  width: 90%;
`;

export const Extra = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
  padding: 0 22px;
`;

export const ImagemLivro = styled.Image`
  width: 120px;
  height: 180px;
`;

export const Capa = styled.View``;

export const Resumo = styled.View`
  padding-left: 10px;
  width: 60%;
`;

export const Imagem = styled.View`
  width: 40%;
`;
