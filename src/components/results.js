import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const ShowResults = ({resultsList=[], }) => (
	<>
	{ resultsList.map((data,index) => {
		if(data) {
			return (
				<>
				<div key={data.imdbID} className="result">
					<Card>
						<CardContent>
							{data.Title} ({data.Year})
						</CardContent>
					</Card>
				</div>
				<br />
				</>
			)
		}
		return null
	}) }
	</>
)

export default ShowResults
