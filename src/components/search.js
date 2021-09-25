import TextField from '@mui/material/TextField'

const Search = (props) => (
	<form action="/" method="get">
		<TextField
			type="text"
			id="tv-search"
			label="Search TV shows..."
			variant="standard"
		/>
	</form>
);

export default Search;
