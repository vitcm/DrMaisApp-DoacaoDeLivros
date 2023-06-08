import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, ImagemLivro } from "./style";
import { useTheme } from "styled-components";

interface Props {
    onPress: () => void;
  }

export function ButtonFoto({onPress}: Props) {
  const theme = useTheme();
  return (
    <Container onPress={onPress}>
      <ImagemLivro
        source={{
        uri: "https://cdn.icon-icons.com/icons2/1510/PNG/512/addcircularbuttonthinsymbol_104681.png",
        }}
        />
    </Container>
  );
}