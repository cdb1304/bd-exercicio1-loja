import { useEffect, useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, FlatList, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native';
import { InterfaceCliente } from '../interface/InterfaceCliente';
import FormularioCliente from './FormularioCliente';
import ItemCliente from './ItemCliente';
import { lerClientes } from '../api/lerCliente';
import { salvarCliente } from '../api/salvarCliente';
import { excluirCliente } from '../api/excluirCliente';

const URL: string = 'https://SUA-URL-PUBLICA.app.github.dev/';
const URL_DA_API: string = URL + 'clientes';

export default function Principal() {
   const [clientes, setClientes] = useState<InterfaceCliente[]>([]);
   const [carregando, setCarregando] = useState<boolean>(true);
   const [nome, setNome] = useState<string>('');
   const [email, setEmail] = useState<string>('');
   const [telefone, setTelefone] = useState<string>('');
   const [idEdicao, setIdEdicao] = useState<number | undefined>(undefined);

   const carregar = () => {
      lerClientes(URL_DA_API).then((dados) => {
         setClientes(dados);
         setCarregando(false);
      });
   };

   const limparFormulario = () => {
      setIdEdicao(undefined);
      setNome('');
      setEmail('');
      setTelefone('');
   };

   const salvar = async (id: number | undefined, cliente: InterfaceCliente) => {
      await salvarCliente(id, cliente, URL_DA_API);
      limparFormulario();
      carregar();
   };

   const excluir = async (id: number) => {
      const removido = await excluirCliente(id, URL_DA_API);
      if (removido) {
         if (idEdicao === id) {
            limparFormulario();
         }
         carregar();
      }
   };

   const iniciarEdicao = (cliente: InterfaceCliente) => {
      setIdEdicao(cliente.id);
      setNome(cliente.nome);
      setEmail(cliente.email);
      setTelefone(cliente.telefone);
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
               <Text style={estilos.titulo}>Painel CRUD Clientes (MySQL)</Text>
               <FormularioCliente
                  nome={nome} setNome={setNome}
                  email={email} setEmail={setEmail}
                  telefone={telefone} setTelefone={setTelefone}
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
                     data={clientes}
                     keyExtractor={(item) => item.id?.toString() || Math.random().toString()}
                     renderItem={({ item }) => (
                        <ItemCliente
                           item={item}
                           iniciarEdicao={iniciarEdicao}
                           excluirCliente={(id) => {
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