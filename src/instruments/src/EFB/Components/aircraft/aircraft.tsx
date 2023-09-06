import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import Container from '@mui/material/Container';
import { useSimVar } from '../../../Hooks/simVars';

import './aircraft.scss';

export const Airctaft = () => {

	const [ARSlipway, setARSlipway] = useSimVar('A:SPOILERS HANDLE POSITION', 'bool');
	const [CargoEnterance, setCargoEnterance] = useSimVar('L:KC135_Cargo_door', 'bool');
	const [CrewEnterance, setCrewEnterance] = useSimVar('L:KC135_Crew_enterance', 'bool');


	return (
		<div className="aircraftContainer">
			<Box
				sx={{
					position: 'absolute',
					width: 1040,
					height: 810,
					backgroundImage: 'url(/images/Top_down_2.png)',
					backgroundPosition: 'right',
					backgroundSize: '80%',
					backgroundRepeat: 'no-repeat',
					borderRadius: 4,
					left: 5,
					boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
					color: '#1B93FF',
					justifyContent: 'center',
					display: 'flex',
					textAlign: 'center',
					fontSize: 14,
				}}
			>
				<h1 style={{ marginLeft: 15, color: '#1B93FF' }}>
					Aircraft Customization
				</h1>

				<Box
					sx={{
						position: 'absolute',
						width: 70,
						height: 35,
						backgroundColor: '16161E',
						borderRadius: 1.5,
						left: 850,
						top: 389,
						boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
						color: '#1B93FF',
						justifyContent: 'center',
						display: 'flex',
						flexDirection: 'column',
						textAlign: 'center',
						alignItems: 'center',
						fontSize: 14,
					}}
				>
					<Button
						onClick={() => setARSlipway(!ARSlipway)}
						size="small"
						variant="contained"
						color={ARSlipway ? 'error' : 'success'}
					>
						BOOM
					</Button>
				</Box>
				<Box
					sx={{
						position: 'absolute',
						width: 110,
						height: 35,
						backgroundColor: '16161E',
						borderRadius: 1,
						left: 380,
						top: 415,
						boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
						color: '#1B93FF',
						justifyContent: 'center',
						display: 'flex',
						flexDirection: 'column',
						textAlign: 'center',
						alignItems: 'center',
						fontSize: 14,
					}}
				>
					<Button
						onClick={() => setCargoEnterance(!CargoEnterance)}
						size="small"
						variant="contained"
						color={CargoEnterance ? 'error' : 'success'}
					>
						Cargo Door
					</Button>
				</Box>
				<Box
					sx={{
						position: 'absolute',
						width: 100,
						height: 35,
						backgroundColor: '16161E',
						borderRadius: 1,
						left: 275,
						top: 425,
						boxShadow: '0px 0px 7px rgba(0, 0, 0, 0.699)',
						color: '#1B93FF',
						justifyContent: 'center',
						display: 'flex',
						flexDirection: 'column',
						textAlign: 'center',
						alignItems: 'center',
						fontSize: 14,
					}}
				>
					<Button
						onClick={() => setCrewEnterance(!CrewEnterance)}
						size="small"
						variant="contained"
						color={CrewEnterance ? 'error' : 'success'}
					>
						Crew Door
					</Button>
				</Box>
			</Box>
		</div>
	);
};
