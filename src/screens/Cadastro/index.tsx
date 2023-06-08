import React, { useEffect, useState } from "react";
import { Image, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { LivroDTO } from "../../dtos/livroDTO";
import { useForm } from "react-hook-form";
import uuid from "react-native-uuid";

import {
  Container,
  TitleWrapper,
  Title,
  Header,
  Body,
  TitleInput,
  Footer,
  Titulo,
  Autor,
  Editora,
  ISBN,
  Extra,
  Resumo,
  Imagem,
  ImagemLivro,
  Capa,
} from "./style";

import { ButtonAdd } from "../../components/ButtonAdd";
import { InputForm } from "../../components/InputForm";
import { useNavigation, useRoute } from "@react-navigation/native";
import { api } from "../../services/api";

interface Params {
  livro: LivroDTO;
}

interface FormData {
  titulo: string;
  autor: string;
  editora: string;
  isbn: string;
  descricao: string;
  imagem: string;
}

export function Cadastro() {
  //pega os dados da pagina anterior
  const route = useRoute();
  const { livro } = (route.params as Params) ?? { livro: {} };
  // console.log(livro);

  //objeto
  const [livros, setLivros] = useState<LivroDTO>({
    id: "",
    titulo: "",
    autor: "",
    editora: "",
    isbn: "",
    descricao: "",
    imagem: "",
  });

  // const [imagemSelecionada, setImagemSelecionada] = useState<string | null>(
  //   null
  // );

  const navigation = useNavigation<any>();

  // const [imagemLink, setImagemLink] = useState(""); // Estado para armazenar o link da imagem

  // const handleImagemLinkChange = (value) => {
  //   setImagemLink(value); // Atualiza o estado com o valor do link da imagem
  // };

  const { control, handleSubmit } = useForm({
    defaultValues: { route },
  });

  async function handleCadastro(form: FormData) {
    if (
      form.titulo === "" ||
      form.autor === "" ||
      form.editora === "" ||
      form.isbn === "" ||
      form.descricao === "" ||
      form.imagem === ""
    ) {
      alert("Todos os campos são obrigatórios!");
      return;
    } else {
      const data = {
        ...livro,
        id: String(uuid.v4()),
        titulo: form.titulo || livro.titulo,
        autor: form.autor || livro.autor,
        editora: form.editora || livro.editora,
        isbn: form.isbn || livro.isbn,
        descricao: form.descricao || livro.descricao,
        imagem: form.imagem || livro.imagem,
      };
      console.log(data);

      try {
        console.log("route: " + route);
        if (route.params) {
          console.log("put");
          data.id = livro.id;
          await api.put(`/livros/${data.id}`, data);
        } else {
          await api.post("/livros", data);
        }
        navigation.navigate("Livros Disponíveis");
        setLivros(data);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <Title>Cadastrar / Alterar Livro</Title>
        </TitleWrapper>
      </Header>
      <Body>
        <Titulo>
          <TitleInput>Titulo:</TitleInput>
          <InputForm
            defaultValue={livro ? livro.titulo : null}
            name="titulo"
            control={control}
            placeholder=""
          />
        </Titulo>
        <Autor>
          <TitleInput>Autor:</TitleInput>
          <InputForm
            defaultValue={livro ? livro.autor : null}
            name="autor"
            control={control}
            placeholder=""
          />
        </Autor>
        <Editora>
          <TitleInput>Editora:</TitleInput>
          <InputForm
            defaultValue={livro ? livro.editora : null}
            name="editora"
            control={control}
            placeholder=""
          />
        </Editora>
        <ISBN>
          <TitleInput>ISBN:</TitleInput>
          <InputForm
            defaultValue={livro ? livro.isbn : null}
            name="isbn"
            control={control}
            placeholder=""
          />
        </ISBN>
        <Extra>
          <Imagem>
            <TitleInput>Capa:</TitleInput>
            <Capa>
              {/* {imagemLink ? (
                <ImagemLivro source={{ uri: imagemLink }} />
              ) : ( */}
              <ImagemLivro
                source={{
                  uri: "https://cdn-icons-png.flaticon.com/512/91/91768.png",
                }}
              />
              {/* )} */}
            </Capa>
          </Imagem>
          <Resumo>
            <TitleInput>Link Imagem Capa:</TitleInput>
            <InputForm
              defaultValue={livro ? livro.imagem : null}
              name="imagem"
              control={control}
              placeholder=""
            />
            <TitleInput>Resumo:</TitleInput>
            <InputForm
              defaultValue={livro ? livro.descricao : null}
              name="descricao"
              control={control}
              placeholder=""
              style={{ height: 90 }}
              multiline
            />
          </Resumo>
        </Extra>
      </Body>
      <Footer>
        <ButtonAdd title="adicionar" onPress={handleSubmit(handleCadastro)} />
      </Footer>
    </Container>
  );
}
