import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function peru() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Peru de Natal</Text>
      <Text style={styles.text}>
        O Peru de Natal é o prato principal que não pode faltar na ceia. Temperado com ervas e especiarias, é assado lentamente até ficar suculento e dourado. Tradicionalmente, o peru é servido com farofa, arroz à grega e molho de frutas, tornando-se o centro das atenções durante as festividades. Um verdadeiro ícone das celebrações natalinas.
      </Text>
      <View>
      <Image source={require('../assets/peru.jpg')} style={styles.img} />
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
    color: '#388e3c',
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
