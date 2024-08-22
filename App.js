import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import firebase from './src/Services/firebaseConfig';

console.disableYellowBox=true

export default function App() {


  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');


  useEffect(()=> {

    async function dados(){


    

    }

    dados();
  
  }, []);


  async function cadastrar(){
    if(nome !== '' & cargo !== ''){
      let usuarios = await firebase.database().ref('usuarios');
      let chave = usuarios.push().key;

      usuarios.child(chave).set({
        nome: nome,
        cargo: cargo
      });

      alert('Cadastrado com sucesso');
      setCargo('');
      setNome('');
    }

  }
  

  return (
    <View style={StyleSheet.container}>
      <Text style={StyleSheet.texto}>Nome</Text>
      <TextInput
      style={StyleSheet.input}
      underLineColorAndroid="transparent"
      onChangeText={(texto) => setNome(texto) }
      value={nome}
      /> 

      <Text style={StyleSheet.texto}>Cargo</Text>
      <TextInput
      style={StyleSheet.input}
      underLineColorAndroid="transparent"
      onChangeText={(texto) => setCargo(texto) }
      value={cargo}
      />

      <Button
      title="Novo funcionario"
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