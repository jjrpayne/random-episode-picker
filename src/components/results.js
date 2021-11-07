import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const ShowResults = ({resultsList=[]}) => (
	<>
	{ resultsList.map((data,index) => {
		if(data) {
			return (
				<div key={data.imdbID}>
					<Card>
						{/*
						<CardMedia
							component="img"
							height="140"
							image={data.Poster}
						/>
						*/}
						<CardContent>
							{data.Title} ({data.Year})
						</CardContent>
					</Card>
				</div>
			)
		}
		return null
	}) }
	</>
)

export default ShowResults
