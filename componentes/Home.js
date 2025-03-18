import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

export default function Home(props) {
    return (
        <ImageBackground 
            source={require('../assets/fundo-natal.jpg')}  
            style={estilo.container}  
        >
            <SafeAreaView style={estilo.safeContainer}>
                <Text style={estilo.titulo}>Receitas de Natal</Text>
                <Text style={estilo.texto}>Delícias para sua ceia de Natal.</Text>

                <View>
                    <TouchableOpacity style={estilo.button} onPress={() => props.navigation.navigate('peru')}>
                        <Text style={estilo.textButton}>Peru de Natal</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={estilo.button} onPress={() => props.navigation.navigate('Pave')}>
                        <Text style={estilo.textButton}>Pavê de Natal</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',  
        alignItems: 'center',     
    },
    safeContainer: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        borderRadius: 10,  
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#d32f2f',  
        marginBottom: 20,  
    },
    texto: {
        fontSize: 18,
        color: '#FFF',  
        textAlign: 'center',  
        marginBottom: 30,
    },
    button: {
        margin: 10,
        padding: 15,
        backgroundColor: '#388e3c',  
        borderRadius: 10,
        alignItems: 'center',
        width: 250,  
    },
    textButton: {
        fontSize: 18,
        color: '#fff',  
    },
});
