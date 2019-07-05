import React from 'react';
import {
	ResponsiveContainer,
	BarChart,
	XAxis,
	YAxis,
	LabelList,
	Bar,
	Cell,
} from 'recharts';

const Weather = ({ data }) => {
	if(data.hasOwnProperty('message')) return <div>{data.message}</div>;
	const { main, name } = data;
	const { temp, humidity, pressure } = main;
	const d = [
		{ name: 'temp', value: parseFloat(temp) },
		{ name: 'humidity', value: parseFloat(humidity) },
		{ name: 'pressure', value: parseFloat(pressure) },
	]
	const colors = ['#FF7F50', '#00CED1', '#DB7093'];
	return (
		<section className="location">
			<h3>{name === '' ? 'No name area' : name}</h3>
			<ResponsiveContainer width="100%" height={400}>
				<BarChart data={d} barCategoryGap={40}>
					<XAxis dataKey="name"/>
					<YAxis/>
					<Bar dataKey="value">
						<LabelList dataKey="value" position="top"/>
						{d.map(({ name }, i) => 
							<Cell key={`${name}${i}`} fill={colors[i]}/>
						)}
					</Bar>
				</BarChart>
			</ResponsiveContainer>
		</section>
	)
}

export default Weather;
