import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './main.css';
import Search from './components/search';
import ShowResults from './components/results';
import ShowEpisode from './components/episode';

const API_URL = "http://localhost:3001/get_from_omdb";

function App () {
	const [input, setInput] = useState('');
	const [resultsList, setResultsList] = useState();
	const [showID, setShowID] = useState('');
	const [showData, setShowData] = useState();
	const [episodeData, setEpisodeData] = useState();
	
	const updateInput = async(input) => {
		setInput(input);
		setShowID('');
		const query = new URLSearchParams(input).toString();
		fetch(API_URL + '?s=' + query +'*&type=series')
			.then(response => response.json())
			.then(data => setResultsList(data.Search));
	}

	
	const selectShow = (newId) => {
		setShowID(newId);
		fetch(API_URL + '?i=' + newId)
			.then(response => response.json())
			.then(data => {
				setShowData(data);
				selectEpisode(data);
			});
		setResultsList();
	}

	const selectEpisode = (sData) => {
		if(sData.totalSeasons != "N/A"){
			var season = Math.floor(Math.random() * sData.totalSeasons) + 1;
			fetch(API_URL + '?i=' + sData.imdbID + '&season=' + season.toString())
				.then(response => response.json())
				.then(data => {
					var episode = Math.floor(Math.random() * data.Episodes.length);
					fetch(API_URL + '?i=' + data.Episodes[episode].imdbID)
						.then(response => response.json())
						.then(newData => setEpisodeData(newData));
				});
		} else {
			setEpisodeData({
				Title: "No episodes found.",
				Season: "?",
				Episode: "?",
				Plot: "Unfortunately, we could not find any episodes for this program. Please select another title.",
				Poster: "N/A"
			});
		}
	}
	

	return (
		<div className="App">
			<h1>Random Episode Picker</h1>
			<Search 
				input={input}
				onChange={updateInput}
			/>
			<br />
			{(() => {
				if (showID == '') {
					return(
						<div className="resultsList">
							<ShowResults
								resultsList={resultsList}
								selectShow={selectShow}
							/>
						</div>
					)
				} else {
					return(
						<div className="episodeInfo">
							<ShowEpisode
								showData={showData}
								episodeData={episodeData}
								selectEpisode={selectEpisode}
							/>
						</div>
					)
				}
			})()}
		</div>
	);
}

export default App;
