import { FlatList } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 25%;
  background-color: ${({ theme }) => theme.colors.azul_claro};
`;

export const TitleWrapper = styled.View`
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  margin-bottom: -15px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.worksans_bold};
  font-size: ${RFValue(35)}px;
  color: ${({ theme }) => theme.colors.branco};
`;

export const Body = styled.View`
  width: 100%;
  height: 62%;
  /* height: ${RFValue(500)}px; */
  background-color: ${({ theme }) => theme.colors.cinza};
  align-items: center;
  /* justify-content: center; */
`;

export const Lista = styled(FlatList).attrs({
  showVerticalScrollIndicator: true,
})`
  width: 90%;
  margin-top: 40px;
  height: 100%;
` as React.ComponentType as new <DataListProps>() => FlatList<DataListProps>;
// export const Lista = styled(FlatList).attrs({
//   // attrs: adiciona propriedades
//   contentContainerStyle: {
//     padding: 24,
//   },
//   showVerticalScrollIndicator: false,
// })``

export const Pesquisa = styled.View`
  width: 90%;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
`;

export const Footer = styled.View`
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;
  padding: 40px 40px;
  background-color: ${({ theme }) => theme.colors.cinza};
`;
