import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     
      <Image
          style={{ width: 100, height: 150, marginBottom: 15 }}
          source={require("./assets/FunkoSlash.png")}
        />
        <Text style={styles.Grupo}>Grupo teorico: G03T</Text>
      <Text style={styles.Alumno}>Alumno: Martinez Huezo, Lenin Steven</Text>
      <Text style={styles.Lenguaje}>Lenguaje de programacion: C#</Text>
      <Text style={styles.Hobbies}>Hobbies: Aprender musica, dibujar</Text>
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

Grupo:{
  color: 'red',
  fontWeight: 'bold',
  fontStyle: 'italic',
  fontSize: 40
},

Alumno:{
  color: 'green',
  fontWeight: 'lighter',
  fontSize: 30
},

Lenguaje:{
  color: 'purple',
  fontWeight: 'lighter',
  fontSize: 30
},

Hobbies:{
  color: 'blue',
  fontWeight: 'lighter',
  fontSize: 30
},
});
