import React from 'react';
import { fetchLocation, fetchLatLon } from '../helpers.js';

const Inputs = ({ w, s }) => {
	const postLocation = ({ target }) => {
		const p = target.parentNode;
		const position = p.firstChild.value;
		fetchLocation(position, w, s);
	}
	const postLatLon = ({ target }) => {
		const p = target.parentNode;
		const latitude = p.firstChild.value;
		const longitude = p.children[1].value;
		fetchLatLon({ latitude, longitude }, w, s);
	}
	const prevent = (e) => e.preventDefault();
	return (
		<section className="userInputs">
			<form onSubmit={prevent}>
				<input type="text" name="location" placeholder="location" required/>
				<input type="button" value="submit location" onClick={postLocation}/>
			</form>
			<form onSubmit={prevent}>
				<input id="lat" 
					type="number" 
					name="lat" 
					placeholder="lat -90 <= x <= 90"
				/>
				<input id="lon" 
					type="number" 
						name="lon" 
						placeholder="lon 0 <= x <= 180"
					/>
				<input id="llbtn" type="button" value="submit lat lon" onClick={postLatLon}/>
			</form>
		</section>
	)
}

export default Inputs;
