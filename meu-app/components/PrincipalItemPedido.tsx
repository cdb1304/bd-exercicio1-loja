import { useEffect, useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, FlatList, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native';
import { InterfaceItemPedido } from '../interface/InterfaceItemPedido';
import FormularioItemPedido from './FormularioItemPedido';
import ItemPedidoLista from './ItemPedidoLista';
import { lerItensPedido } from '../api/lerItensPedido';
import { salvarItemPedido } from '../api/salvarItemPedido';
import { excluirItemPedido } from '../api/excluirItemPedido';

const URL: string = 'https://SUA-URL-PUBLICA.app.github.dev/';
const URL_DA_API: string = URL + 'itens-pedido';

export default function PrincipalItemPedido() {
   const [itensPedido, setItensPedido] = useState<InterfaceItemPedido[]>([]);
   const [carregando, setCarregando] = useState<boolean>(true);
   const [idPedido, setIdPedido] = useState<string>('');
   const [idProduto, setIdProduto] = useState<string>('');
   const [quantidade, setQuantidade] = useState<string>('');
   const [precoUnitario, setPrecoUnitario] = useState<string>('');
   const [idEdicao, setIdEdicao] = useState<number | undefined>(undefined);

   const carregar = () => {
      lerItensPedido(URL_DA_API).then((dados) => {
         setItensPedido(dados);
         setCarregando(false);
      });
   };

   const limparFormulario = () => {
      setIdEdicao(undefined);
      setIdPedido('');
      setIdProduto('');
      setQuantidade('');
      setPrecoUnitario('');
   };

   const salvar = async (id: number | undefined, itemPedido: InterfaceItemPedido) => {
      await salvarItemPedido(id, itemPedido, URL_DA_API);
      limparFormulario();
      carregar();
   };

   const excluir = async (id: number) => {
      const removido = await excluirItemPedido(id, URL_DA_API);
      if (removido) {
         if (idEdicao === id) {
            limparFormulario();
         }
         carregar();
      }
   };

   const iniciarEdicao = (itemPedido: InterfaceItemPedido) => {
      setIdEdicao(itemPedido.id);
      setIdPedido(itemPedido.id_pedido.toString());
      setIdProduto(itemPedido.id_produto.toString());
      setQuantidade(itemPedido.quantidade.toString());
      setPrecoUnitario(itemPedido.preco_unitario.toString());
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
               <Text style={estilos.titulo}>Painel CRUD Itens do Pedido (MySQL)</Text>
               <FormularioItemPedido
                  idPedido={idPedido} setIdPedido={setIdPedido}
                  idProduto={idProduto} setIdProduto={setIdProduto}
                  quantidade={quantidade} setQuantidade={setQuantidade}
                  precoUnitario={precoUnitario} setPrecoUnitario={setPrecoUnitario}
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
                     data={itensPedido}
                     keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
                     renderItem={({ item }) => (
                        <ItemPedidoLista
                           item={item}
                           iniciarEdicao={iniciarEdicao}
                           excluirItemPedido={(id) => {
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