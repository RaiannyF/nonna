import React from 'react';
import AppLoading from 'expo-app-loading';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PaginaCadastro } from './src/pages/PaginaCadastro'
import { PaginaHome } from './src/pages/PaginaHome';
import { PaginaAjuda } from './src/pages/PaginaAjuda';
import { PaginaFamiliar } from './src/pages/PaginaFamiliar';
import { PaginaCaixas } from './src/pages/PaginaCaixas';
import { PaginaBusca } from './src/pages/PaginaBusca';
import { PaginaPerfil } from './src/pages/PaginaPerfil';
import { PaginaCodigoFamiliar } from './src/pages/PaginaCodigoFamiliar';
import { PaginaCodigoIdoso } from './src/pages/PaginaCodigoIdoso';
import { PaginaLocalizacao } from './src/pages/PaginaLocalizacao';
import { PaginaPlano } from './src/pages/PaginaPlano';
import { PaginaCompra } from './src/pages/PaginaCompra';
import { PaginaCompraRealizada } from './src/pages/PaginaCompraRealizada';
import { PaginaEndereco } from './src/pages/PaginaEndereco';
import { PaginaEstabelecimento } from './src/pages/PaginaEstabelecimento';
import { PaginaProduto } from './src/pages/PaginaProduto';
import { PaginaSenha } from './src/pages/PaginaSenha';

const Stack = createNativeStackNavigator();

import {
  useFonts,
  Baloo2_400Regular,
  Baloo2_700Bold
} from '@expo-google-fonts/dev';

import {
  Itim_400Regular,
} from '@expo-google-fonts/itim';

export default function App() {
  const [fontsLoaded] = useFonts({
    Baloo2_400Regular,
    Baloo2_700Bold,
    Itim_400Regular
  });

  if (!fontsLoaded)
    return <AppLoading />

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen
          name="PaginaCadastro"
          component={PaginaCadastro}
          options={{ title: 'Cadastro' }}
        />
        <Stack.Screen
          name="PaginaHome"
          component={PaginaHome}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="PaginaAjuda"
          component={PaginaAjuda}
          options={{ title: 'Ajuda' }}
        />
        <Stack.Screen
          name="PaginaFamiliar"
          component={PaginaFamiliar}
          options={{ title: 'Familiar' }}
        />
        <Stack.Screen
          name="PaginaCaixas"
          component={PaginaCaixas}
          options={{ title: 'Caixas' }}
        />

        <Stack.Screen
          name="PaginaBusca"
          component={PaginaBusca}
          options={{ title: 'Busca' }}
        />

        <Stack.Screen
          name="PaginaPerfil"
          component={PaginaPerfil}
          options={{ title: 'Perfil' }}
        />

        <Stack.Screen
          name="PaginaCodigoFamiliar"
          component={PaginaCodigoFamiliar}
          options={{ title: 'CodigoFamiliar' }}
        />

        <Stack.Screen
          name="PaginaCodigoIdoso"
          component={PaginaCodigoIdoso}
          options={{ title: 'CodigoIdoso' }}
        />

        <Stack.Screen
          name="PaginaLocalizacao"
          component={PaginaLocalizacao}
          options={{ title: 'Localizacao' }}
        />

        <Stack.Screen
          name="PaginaPlano"
          component={PaginaPlano}
          options={{ title: 'Plano' }}
        />

        <Stack.Screen
          name="PaginaCompra"
          component={PaginaCompra}
          options={{ title: 'Compra' }}
        />

        <Stack.Screen
          name="PaginaCompraRealizada"
          component={PaginaCompraRealizada}
          options={{ title: 'CompraRealizada' }}
        />

        <Stack.Screen
          name="PaginaEndereco"
          component={PaginaEndereco}
          options={{ title: 'Endereco' }}
        />

        <Stack.Screen
          name="PaginaEstabelecimento"
          component={PaginaEstabelecimento}
          options={{ title: 'Estabelecimento' }}
        />

        <Stack.Screen
          name="PaginaProduto"
          component={PaginaProduto}
          options={{ title: 'Produto' }}
        />

        <Stack.Screen
          name="PaginaSenha"
          component={PaginaSenha}
          options={{ title: 'Senha' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}