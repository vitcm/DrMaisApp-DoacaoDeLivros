import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Title } from "./style";
import { useTheme } from "styled-components";
import { LivroDTO } from "../../dtos/livroDTO";

interface Props extends TouchableOpacityProps {
  color?: string;
  colorBorder?: string;
  title: string;
  onPress: () => void;
}

export function ButtonAdd({ color, title, colorBorder, onPress }: Props) {
  const theme = useTheme();
  return (
    <Container
      color={color ? color : theme.colors.azul_claro}
      colorBorder={colorBorder ? colorBorder : theme.colors.azul_escuro}
      onPress={onPress}
    >
      <Title>{title}</Title>
    </Container>
  );
}
