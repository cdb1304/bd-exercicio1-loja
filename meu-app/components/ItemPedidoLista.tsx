import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { PropriedadesItemPedido } from '../interface/PropriedadesItemPedido';

export default function ItemPedidoLista(props: PropriedadesItemPedido) {
   return (
      <TouchableOpacity
         style={estilos.cartao}
         onPress={() => props.iniciarEdicao(props.item)}
         activeOpacity={0.7}
      >
         <View style={estilos.cabecalhoCartao}>
            <View style={estilos.detalhesItem}>
               <Text style={estilos.itemTitulo}>Pedido #{props.item.id_pedido} — Produto #{props.item.id_produto}</Text>
               <Text style={estilos.itemQuantidade}>Quantidade: {props.item.quantidade}</Text>
            </View>
            <TouchableOpacity
               style={estilos.botaoDeletar}
               onPress={() => props.excluirItemPedido(props.item.id)}
            >
               <Text style={estilos.botaoDeletarTexto}>Excluir</Text>
            </TouchableOpacity>
         </View>

         <View style={estilos.fileiraInfo}>
            <Text style={estilos.itemPreco}>R$ {Number(props.item.preco_unitario).toFixed(2)} / un.</Text>
         </View>
         <Text style={estilos.dicaEdicao}>Toque para editar</Text>
      </TouchableOpacity>
   );
}

const estilos = StyleSheet.create({
   cartao: { backgroundColor: '#fff', padding: 12, borderRadius: 8, marginBottom: 10, elevation: 1 },
   cabecalhoCartao: { flexDirection: 'row', alignItems: 'flex-start' },
   detalhesItem: { flex: 1, minWidth: 0, marginRight: 8 },
   itemTitulo: { fontSize: 16, fontWeight: 'bold', flexShrink: 1 },
   itemQuantidade: { fontSize: 13, color: '#666' },
   botaoDeletar: { backgroundColor: '#d32f2f', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 4 },
   botaoDeletarTexto: { color: '#fff', fontSize: 12, fontWeight: 'bold' },
   fileiraInfo: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8, borderTopWidth: 1, borderTopColor: '#eee', paddingTop: 6 },
   itemPreco: { fontSize: 14, fontWeight: 'bold', color: '#2e7d32' },
   dicaEdicao: { fontSize: 10, color: '#999', textAlign: 'right', marginTop: 4, fontStyle: 'italic' }
});