import React, {Component} from 'react';
import TextField from '@mui/material/TextField';
import SearchButton from './searchbutton';

const Search = ({input:keyword, onChange:setKeyword}) => (
	<TextField
		type="text"
		id="tv-search"
		label="Search TV shows..."
		variant="outlined"
		value={keyword}
		InputProps={{endAdornment: <SearchButton />}}
		onChange={(e) => setKeyword(e.target.value)}
	/>
);

export default Search;
