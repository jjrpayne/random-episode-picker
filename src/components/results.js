import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import noImage from './noImage.png';

const ShowResults = ({resultsList=[], selectShow}) => (
	<>
	{ resultsList.map((data,index) => {
		if(data) {
			return (
				<>
				<div key={data.imdbID} className="result">
					<Card>
						<CardActionArea onClick={() => selectShow(data.imdbID)}>
							<CardContent>
								{(() => {
									if(data.Poster != "N/A") {
										return(
											<img width="300" src={data.Poster} alt={data.Title} />
										)
									} else {
										return(
											<img width="300" src={noImage} alt={data.Title} />
										)
									}
								})()}
								<br />
								{data.Title} ({data.Year})
							</CardContent>
						</CardActionArea>
					</Card>
				</div>
				</>
			)
		}
		return null
	}) }
	</>
)

export default ShowResults
