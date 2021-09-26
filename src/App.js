import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import ShowResult from './components/results'

const API_URL = "http://localhost:3001/get_from_omdb";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			results: [],
			query: ''
		}
		this.updateQuery = this.updateQuery.bind(this);
	}
	
	componentDidMount() {
		/*
		fetch(API_URL + '?s=star+trek' + '&type=series')
			.then(data => data.json())
			.then(results => this.setState( {results} ));
		*/
	}

	updateQuery(event){
		this.setState({query: event.target.value});
		console.log(this.state.query);
		if (this.state.query.length > 3) {
			this.state.query.replace(/ /g, '+');
			fetch(API_URL + '?s=' + this.state.query + '*&type=series')
				.then(data => data.json())
				.then(results => this.setState({results}));
		}
	}

	render() {
		console.log(this.state.results);
		return (
			<div className="App">
			<h1>Random Episode Picker</h1>
				<TextField
					type="text"
					id="tv-search"
					label="Search TV shows..."
					variant="standard"
					value={this.state.query}
					onChange={this.updateQuery}
				/>
				{this.state.results.Response == "True" ? (
					this.state.results.Search.map(series => (
						<ShowResult title={series.Title} year={series.Year} poster={series.Poster} key={series} />
					))
				) : (
					<p>No results available.</p>
				)
				}
			</div>
		);
	}
}

export default App;
