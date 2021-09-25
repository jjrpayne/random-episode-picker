import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/search';
const API_URL = "http://localhost:3001/get_from_omdb"

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			results: [],
			query: ''
		}
	}
	
	componentDidMount() {
		fetch(API_URL + '?s=star+trek' + '&type=series')
			.then(data => data.json())
			.then(results => this.setState( {results} ));
	}

	render() {
		console.log(this.state.results);
		return (
			<div className="App">
				<Search />
			</div>
		);
	}
}

export default App;
