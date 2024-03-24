import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet, TextInput, Button, Alert} from "react-native";
import firebase from "./src/firebaseConnection";

//comando para desativar advertências em amarelo no emulador
console.disableYellowBox=true;

export default function App() {
  const [nome, setNome] = useState('Carregamento...');
  const [cargo, setCargo] = useState('');

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

      // //Exemplo de pararâmetros do uso do "ref" combinado com as propriedades do object retornado do state usuário, podem guardar o "apontamento" da celula a ser consultada na database
      // await firebase.database().ref('usuario/1').on('value', (snapshot) => {
      //   setNome(snapshot.val().nome);
      //   setIdade(snapshot.val().idade);
      // });  
      
      //Criar um (Nó) no banco
      //await firebase.database().ref('tipo').set('Vendedor');

      //Remove um nó
      //await firebase.database().ref('tipo').remove();

      //Editar/Substituir dados do nó pelos repassados nos parâmetros
      // await firebase.database().ref('usuarios').child(3).set({
      //   nome: 'Matheus',
      //   Cargo: 'Programador'
      // });

      //Editar exclusively dados repassados nos parâmetros sem afetar os já existentes no nó!
      // await firebase.database().ref('usuarios').child(3)
      // .update({
      //   nome: 'José Augusto'
      // })
    }

    dados();

  },[]);

  //Função para cadastrar nó no banco com chave gerada randomicamente
  async function cadastrar() {
    if(nome !== '' & cargo !== ''){
      let usuarios = await firebase.database().ref('usuarios');
      let chave = usuarios.push().key;

      usuarios.child(chave).set({
        nome: nome,
        cargo: cargo,
      });

      alert('Cadastrador com sucesso!');
      setCargo('');
      setNome('');
    }
  }

  return (
    //formulário simples para receber dados no formulário
    <View style={styles.container}>
      <Text style={styles.texto}>Nome</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid="transparent"
      onChangeText={(texto) => setNome(texto)}
      value={nome}
      />
    

    
      <Text style={styles.texto}>Cargo</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid="transparent"
      onChangeText={(texto) => setCargo(texto)}
      value={cargo}
      />

      <Button
      title="Novo Funcionário"
      onPress={cadastrar}
      />
    </View>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  texto:{
    fontSize:20,
  },
  input:{
    marginBottom:10,
    padding:10,
    borderWidth:1,
    borderColor: '#121212',
    height: 45,
    fontSize: 17
  }
});