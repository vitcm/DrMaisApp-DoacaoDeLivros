import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

export const Container = styled.TouchableOpacity`
    width: 120px;
    height: 180px;
    background-color: ${({theme})=>theme.colors.cinza_claro};
    border-radius: 15px;
    border-width: 3px;
    border-color: ${({theme})=>theme.colors.cinza_escuro};
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`;

export const ImagemLivro = styled.Image`
width: 60px;
  height: 60px;
`;