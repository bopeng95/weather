const { appid } = require('./config.json');
const url = 'https://api.openweathermap.org/data/2.5/weather';
const load = 'Retrieving weather...';

const lonlat = ({ longitude, latitude }) => 
	`${url}?lat=${latitude}&lon=${longitude}&appid=${appid}`;
const loc = (pos) => `${url}?q=${pos}&appid=${appid}`;
const options = {
	enableHighAccuracy: true,
	timeout: 10000,
}

function fetching(pos, w, s) {
	fetch(pos)
	.then(res => res.json())
	.then(data => w(data))
	.then(() => s(null))
	.catch(err => s(err.message));
}

module.exports = {
	getCurrentPosition: function(weather, status) {
		status(load);
		navigator.geolocation.getCurrentPosition((pos) => {
			const { coords } = pos;
			const { latitude, longitude } = coords;
			const position = lonlat({ longitude, latitude });
			fetching(position, weather, status);
		}, (err) => status(err.message), options);
	},
	fetchLocation: function(pos, weather, status) {
		status(load);
		const position = loc(pos);
		fetching(position, weather, status);
	},
	fetchLatLon: function(pos, weather, status) {
		status(load);
		const position = lonlat(pos);
		fetching(position, weather, status);
	}
}
