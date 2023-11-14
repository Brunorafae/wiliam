//import React from 'react';
import { View, Image, StyleSheet, FlatList,TouchableOpacity } from 'react-native';

import Texto from '../../../componentes/Texto';

export default function Item({ item: { nome, imagem, botao } }) {
  return <View style={estilos.item}>
    <Image source={imagem} style={estilos.imagem}/>
    <Texto style={estilos.nome}>{ nome }</Texto>

    <TouchableOpacity style={estilos.botao} onPress={() => {}}>
      <Texto style={estilos.textoBotao}>{ botao }</Texto>
    </TouchableOpacity>
  </View>
}

const estilos = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: "#ECECEC",
    paddingVertical: 26,
    marginHorizontal: 26,
    alignItems: "center",
  },
  imagem: {
    width: 46,
    height: 46,
  },
  nome: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 31,
    color: "#464646"
  },
  botao: {
    marginTop: 8,
    backgroundColor: '#2A9F85',
    paddingVertical: 13,
    paddingHorizontal: 58,
    borderRadius: 16,
  },
  textoBotao: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
  },
});