import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './style.css';
import logoImg from '../../assets/logo.svg'
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

export default function NovoCaso(){
	const [titulo, setTitulo] = useState('');
	const [descricao, setDescricao] = useState('');
	const [valor, setValor] = useState('');
	const ongId = localStorage.getItem('ongId');
	const history = useHistory();

	async function HandleNovoCaso(e){
		e.preventDefault();

		const data = {
			titulo,
			descricao,
			valor
		}

		try{
			await api.post('casos',data, {
				headers:{
					Authorization: ongId
				}
			})
			history.push('/perfil')
		} catch(err){
			alert("Erro ao cadastrar caso");
		}
	}

	return (
		<div className="Novo-Caso-Container">
			<div className="conteudo">
				<section>
					<img src={logoImg} alt="Be The Hero" />
					
					<h1>Cadastrar novo caso</h1>
					<p>Descreva o caso detalhadamente para encontrar um herÃ³i para resolvÃª-lo</p>
					
					<Link className="back-link" to="/Perfil">
						<FiArrowLeft size={16} color="#e02041"/>
						Voltar para home
					</Link>
				</section>
				<form onSubmit={HandleNovoCaso}>
					<input placeholder="Titulo do caso" 
					value={titulo}
					onChange={e => setTitulo(e.target.value)}
				/>
					<textarea placeholder="Descrição" 
					value={descricao}
					onChange={e => setDescricao(e.target.value)}
				/>
					<input placeholder="Valor em reais" 
					value={valor}
					onChange={e => setValor(e.target.value)}
				/>

					<button className="button" type="submit">Cadastrar</button>
				</form>
			</div>
		</div>
	)
}
