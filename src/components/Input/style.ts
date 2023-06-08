import styled from "styled-components/native";
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TextInput)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.cinza_claro};
  border-radius: 10px;
  height: 50px;
  justify-content: center;
  margin-top: 10px;
  padding-left: 10px;
`;
