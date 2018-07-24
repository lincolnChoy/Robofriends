import React from 'react';
import Card from './Card';


const CardList = (props) => {
	
	const { robots } = props;

	return (

		<div>
			<Card id = {robots[0].id} name = {robots[0].name} email = {robots[0].email} />
		</div>
	);
}

export default CardList;