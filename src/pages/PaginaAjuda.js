import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView
} from 'react-native';

import fonts from '../styles/fonts';
import colors from '../styles/colors';

import { Header } from '../components/header';
import { Footer } from '../components/footer';

export function PaginaAjuda({ navigation }) {
    return (
        <View style={styles.container} >

            <ScrollView styles={styles.info}>

                <Header
                    title="ajuda" />

                <Text style={styles.title}>Confuso com o aplicativo?{'\n'}Vamos ajudar!</Text>
                <Text style={styles.text}>
                    Preparamos essa página com instruções para utilizar as principais funções do NONNA!
                </Text>

                <Text style={styles.subtitle}>
                    ⠂Home e pessoas conectadas
                </Text>
                <Text style={styles.text}>
                    Na página inicial, estão disponíveis os perfis de todos os seus familiares conectados, onde você poderá encontrar informações como endereço e número de telefone de maneira rápida e fácil para facilitar no seu dia a dia. Para conseguir acessar esses perfis, basta que você clique na foto do familiar desejado e logo será redirecionado a página com todas essas informações.
                </Text>

                <Text style={styles.subtitle}>
                    ⠂Busca
                </Text>
                <Text style={styles.text}>
                    Existem duas formas de fazer uma pesquisa no nosso app. {'\n'}
                    1. Pelos filtros: contamos com 4 filtros no nosso aplicativo, farmácia, hospital, mercado e consultório. Basta clicar em um deles que já aparecerão diversos resultados. {'\n'}
                    2. Pela barra de pesquisa: outra opção é pela barra de pesquisa, basta digitar o nome do estabelecimento desejada e, se ele estiver conectado, aparecerá.
                </Text>

                <Text style={styles.subtitle}>
                    ⠂Perfil e conexão por código
                </Text>
                <Text style={styles.text}>
                    Nas páginas de perfil estão presentes as funções mais importantes para a sua conexão com os familiares. Ao clicar na aba "compartilhar código" você será direcionado para uma página que contará com o código do seu perfil, basta enviá-lo para seu familiar e ele irá utilizar esse no seu  próprio perfil a partir da aba "conectar com código", estabelecendo uma conexão entre vocês, como se fossem amigos do facebook!{'\n'}
                    A partir dessa conexão diversas funcionalidades ficaram disponíveis:{'\n'}
                    - Acesso aos familiares conectados pela página inicial;{'\n'}
                    - Acesso a localização atual do seu dispositivo pelo seu familiar a partir da função "localização atual", disponível no seu perfil para eles;{'\n'}
                    - Assinatura de caixas pelos seus familiares diretamente para você.
                </Text>

                <Text style={styles.subtitle}>
                    ⠂Serviço de localização
                </Text>
                <Text style={styles.text}>
                    Na página de localização por mapa se encontra uma tela disponível apenas para o familiar, que poderá monitorar o deslocamento do idoso cadastrado por meio da conexão com o GPS do dispositivo. A partir desse acompanhamento de locomoção em tempo real, é possível evitar que ele se perca ou tenha sua vida em risco, permitindo também que seja prestado socorro mais rapidamente, caso necessário.
                </Text>

                <Text style={styles.subtitle}>
                    ⠂Compra e contratação de serviços
                </Text>
                <Text style={styles.text}>
                    Não é possível realizar compras ou contratações de serviço diretamente pelo nosso aplicativo. Entretanto, para facilitar o acesso dos idosos a tais estabelecimentos cadastramos eles no aplicativo, bem como seus respectivos produtos, com todas as informações, como preço e telefone, para que funcione como uma ferramenta de intermédio facilitada entre idoso e estabelecimento.</Text>
                
                <Text style={styles.subtitle}>
                    ⠂Caixas
                </Text>
                <Text style={styles.text}>
                    As caixas surpresa NONNA são feitas no modelo de clube por assinatura, ou seja, você assina um plano e todo mês, enquanto a contratação durar, você receberá as caixas na sua casa! Serão 6 itens surpresa para facilitar a vida do idoso, além de trazer um pouco de diversão.{'\n'}
                    São 3 os planos:{'\n'}
                    1. Mensal, que você pode contratar e cancelar a qualquer momento;{'\n'}
                    2. Semestral, que garantirá 6 caixas e que ao cancelar você deverá pagar uma multa  equivalente aos meses que ainda restavam;{'\n'}
                    3. Anual, que garantirá 12 caixas e que ao cancelar você deverá pagar uma multa equivalente aos meses que ainda restavam.{'\n'}
                </Text>
                
                <Text style={[styles.text, { marginBottom: 15 }]}>
                    Para mais informações sobre cada um dos planos, navegue até a página das caixas e leia as informações!
                    </Text>

                <Footer />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    info: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    title: {
        fontFamily: fonts.textB,
        fontSize: 24,
        color: colors.grayText,
        marginHorizontal: 12,
        marginVertical: 20,
        textAlign: 'center'
    },
    subtitle: {
        fontFamily: fonts.textB,
        fontSize: 18,
        color: colors.grayText,
        marginTop: 25,
        marginBottom: 5,
        marginLeft: 30
    },
    text: {
        fontFamily: fonts.text,
        fontSize: 18,
        color: colors.grayText,
        marginHorizontal: 22,
        textAlign: 'justify'
    },
});
