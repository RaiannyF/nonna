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

      </Stack.Navigator>
    </NavigationContainer>
  )
}