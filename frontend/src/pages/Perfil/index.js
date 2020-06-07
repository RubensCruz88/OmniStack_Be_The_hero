import React,{ useState,useEffect } from 'react';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import './style.css';
import api from '../../services/api'

export default function Perfil(){
	const [casos,setCasos] = useState([]) 
	const ongId = localStorage.getItem('ongId');
	const ongName = localStorage.getItem('ongName');
	const history = useHistory();

	useEffect(() => {
		api.get('/perfil',{
			headers: {
				authorization: ongId,
			}
		}).then(response => {
			setCasos(response.data)
		})
	},[ongId]);
	
	async function HandleDeleteCaso(id){
		try{
			await api.delete(`casos/${id}`,{
				headers: {
					authorization: ongId,
				}
			});

			setCasos(casos.filter(casos => casos.id !== id))
		} catch(err){
			alert("Erro ao deletar o caso")
		}
	}

	function handleLogout(){
		localStorage.clear();
		history.push('/');
	}

	return(
		<div className="perfil-container">
			<header>
				<img src={logoImg} alt="Be The Hero" />;
				<span>Bem Vinda {ongName}</span>
				<Link className="button" to="/caso/novo">Cadastrar novo caso</Link>
				<button onClick={handleLogout} type="button">
					<FiPower size={18} color="E02041" />
				</button>
			</header>

			<h1>Casos cadastrados</h1>
			<ul>
				{casos.map(caso => (
					<li key={caso.id}>
						<strong>CASO:</strong>
						<p>{caso.titulo}</p>

						<strong>DESCRIÇÃO:</strong>
						<p>{caso.descricao}</p>

						<strong>VALOR:</strong>
						<p>{Intl.NumberFormat('pt-BR',{style: 'currency',currency:'BRL'}).format(caso.valor)}</p>

						<button type="button" onClick={() => HandleDeleteCaso(caso.id)}>
							<FiTrash2 size={20} color="#a8a8b3" />
						</button>
					</li>
				
				))}
			</ul>
		</div>
	)
}