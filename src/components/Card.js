import React from 'react';

//instead of writing class we are only focusing on writing the function for now
const Card = (props) => {
	//destructuring
	const {id, name, email} = props;
	return(
		// this is jsx, which is an html like syntax but not html
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;