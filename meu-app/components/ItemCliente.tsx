import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { PropriedadesCliente } from '../interface/PropriedadesCliente';

export default function ItemCliente(props: PropriedadesCliente) {
   return (
      <TouchableOpacity
         style={estilos.cartao}
         onPress={() => props.iniciarEdicao(props.item)}
         activeOpacity={0.7}
      >
         <View style={estilos.cabecalhoCartao}>
            <View style={estilos.detalhesCliente}>
               <Text style={estilos.clienteNome}>{props.item.nome}</Text>
               <Text style={estilos.clienteEmail}>{props.item.email}</Text>
            </View>
            <TouchableOpacity
               style={estilos.botaoDeletar}
               onPress={() => props.excluirCliente(props.item.id)}
            >
               <Text style={estilos.botaoDeletarTexto}>Excluir</Text>
            </TouchableOpacity>
         </View>

         <View style={estilos.fileiraInfo}>
            <Text style={estilos.clienteTelefone}>Tel: {props.item.telefone}</Text>
         </View>
         <Text style={estilos.dicaEdicao}>Toque para editar</Text>
      </TouchableOpacity>
   );
}

const estilos = StyleSheet.create({
   cartao: { backgroundColor: '#fff', padding: 12, borderRadius: 8, marginBottom: 10, elevation: 1 },
   cabecalhoCartao: { flexDirection: 'row', alignItems: 'flex-start' },
   detalhesCliente: { flex: 1, minWidth: 0, marginRight: 8 },
   clienteNome: { fontSize: 16, fontWeight: 'bold', flexShrink: 1 },
   clienteEmail: { fontSize: 13, color: '#666' },
   botaoDeletar: { backgroundColor: '#d32f2f', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 4 },
   botaoDeletarTexto: { color: '#fff', fontSize: 12, fontWeight: 'bold' },
   fileiraInfo: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8, borderTopWidth: 1, borderTopColor: '#eee', paddingTop: 6 },
   clienteTelefone: { fontSize: 13, color: '#ed6c02' },
   dicaEdicao: { fontSize: 10, color: '#999', textAlign: 'right', marginTop: 4, fontStyle: 'italic' }
});