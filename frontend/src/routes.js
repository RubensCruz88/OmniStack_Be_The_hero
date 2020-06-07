import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Registros from './pages/Registros'
import Perfil from './pages/Perfil'
import NovoCaso from './pages/NovoCaso'

export default function Routes(){
	return(
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Logon} />
				<Route path="/registro" component={Registros} />

				<Route path="/perfil" component={Perfil} />

				<Route path="/caso/novo" component={NovoCaso} />
			</Switch>
		</BrowserRouter>
	)
} 