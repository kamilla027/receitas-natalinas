import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function Pave() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Pavê de Natal</Text>
      <Text style={styles.text}>
        O pavê de Natal é uma sobremesa simples e deliciosa, feita com camadas de biscoito, creme e frutas ou chocolate. A versão natalina é geralmente feita com frutas vermelhas e chocolate, dando um toque especial à mesa de Natal. Ele é gelado, o que o torna uma opção refrescante para equilibrar as comidas mais pesadas da ceia.
      </Text>
      <View>
      <Image source={require('../assets/pave.jpeg')} style={styles.img} />
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#d32f2f',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
  },
  img: {
    width: 350,   
    height: 350,  
    resizeMode: 'contain', 
    alignSelf: 'center', 
    marginVertical: 20,  
  },
});
