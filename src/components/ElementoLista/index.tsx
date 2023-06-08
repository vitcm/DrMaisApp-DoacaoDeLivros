import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  Nome,
  ImagemLivro,
  Resumo,
  Autor,
  Editora,
  Content,
} from "./style";
import { LivroDTO } from "../../dtos/livroDTO";
import { TouchableOpacityProps } from "react-native";

interface ElementoListaProps extends TouchableOpacityProps {
  data: LivroDTO;
}

export function ElementoLista({ data, ...rest }: ElementoListaProps) {
  console.log("Imagem" + data.imagem);
  return (
    <Container {...rest}>
      <Content>
        <ImagemLivro
          source={{
            uri: data.imagem,
          }}
          resizeMode="contain"
        />
        <Resumo>
          <Nome>{data.titulo}</Nome>
          <Autor>{data.autor}</Autor>
          <Editora>{data.editora}</Editora>
        </Resumo>
      </Content>
    </Container>
  );
}
