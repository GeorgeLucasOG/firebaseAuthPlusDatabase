import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet, TextInput, Button, FlatList, ActivityIndicator} from "react-native";
import firebase from "./src/firebaseConnection";


//comando para desativar advertências em amarelo no emulador
console.disableYellowBox=true;

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');



  //Função para cadastrar nó no banco com chave gerada randomicamente
  async function cadastrar() {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((value) => {
      //alert(value.user.uid);
      firebase.database().ref('usuarios').child(value.user.uid).set({
        nome: name
      })
      alert('Cadastro realizado com sucesso!');
    })
    .catch((error) => {
      alert('Algo deu errado!');
      setEmail('');
      setName('');
      setPassword('');
    })
  }

  return (
    //formulário simples para receber dados no formulário
    <View style={styles.container}>
      <Text style={styles.texto}>Nome</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid="transparent"
      onChangeText={(nome) => setName(nome)}
      value={name}
      />

      <Text style={styles.texto}>Email</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid="transparent"
      onChangeText={(texto) => setEmail(texto)}
      value={email}
      />
    

    
      <Text style={styles.texto}>Senha</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid="transparent"
      onChangeText={(texto) => setPassword(texto)}
      value={password}
      />

      <Button
      title="Cadastrar"
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