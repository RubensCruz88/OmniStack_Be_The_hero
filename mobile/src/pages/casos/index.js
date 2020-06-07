import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { View,FlatList ,Image,Text , TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Casos(){
	const [casos, setCasos] = useState([]);
	const [totalCasos, setTotalCasos] = useState(0);
	const [page,setPage] = useState(1);
	const [loading, setLoading] = useState(false);
	const navegacao = useNavigation();

	function navegarParaDetalhe(caso){
		navegacao.navigate('Detalhes',{caso}); 
	}

	async function carregaCasos(){
		if (loading){
			return;
		}

		if (totalCasos > 0 && casos.length == totalCasos){
			return;
		}

		setLoading(true);

		const response = await api.get('casos',{ params: {page} });
		setCasos([...casos,...response.data]);
		setTotalCasos(response.headers['x-total-count']);
		setPage(page + 1);
		setLoading(false);
	}

	useEffect(() => {
		carregaCasos();
	},[])

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Image source={logoImg} />
				<Text style={styles.headerText}>
					Total de <Text style={styles.headerTextNegrito}>{totalCasos} casos</Text>.
				</Text>
			</View>
			<Text style={styles.titulo}>Bem Vindo</Text>
			<Text style={styles.descricao}>Escolha um dos casos abaixo e salve o dia</Text>

			<FlatList 
				style={styles.listaCasos}
				data={casos}
				keyExtractor={casos => String(casos.id)}
				showsVerticalScrollIndicator={false}
				onEndReached={carregaCasos}
				onEndReachedThreshold={0.2}
				renderItem={({ item: casos }) => (
					<View style={styles.casos}>
						<Text style={styles.propriedadeCaso}>ONG: </Text>
						<Text style={styles.valorCaso}>{casos.name}</Text>

						<Text style={styles.propriedadeCaso}>CASO: </Text>
						<Text style={styles.valorCaso}>{casos.titulo}</Text>

						<Text style={styles.propriedadeCaso}>VALOR: </Text>
						<Text style={styles.valorCaso}>
							{Intl.NumberFormat('pt-BR',{ 
								style: 'currency',
								currency:'BRL'}).format(casos.valor)}
						</Text>

						<TouchableOpacity style={styles.botaoDetalhes} onPress={() => navegarParaDetalhe(casos)}>
							<Text style={styles.detalheBotaoTexto}>Ver mais detalhes</Text>
							<Feather name="arrow-right" size={16} colod="e02041"></Feather>
						</TouchableOpacity>
					</View>
				)}
			/>

 		</View>
	);
}