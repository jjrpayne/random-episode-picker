import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const ShowResult = (props) => (
	<Card>
		<CardContent>
			{this.props.title} ({this.props.year})
		</CardContent>
	</Card>
);

export default ShowResult
