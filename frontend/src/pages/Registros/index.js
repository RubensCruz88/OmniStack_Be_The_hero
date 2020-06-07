import React, { useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import api from '../../services/api'
import { FiArrowLeft } from 'react-icons/fi';
import './style.css';
import logoImg from '../../assets/logo.svg'

export default function Registros(){
	const [name,setNome] = useState('');
	const [email,setEmail] = useState('');
	const [whatsapp,setWhatsapp] = useState('');
	const [city,setCidade] = useState('');
	const [uf,setUF] = useState('');

	const history = useHistory();

	async function handleRegistro(e){
		e.preventDefault();

		const dados = {
			name,
			email,
			whatsapp,
			city,
			uf,
		};

		try{
			const response = await api.post('ongs',dados);

			alert(`Seu id de acesso: ${response.data.id}`);

			history.push('/');
		} catch(err){
			alert("erro no cadastro tente novamente");
		}
	}

	return (
		<div className="cadastro-container">
			<div className="conteudo">
				<section>
					<img src={logoImg} alt="Be The Hero" />
					
					<h1>Cadastro</h1>
					<p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos de sua ONG.</p>
					
					<Link className="back-link" to="/">
						<FiArrowLeft size={16} color="#e02041"/>
						NÃ£o tenho cadastro
					</Link>
				</section>
				<form onSubmit={handleRegistro}> 
					<input 
						placeholder="Nome da ONG" 
						value={name}
						onChange={e => setNome(e.target.value)}
					/>
					<input 
						type="email"
						placeholder="E-mail"
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					<input 
						placeholder="WhatsApp"
						value={whatsapp}
						onChange={e => setWhatsapp(e.target.value)}
					/>

					<div className="input-group">
						<input 
							placeholder="Cidade"
							value={city}
							onChange={e => setCidade(e.target.value)}
						/>
						<input 
							placeholder="UF" 
							style={{ width: 80 }}
							value={uf}
							onChange={e => setUF(e.target.value)}
							/>
					</div>
					<button className="button" type="submit">Cadastrar</button>
				</form>
			</div>
		</div>
	)
}