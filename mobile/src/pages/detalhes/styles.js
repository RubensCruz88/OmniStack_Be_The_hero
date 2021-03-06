import { StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
	container: {
		flex:1,
		paddingHorizontal: 24,
		paddingTop: Constants.statusBarHeight + 20,
	},
	header:{
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	casos:{
		padding: 24,
		borderRadius: 8,
		backgroundColor: '#FFF',
		marginTop: 48

	},
	propriedadeCaso: {
		fontSize: 14,
		color: '#414d',
		fontWeight: 'bold',
		marginTop: 24
	},
	valorCaso: {
		marginTop: 8,
		fontSize: 15,
		color: '#737380'
	},
	contatoContainer: {
		padding: 24,
		borderRadius: 8,
		backgroundColor: '#FFF',
		marginBottom: 16
	},
	heroTitulo: {
		fontWeight: 'bold',
		fontSize: 20,
		color: '#13131A',
		lineHeight: 30
	},
	heroDescricao:{
		fontSize: 15,
		color: '#737380',
		marginTop: 16
	},
	acao:{
		marginTop: 16,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	BotaoAcao:{
		backgroundColor: '#E02041',
		borderRadius: 8,
		height: 50,
		width: '48%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	textoAcao:{
		color: '#FFF',
		fontSize: 15,
		fontWeight: 'bold'
	}

})