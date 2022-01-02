import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import noImage from './noImage.png';

const ShowEpisode = ({showData=[], episodeData=[], selectEpisode}) => (
	<>
		<Card className="episodeCard">
			<CardContent>
				<h1>{episodeData.Title}</h1>
				<Grid container spacing={2}>
					<Grid item lg={3} md={6}>
					{(() => {
						if(episodeData.Poster != "N/A") {
							return(
								<img width="300" src={episodeData.Poster} alt={episodeData.Title} />
							)
						} else if(showData.Poster != "N/A") {
							return(
								<img width="300" src={showData.Poster} alt={episodeData.Title} />
							)
						} else {
							return(
								<img width="300" src={noImage} alt={episodeData.Title} />
							)
						}
					})()}
					</Grid>
					<Grid item lg={9} md={6}>
						<div className="epDescription">
							<h2>{showData.Title}</h2>
							<h3>Season {episodeData.Season}, Episode {episodeData.Episode}</h3>
							<p><i>{episodeData.Plot}</i></p>
						</div>
					</Grid>
				</Grid>
			</CardContent>
			<CardActions>
				<Button size="small" onClick={() => selectEpisode(showData)}>Pick Another Episode</Button>
			</CardActions>
		</Card>
	</>
)

export default ShowEpisode;
