import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './container/login/Login';
import Signup from './container/login/Signup';
import Home from './container/Home/Home';
import BarcodePayment from './container/Barcode/BarcodePayment';
import Detail from './container/Home/Detail';
import ScanScreen from './container/Qrcode/QrCode';

export default class Routes extends Component{
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <Scene key="login" component={Login} title="Login" />
						<Scene key="home" component={Home} title="HOME" initial={true}/>
						<Scene key="detail" component={Detail} title="Detail"/>
						<Scene key="barcode" component={ScanScreen} title="QRCODE"/>
			    </Stack>
			 </Router>
			)
	}
}