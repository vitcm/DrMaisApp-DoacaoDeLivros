import React, { useState } from "react";
import { Text, Modal, StyleSheet, View } from "react-native";

import {
  Container,
  EstiloModal,
  Content,
  Titulo,
  Confirmacao,
  Footer,
} from "./style";
import { ButtonAdd } from "../ButtonAdd";
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";
import { api } from "../../services/api";

export function ModalConfirmacao({
  modalVisible,
  setModalVisible,
  id,
  livro,
}: any) {
  const theme = useTheme();
  const navigation = useNavigation<any>();
  console.log("id:" + id);

  async function handleDashboard() {
    try {
      console.log("id2:" + id);
      await api.delete(`/livros/${id}`);
      setModalVisible(false);
      handleDashboard();
    } catch (error) {
      console.error(error);
      // Trate o erro adequadamente, exibindo uma mensagem de erro ou tomando outras ações necessárias.
    }
    navigation.navigate("Livros Disponíveis");
  }

  function handleDetalhes() {
    navigation.navigate("Detalhes");
  }
  return (
    <View style={styles.container}>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.overView}>
          <EstiloModal>
            <Content>
              <Titulo>Atenção!</Titulo>
              <Confirmacao>
                Tem certeza que quer excluir esse livro?
              </Confirmacao>
              <Footer>
                <ButtonAdd
                  title="confirma"
                  color={theme.colors.verde_claro}
                  colorBorder={theme.colors.verde}
                  onPress={() => {
                    setModalVisible(false), handleDashboard();
                  }}
                />
                <ButtonAdd
                  title="cancelar"
                  color={theme.colors.vermelho_claro}
                  colorBorder={theme.colors.vermelho}
                  onPress={() => {
                    setModalVisible(false);
                  }}
                />
              </Footer>
            </Content>
          </EstiloModal>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  overView: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
});
