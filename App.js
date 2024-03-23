import React, { useEffect, useState } from "react";
import {View, Text} from "react-native";
import firebase from "./src/firebaseConnection";

//comando para desativar advertências em amarelo no emulador
console.disableYellowBox=true;

export default function App() {
  const [nome, setNome] = useState('Carregamento...');
  const [idade, setIdade] = useState('');

  useEffect(() => {

    async function dados() {

      // //Olheiro ou Listener da database
      // await firebase.database().ref('nome').on('value', (snapshot) => {
      //   setNome(snapshot.val());
      // });

      // //Once faz uma única consulta no database ao invés de ficar em estado de listener
      // await firebase.database().ref('nome').once('value', (snapshot) => {
      //   setNome(snapshot.val());
      // });
      
      // //Exemplo de pararâmetros do "ref" que pode guardar o "apontamento" da celula a ser consultada na database
      // await firebase.database().ref('usuario/1/nome').on('value', (snapshot) => {
      //   setNome(snapshot.val());
      // });       

      //Exemplo de pararâmetros do uso do "ref" combinado com as propriedades do object retornado do state usuário, podem guardar o "apontamento" da celula a ser consultada na database
      await firebase.database().ref('usuario/1').on('value', (snapshot) => {
        setNome(snapshot.val().nome);
        setIdade(snapshot.val().idade);
      });             
    }

    dados();

  },[]);

  return (
    <View style={{ marginTop: 25 }}>
      <Text style={{fontSize: 25}}>Olá {nome}</Text>
      <Text style={{fontSize: 25}}>Idade {idade}</Text>
    </View>
  );
}