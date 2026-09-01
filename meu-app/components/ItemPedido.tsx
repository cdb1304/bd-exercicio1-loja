import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { PropriedadesPedido } from '../interface/PropriedadesPedido';

export default function ItemPedido(props: PropriedadesPedido) {
   return (
      <TouchableOpacity
         style={estilos.cartao}
         onPress={() => props.iniciarEdicao(props.item)}
         activeOpacity={0.7}
      >
         <View style={estilos.cabecalhoCartao}>
            <View style={estilos.detalhesPedido}>
               <Text style={estilos.pedidoData}>Pedido #{props.item.id} — {props.item.data_pedido}</Text>
               <Text style={estilos.pedidoCliente}>Cliente ID: {props.item.id_cliente}</Text>
            </View>
            <TouchableOpacity
               style={estilos.botaoDeletar}
               onPress={() => props.excluirPedido(props.item.id)}
            >
               <Text style={estilos.botaoDeletarTexto}>Excluir</Text>
            </TouchableOpacity>
         </View>

         <View style={estilos.fileiraInfo}>
            <Text style={estilos.pedidoValor}>R$ {Number(props.item.valor_total).toFixed(2)}</Text>
         </View>
         <Text style={estilos.dicaEdicao}>Toque para editar</Text>
      </TouchableOpacity>
   );
}

const estilos = StyleSheet.create({
   cartao: { backgroundColor: '#fff', padding: 12, borderRadius: 8, marginBottom: 10, elevation: 1 },
   cabecalhoCartao: { flexDirection: 'row', alignItems: 'flex-start' },
   detalhesPedido: { flex: 1, minWidth: 0, marginRight: 8 },
   pedidoData: { fontSize: 16, fontWeight: 'bold', flexShrink: 1 },
   pedidoCliente: { fontSize: 13, color: '#666' },
   botaoDeletar: { backgroundColor: '#d32f2f', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 4 },
   botaoDeletarTexto: { color: '#fff', fontSize: 12, fontWeight: 'bold' },
   fileiraInfo: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8, borderTopWidth: 1, borderTopColor: '#eee', paddingTop: 6 },
   pedidoValor: { fontSize: 14, fontWeight: 'bold', color: '#2e7d32' },
   dicaEdicao: { fontSize: 10, color: '#999', textAlign: 'right', marginTop: 4, fontStyle: 'italic' }
});