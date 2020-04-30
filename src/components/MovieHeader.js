import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './MovieHeader.css';

const MovieHeader = () => {
	const [ headerData, setHeaderData ] = useState({ data: '' });
	const [ topNowPlaying, setTopNowPlaying ] = useState({ movie: '' });

	const apiUrl = 'https://api.themoviedb.org/3';
	const imgApiUrl = 'https://image.tmdb.org/t/p/original';
	const api_key = `?api_key=574023be41c6bdeb5c6c590c606ccb29`;

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(`${apiUrl}/movie/now_playing?api_key=574023be41c6bdeb5c6c590c606ccb29`);
			setHeaderData(result.data.results[0]);
			console.log(headerData);
		};
		fetchData();
	}, []);

	const divStyle = {
		backgroundImage: `url(${imgApiUrl}${headerData.backdrop_path}${api_key})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		height: '100vh',
		display: 'flex'
	};

	return (
		<div style={divStyle}>
			<div className="center-it">
				<h1 className="title headerText">{`${headerData.title}`}</h1>
				<p className="p-text">{`${headerData.overview}`}</p>
			</div>
		</div>
	);
};

export default MovieHeader;
