import React from 'react';
import Card from './Card';

//pure function
const CardList = ({ robots }) => {

	return (
		<div>
	      {
	      	// anything in this curly braces is javascript
	      	// we can directly add map function here instead of defining
	      	// const cardComponent outside render and then returning in render
	      	robots.map((user,i) => {
						return (
							<Card 
								key={i} 
								id={user.id} 
								name={user.name} 
								email={user.email}
								/>
						);
					})
	      }
	  </div>
	);
}

export default CardList;