import React from 'react';

const Weather = ({ data }) => {
	if(data.hasOwnProperty('message')) return <div>{data.message}</div>;
	const { main, name } = data;
	const { temp, humidity, pressure } = main;
	console.log(data);
	return (
		<section className="location">
			<h3>{name === '' ? 'No name area' : name}</h3>
			<p>Temperature: {temp}</p>
			<p>Humidity: {humidity}</p>
			<p>Pressure: {pressure}</p>
		</section>
	)
}

export default Weather;
