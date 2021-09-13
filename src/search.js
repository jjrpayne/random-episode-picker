const Search = () => {
	return (
		<form action="/" method="get">
			<label htmlFor="tv-search">
				Search TV shows
			</label>
			<input
				type="text"
				id="tv-search"
				placeholder="Search TV shows"
			/>
			<button type="submit">Search</button>
		</form>
	);
}

export default Search;
