import React from 'react';
import { View,FlatList ,Image ,Text , TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import styles from './styles';
import logoImg from '../../assets/logo.png';

export default function Detalhes(){
	const navigation = useNavigation();
	const route = useRoute();

	const caso = route.params.caso;
	const mensagem = `Olá ${caso.name}, estou entrando em contato sobre o caso "${caso.titulo}" com o valor de ${Intl.NumberFormat('pt-BR',{ style: 'currency',currency:'BRL'}).format(caso.valor)}`

	function navigateVoltar(){
		navigation.goBack();
	}

	function EnviaEmail(){
		MailComposer.composeAsync({
			subject: `Heroi do caso: ${caso.titulo}`,
			recipients: [caso.email],
			body: mensagem
		})
	}

	function EnviaWhatsapp(){
		Linking.openURL(`whatsapp://send?phone=55${caso.whatsapp}&text=${mensagem}`);
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image source={logoImg} />

				<TouchableOpacity onPress={navigateVoltar}>
					<Feather name="arrow-left" size={28} color="#E92041" />
				</TouchableOpacity>
			</View>

			<View style={styles.casos}>
			<Text style={[styles.propriedadeCaso,{marginTop: 0}]}>ONG: </Text>
				<Text style={styles.valorCaso}>{caso.name} de {caso.city}/{caso.uf}</Text>

				<Text style={styles.propriedadeCaso}>CASO: </Text>
				<Text style={styles.valorCaso}>{caso.descricao}</Text>

				<Text style={styles.propriedadeCaso}>VALOR: </Text>
				<Text style={styles.valorCaso}>{Intl.NumberFormat('pt-BR',{ 
								style: 'currency',
								currency:'BRL'}).format(caso.valor)}</Text>

			</View>
			<View style={styles.contatoContainer}>
				<Text style={styles.heroTitulo}>Salve o Dia!</Text>
				<Text style={styles.heroTitulo}>Seja o heroi desse caso.</Text>
				<Text style={styles.heroDescricao}>Entre em Contato</Text>

				<View style={styles.acao}>
					<TouchableOpacity style={styles.BotaoAcao} onPress={EnviaWhatsapp}>
						<Text style={styles.textoAcao}>WhatsApp</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.BotaoAcao} onPress={EnviaEmail}>
						<Text style={styles.textoAcao}>E-mail</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}