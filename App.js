import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, SafeAreaProvider, StyleSheet, Button, View, Text, Alert, Image, TextInput } from 'react-native';
import React from 'react';

const profilePhoto = {
  uri: 'https://preview.redd.it/hyacine-bp-icon-v0-a1upcim6r01f1.jpeg?width=640&crop=smart&auto=webp&s=53b71229254a96ee2928bd2e626e08140211c41d' 
};
const normalGif = {
  uri: 'https://i.redd.it/bc9c02trbv1f1.gif' 
};

export default function App() {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  

  return (
    <View style={styles.container}>
        <StatusBar
          backgroundColor="#61dafb"
        />

      <View style={styles.header}>
        <Text style={styles.title}>Login App (Hyacine)</Text>
      </View>
      
      <Image source={normalGif} style={styles.banner} />
      <Image source={profilePhoto} style={styles.avatar} />

      <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          placeholder="a@b.com"
          value={email}
        />
      <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          placeholder ="password"
          value={password}
      />
      
      <Button style={styles.boton}
          title="Ingresar!"
          color= "#85dcf3"
          onPress={() => Alert.alert('Witness, the will of humanity!')}
        />
      
      <Text style={styles.texto}>¿Olvidaste la contraseña?</Text>
      <Text style={styles.texto}>Crear cuenta</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    width: '100%',
    backgroundColor: '#fee4e8',
    paddingTop: 40,
    paddingBottom: 10,
    alignItems: 'center',
  },

  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 19,
  },

  banner: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    marginTop: 20,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 40,
    marginTop: -40,
    borderWidth: 3,
    borderColor: '#fff',
    backgroundColor: '#eee',
  },
  boton: {
    width: 100
  },

  texto: {
    fontSize: 15,
    marginTop: 10  
  }
  
  ,input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "#7f7f7f",
    borderColor: "#dd3087",
    borderRadius: 3,
    borderWidth: 2
  },
});
