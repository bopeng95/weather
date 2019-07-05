const { appid } = require('./config.json');
const url = 'https://api.openweathermap.org/data/2.5/weather';

const lonlat = ({ longitude, latitude }) => 
	`${url}?lat=${latitude}&lon=${longitude}&appid=${appid}`;
const loc = (pos) => `${url}?q=${loc}&appid=${appid}`;
const options = {
	enableHighAccuracy: true,
	timeout: 10000,
}

module.exports = {
	getCurrentPosition: function(weather, error) {
		navigator.geolocation.getCurrentPosition((pos) => {
			const { coords } = pos;
			const { latitude, longitude } = coords;
			const position = lonlat({ longitude, latitude });
			fetch(position)
			.then(res => res.json())
			.then(data => console.log(data))
			.catch(err => error(err.message));
		}, (err) => error(err.message), options);
	},
}
