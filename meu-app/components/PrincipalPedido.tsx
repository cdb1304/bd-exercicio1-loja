import { useEffect, useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, FlatList, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native';
import { InterfacePedido } from '../interface/InterfacePedido';
import FormularioPedido from './FormularioPedido';
import ItemPedido from './ItemPedido';
import { lerPedidos } from '../api/lerPedido';
import { salvarPedido } from '../api/salvarPedido';
import { excluirPedido } from '../api/excluirPedido';

const URL: string = 'https://SUA-URL-PUBLICA.app.github.dev/';
const URL_DA_API: string = URL + 'pedidos';

export default function PrincipalPedido() {
   const [pedidos, setPedidos] = useState<InterfacePedido[]>([]);
   const [carregando, setCarregando] = useState<boolean>(true);
   const [dataPedido, setDataPedido] = useState<string>('');
   const [valorTotal, setValorTotal] = useState<string>('');
   const [idCliente, setIdCliente] = useState<string>('');
   const [idEdicao, setIdEdicao] = useState<number | undefined>(undefined);

   const carregar = () => {
      lerPedidos(URL_DA_API).then((dados) => {
         setPedidos(dados);
         setCarregando(false);
      });
   };

   const limparFormulario = () => {
      setIdEdicao(undefined);
      setDataPedido('');
      setValorTotal('');
      setIdCliente('');
   };

   const salvar = async (id: number | undefined, pedido: InterfacePedido) => {
      await salvarPedido(id, pedido, URL_DA_API);
      limparFormulario();
      carregar();
   };

   const excluir = async (id: number) => {
      const removido = await excluirPedido(id, URL_DA_API);
      if (removido) {
         if (idEdicao === id) {
            limparFormulario();
         }
         carregar();
      }
   };

   const iniciarEdicao = (pedido: InterfacePedido) => {
      setIdEdicao(pedido.id);
      setDataPedido(pedido.data_pedido);
      setValorTotal(pedido.valor_total?.toString() || '');
      setIdCliente(pedido.id_cliente.toString());
   };

   useEffect(() => {
      carregar();
   }, []);

   return (
      <SafeAreaProvider>
         <KeyboardAvoidingView
            style={estilos.teclado}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
         >
            <SafeAreaView style={estilos.container}>
               <Text style={estilos.titulo}>Painel CRUD Pedidos (MySQL)</Text>
               <FormularioPedido
                  dataPedido={dataPedido} setDataPedido={setDataPedido}
                  valorTotal={valorTotal} setValorTotal={setValorTotal}
                  idCliente={idCliente} setIdCliente={setIdCliente}
                  idEdicao={idEdicao}
                  salvarDados={salvar}
                  limparFormulario={limparFormulario}
               />

               {carregando ? (
                  <ActivityIndicator size="large" color="#0000ff" />
               ) : (
                  <FlatList
                     style={estilos.lista}
                     contentContainerStyle={estilos.conteudoLista}
                     data={pedidos}
                     keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
                     renderItem={({ item }) => (
                        <ItemPedido
                           item={item}
                           iniciarEdicao={iniciarEdicao}
                           excluirPedido={(id) => {
                              if (id !== undefined) {
                                 excluir(id);
                              }
                           }}
                        />
                     )}
                  />
               )}
            </SafeAreaView>
         </KeyboardAvoidingView>
      </SafeAreaProvider>
   );
}

const estilos = StyleSheet.create({
   teclado: { flex: 1 },
   container: { flex: 1, width: '100%', backgroundColor: '#f5f5f5', paddingHorizontal: 16, paddingTop: 10 },
   lista: { flex: 1, width: '100%' },
   conteudoLista: { paddingBottom: 24 },
   titulo: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 12 }
});