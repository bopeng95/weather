import { hot } from 'react-hot-loader/root';
import React, { useState, useEffect } from 'react';
import Weather from './Weather.jsx';
import { getCurrentPosition } from '../helpers.js';

const App = () => {
	const [weather, setWeather] = useState(null);
	const [status, setStatus] = useState(null);
	useEffect(() => getCurrentPosition(setWeather, setStatus), []);
	return (
		<main className="container">
			<h2>Weather App</h2>
			{!weather ? <div>{status}</div> : <Weather data={weather}/> }
		</main>
	)
}

export default hot(App);
