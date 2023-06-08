import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import {
  Container,
  TitleWrapper,
  Title,
  Header,
  Body,
  Detalhe,
  TitleInput,
  TitleInputDois,
  Footer,
  HeaderDetail,
  Topo,
  Dados,
  Autor,
  Editora,
  ISBN,
  Corpo,
  Sobre,
  ImagemLivro,
} from "./style";
import { useTheme } from "styled-components";
import FotoLivro from "../../assets/acotar.svg";

import { InputForm } from "../../components/InputForm";
import { ButtonAdd } from "../../components/ButtonAdd";
import { BackButton } from "../../components/BackButton";
import { RFValue } from "react-native-responsive-fontsize";
import { ModalConfirmacao } from "../../components/ModalConfirmacao";
import { LivroDTO } from "../../dtos/livroDTO";
import { api } from "../../services/api";

interface Params {
  livro: LivroDTO;
}

export function Detalhes() {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const { livro } = (route.params as Params);

  const theme = useTheme();

  function handleReturn() {
    navigation.goBack();
  }

  function handleDashboard() {
    navigation.navigate("Livros Disponíveis");
  }

  function handleEditar(livro: LivroDTO) {
    navigation.navigate("Doar", { livro });
  }

  const [modalVisible, setModalVisible] = useState(false);

  function handleModal() {
    setModalVisible(true);
  }

  // useEffect(() => {
  //   async function buscaLivro() {
  //     try {
  //       const response = await api.get(`/livros/${2}`);
  //       livro(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   buscaLivro();
  // }, []);

  return (
    <Container>
      <Header>
        <HeaderDetail>
          <BackButton onPress={handleReturn} style={styles.back} />
          <TitleWrapper>
            <Title>{livro.titulo}</Title>
          </TitleWrapper>
        </HeaderDetail>
      </Header>
      <Body>
        <Detalhe>
          <Topo>
            <ImagemLivro
              source={{
                uri: livro.imagem,
              }}
            />
            <Dados>
              <Autor>{livro.autor}</Autor>
              <Editora>{livro.editora}</Editora>
              <ISBN>{livro.isbn}</ISBN>
            </Dados>
          </Topo>
          <Corpo>
            <ModalConfirmacao
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              id={livro.id}
              livro={livro}
            />
            <Sobre>{livro.descricao}</Sobre>
          </Corpo>
        </Detalhe>
      </Body>
      <Footer>
        <ButtonAdd
          title="editar"
          color={theme.colors.amarelo_claro}
          colorBorder={theme.colors.amarelo}
          onPress={() => handleEditar(livro)}
        />
        <ButtonAdd
          title="remover"
          color={theme.colors.vermelho_claro}
          colorBorder={theme.colors.vermelho}
          onPress={() => handleModal()}
        />
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    overflow: "hidden",
    zIndex: 1,
  },
  back: {
    marginTop: 24,
  },
  imagem: {
    width: 20,
    height: 30,
    resizeMode: "contain",
  },
});
