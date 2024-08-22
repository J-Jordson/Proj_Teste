import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import firebase from '../../Services/firebaseConfig';

console.disableYellowBox=true

export default function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');




  async function logar(){
    await firebase.auth().signInWithEmailAndPassword(email, password)
    .then( (userCredential) => {
      const user = userCredential.user;

      console.log(user);
      setUser(user);
      
    })
    .catch( (error) => {
        alert('Ops algo deu errado')
        return;
  
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
      title="Login"
      onPress={logar}
      />

      <Text style={{margin: 50, fontSize: 23}}>
        {user}
      </Text>

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