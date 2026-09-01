import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import PrincipalCliente from './components/PrincipalCliente';

export default function App() {
   return (
      <View style={estilos.container}>
         <PrincipalCliente />
         <StatusBar style="auto" />
      </View>
   );
}

const estilos = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff'
   }
});
