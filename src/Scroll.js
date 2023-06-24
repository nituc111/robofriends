import React from 'react';
// import './Scroll.css'
// React App Section 5 -- Notes
// Making this component to add scroll functionality
// It is not a selfclosing component unlike other components like SearchBox, Card, CardList, etc.
// It wraps components instead of selfclosing like previous comonents we created
// We want it to just render whatever is inside it
// To establish the above functionality to render whatever scroll wraps we now learn about children
// In the App component we see that CardList is the child of Scoll component 
// Now Scroll can use children as a way to render it's children
const Scroll = (props) => {
	return (
		<div style={{overflowY: 'scroll', height: '500px'}}>
			{props.children};
		</div>
	);
};

export default Scroll;