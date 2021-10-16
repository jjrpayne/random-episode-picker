import React, {Component} from 'react';
import TextField from '@mui/material/TextField';
import SearchButton from './searchbutton';

const Search = () => (
	<form action="/" method="get">
		<TextField
			type="text"
			id="tv-search"
			label="Search TV shows..."
			variant="outlined"
			name="s"
			InputProps={{endAdornment: <SearchButton />}}
		/>
	</form>
);

export default Search;
