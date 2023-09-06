import React from 'react';
import './style.scss';
import { render } from '../Hooks';
import { Home } from './Components/home/home';
import { MemoryRouter, Route, Routes } from 'react-router';
import { ButtonBar } from './Components/buttonBar/buttonBar';
import { Map } from './Components/map/map';
import { Airctaft } from './Components/aircraft/aircraft';

import { Browser } from './Components/browser/browser';
import { EfbPower } from '../Common/circuit';
const EFB = () => {
	return (
		<MemoryRouter>
			<EfbPower localVar="EFB_MOVE">
				<div className="EFBContainer">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/Aircraft" element={<Airctaft />} />
						<Route path="/Browser" element={<Browser />} />
						<Route path="/Map" element={<Map />} />
					</Routes>
					<ButtonBar />
				</div>
			</EfbPower>
		</MemoryRouter>
	);
};
render(<EFB />);
