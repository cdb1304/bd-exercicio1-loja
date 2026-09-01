import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { PropriedadesFormularioPedido } from '../interface/PropriedadesFormularioPedido';
import { InterfacePedido } from '../interface/InterfacePedido';

export default function FormularioPedido(props: PropriedadesFormularioPedido) {
   return (
      <View style={[estilos.formulario, props.idEdicao !== undefined && estilos.formularioEdicao]}>
         <Text style={estilos.formularioTitulo}>
            {props.idEdicao !== undefined ? 'Editando Registro' : 'Novo Pedido'}
         </Text>

         <TextInput
            style={estilos.entradaTexto}
            placeholder="Data do Pedido (AAAA-MM-DD)"
            value={props.dataPedido}
            onChangeText={props.setDataPedido}
         />

         <View style={estilos.fileiraCampos}>
            <TextInput
               style={[estilos.entradaTexto, { flex: 1, marginRight: 8 }]}
               placeholder="Valor Total"
               keyboardType="numeric"
               value={props.valorTotal}
               onChangeText={props.setValorTotal}
            />
            <TextInput
               style={[estilos.entradaTexto, { flex: 1 }]}
               placeholder="ID do Cliente"
               keyboardType="numeric"
               value={props.idCliente}
               onChangeText={props.setIdCliente}
            />
         </View>

         <View style={estilos.fileiraAcoes}>
            <TouchableOpacity
               style={[estilos.botao, props.idEdicao !== undefined
                  ? estilos.botaoLaranja
                  : estilos.botaoVerde]}
               onPress={() => {
                  const pedido: InterfacePedido = {
                     id: props.idEdicao,
                     data_pedido: props.dataPedido,
                     valor_total: parseFloat(props.valorTotal) || 0,
                     id_cliente: parseInt(props.idCliente) || 0
                  };
                  props.salvarDados(props.idEdicao, pedido);
               }}
            >
               <Text style={estilos.botaoTexto}>
                  {props.idEdicao !== undefined ? 'Atualizar no MySQL' : 'Salvar no MySQL'}
               </Text>
            </TouchableOpacity>

            {props.idEdicao !== undefined && (
               <TouchableOpacity style={estilos.botaoCancelar} onPress={props.limparFormulario}>
                  <Text style={estilos.cancelarTexto}>Cancelar</Text>
               </TouchableOpacity>
            )}
         </View>
      </View>
   );
}

const estilos = StyleSheet.create({
   formulario: { backgroundColor: '#fff', padding: 12, borderRadius: 8, marginBottom: 15, elevation: 2, borderWidth: 1, borderColor: '#eee' },
   formularioEdicao: { borderColor: '#ed6c02', backgroundColor: '#fffbf7' },
   formularioTitulo: { fontSize: 14, fontWeight: 'bold', color: '#555', marginBottom: 8 },
   entradaTexto: { backgroundColor: '#f9f9f9', borderWidth: 1, borderColor: '#ddd', padding: 8, borderRadius: 5, marginBottom: 8 },
   fileiraCampos: { flexDirection: 'row' },
   fileiraAcoes: { flexDirection: 'row', marginTop: 4 },
   botao: { flex: 2, padding: 12, borderRadius: 5, alignItems: 'center' },
   botaoVerde: { backgroundColor: '#2e7d32' },
   botaoLaranja: { backgroundColor: '#ed6c02' },
   botaoCancelar: { flex: 1, backgroundColor: '#777', padding: 12, borderRadius: 5, alignItems: 'center', marginLeft: 8 },
   botaoTexto: { color: '#fff', fontWeight: 'bold' },
   cancelarTexto: { color: '#fff', fontWeight: 'bold' }
});