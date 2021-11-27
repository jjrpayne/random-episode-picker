import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './main.css';
import Search from './components/search';
import ShowResults from './components/results';

const API_URL = "http://localhost:3001/get_from_omdb";

function App () {
	const [input, setInput] = useState('');
	const [resultsList, setResultsList] = useState();
	const [showID, setShowID] = useState('');
	
	const updateInput = async(input) => {
		setInput(input);
		setShowID('');
		const query = new URLSearchParams(input).toString();
		fetch(API_URL + '?s=' + query +'*&type=series')
			.then(response => response.json())
			.then(data => setResultsList(data.Search));
	}

	
	const selectShow = (newId, numSeasons) => {
		setShowID(newId);
		setResultsList();
	}
	

	return (
		<div className="App">
			<h1>Random Episode Picker</h1>
			<Search 
				input={input}
				onChange={updateInput}
			/>
			<div className="resultsList">
				<ShowResults
					resultsList={resultsList}
				/>
			</div>
		</div>
	);
}

export default App;
