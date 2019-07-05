import React from 'react';

const Weather = ({ data }) => {
	const { temperature, humidity, pressure } = data;
	return (
		<section>
			<p>Temperature: {temperature}</p>
			<p>Humidity: {humidity}</p>
			<p>Pressure: {pressure}</p>
		</section>
	)
}

export default Weather;
