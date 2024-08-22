import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import firebase from './src/Services/firebaseConfig';

console.disableYellowBox=true

export default function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');




  async function cadastrar(){
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then( (value) => {
      alert('Usuario criado: ' + value.user.email)
    })
    .catch( (error) => {
      if(error.code === 'auth/weak-password'){
        alert('Sua senha deve ter pelo menos 6 caracteres');
        return;
      }
      if(error.code === 'auth/invalid-email'){
        alert('Email invalido');
        return;
      }else{
        alert('Ops algo deu errado')
        return;
      }
    })

    setEmail('');
    setPassword('');
  }
  

  return (
    <View style={StyleSheet.container}>
      <Text style={StyleSheet.texto}>Email</Text>
      <TextInput
      style={StyleSheet.input}
      underLineColorAndroid="transparent"
      onChangeText={(texto) => setEmail(texto) }
      value={email}
      /> 

      <Text style={StyleSheet.texto}>Senha</Text>
      <TextInput
      style={StyleSheet.input}
      underLineColorAndroid="transparent"
      onChangeText={(texto) => setPassword(texto) }
      value={password}
      />

      <Button
      title="Registrar"
      onPress={cadastrar}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    margin: 10,
    padding: 100,
  },
  texo: {
    fontSize: 20,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#121212',
    height: 45,
    fontSize: 17
  }
})