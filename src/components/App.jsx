import { hot } from 'react-hot-loader/root';
import React, { useState, useEffect, useMemo } from 'react';
import Inputs from './Inputs.jsx';
import Weather from './Weather.jsx';
import { getCurrentPosition } from '../helpers.js';

const App = () => {
	const [weather, setWeather] = useState(null);
	const [status, setStatus] = useState(null);
	useEffect(() => getCurrentPosition(setWeather, setStatus), []);
	const weatherChild = useMemo(() => <Weather data={weather}/>, [weather]);
	return (
		<main className="container">
			<h2>Weather App</h2>
			<Inputs w={setWeather} s={setStatus}/>
			{!weather ? <div>{status}</div> : weatherChild}
		</main>
	)
}

export default hot(App);
