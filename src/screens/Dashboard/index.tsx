import React, { useCallback, useEffect, useState } from "react";
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from "@react-navigation/native";

import {
  Container,
  TitleWrapper,
  Title,
  Header,
  Body,
  Lista,
  Pesquisa,
  Footer,
} from "./style";
import { useTheme } from "styled-components";
import { ButtonAdd } from "../../components/ButtonAdd";
import { ElementoLista } from "../../components/ElementoLista";
import { ElementoPesquisa } from "../../components/ElementoPesquisa";

import { LivroDTO } from "../../dtos/livroDTO";
import { api } from "../../services/api";
import { Input } from "../../components/Input";

export function Dashboard() {
  const [livros, setLivros] = useState<LivroDTO[]>([]); // Estado para armazenar os livros
  const [livrosFiltrados, setLivrosFiltrados] = useState<LivroDTO[]>([]); // Estado para armazenar a lista de livros filtrada
  const [termoPesquisa, setTermoPesquisa] = useState(""); //Estado para armazenar o termo de pesquisa
  const navigation = useNavigation<any>();

  const theme = useTheme();

  //--------NAVEGAÇÃO:
  function handleOpenDetalhes(livro: LivroDTO) {
    // console.log(idlivro);
    navigation.navigate("Detalhes", { livro });
  }
  function handleOpenCadastro() {
    navigation.navigate("Doar");
  }

  //--------FAZ A PESQUISA(FILTRO):
  const filtrarLivros = useCallback(() => {
    const termo = termoPesquisa.toLowerCase();
    const livrosFiltrados = livros.filter((livro) => {
      const { titulo, autor, editora } = livro;
      return (
        (titulo && titulo.toLowerCase().includes(termo)) ||
        (autor && autor.toLowerCase().includes(termo)) ||
        (editora && editora.toLowerCase().includes(termo))
      );
    });
    setLivrosFiltrados(livrosFiltrados);
  }, [termoPesquisa, livros]);

  useEffect(() => {
    filtrarLivros();
  }, [filtrarLivros]);

  //--------CARREGA A PÁGINA COM TODOS OS ITENS DA API:
  const getLivros = async () => {
    try {
      const response = await api.get("/livros");
      setLivros(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  // FAZ COM QUE NÃO HAJA ATRASO NO CARREGAMENTO DOS DADOS
  useEffect(() => {
    getLivros();
  }, []);
  useFocusEffect(
    useCallback(() => {
      getLivros();
    }, [])
  );

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Title>Doação de livros</Title>
        </TitleWrapper>
        <Pesquisa>
          <Input
            placeholder="Digite aqui o nome que deseja pesquisar"
            onChangeText={setTermoPesquisa}
          />
        </Pesquisa>
      </Header>
      <Body>
        <Lista
          data={livrosFiltrados}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ElementoLista
              data={item}
              onPress={() => handleOpenDetalhes(item)}
            />
          )}
        />
      </Body>
      <Footer>
        <ButtonAdd
          title="cadastrar"
          color={theme.colors.verde_claro}
          colorBorder={theme.colors.verde}
          onPress={() => handleOpenCadastro()}
        />
      </Footer>
    </Container>
  );
}
