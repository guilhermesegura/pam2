import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Expo!</Text>
      <Image source={require('./assets/Gengar.png')}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#140033',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 28,
    backgroundColor: '#b380ff',
    padding: 10,
    borderRadius: 8,
  },

});
