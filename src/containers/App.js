import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

// React App Section 1 and 2 -- notes
// props we keep passing down 
// but we never changed them,
// react just reads the props it receives and renders something

// state - object that describes your app
// props don't change but state is able to change
// state is fed to child components 
// and this state is received as props in the child components

// React App Section 4 -- notes
// App is a smart component since they have state unlike SearchBox 
// and Card which are pure functions
// Smart components tend to have class syntax

// Lifecycle methods - methods that come with react component and can be used here
// These methods we use will be automatically triggered when the app gets loaded on the website

// The methods fall in these 3 categories: 1)Mounting, 2)Updating and 3)Unmounting

// Mounting is the start of the app; when mounting the lifecyle hooks(methods) get hit and are in order.
// Lifecycle hooks when mounting the app - constructor(), componentWillMount(), render(), componentDidMount()
// It runs the methods, which exist in our app, from the above list in order 

// Updating - whenever the component changes the page is updated - eg. when searching, the cardList updated component is re-rendered
// Updating has different lifecycle hooks as well and are run in order if existing in our componet/function (cardList is a pure function here)

// Unmounting - when a component is removed from the page, eg: when we go to another oage the App component is 
// Umounting has differnt lifecycle hooks as well and are run in order if exiting in the component

// All of these methods are called 'Lifecycle hooks' because they are run everytime a component does something!!

// React App 5 -- Notes
// Make the website more repsonsive such that the search bar is visible even if we scroll through users

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	// componentDidMount() - lifecycle hooks or method run when mounting the App
	// its called after render() 
	// Since we want to grab users from JSONPlaceholder we do that here
	componentDidMount() {
		// fetching users - make request to server
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => {this.setState({ robots: users })});
	}

// *******Important note**********
// use arrows when creating user defined functions
// you don't need arrows for anything that comes from react(pre-built) don't need arrow functions (eg constructors, render)
	onSearcChange = (event) => {
		this.setState({searchfield: event.target.value});
	}

	render() {
		const {robots, searchfield} = this.state;
		const filteredRobots = robots.filter(robot => 
		{
			return robot.name
			.toLowerCase()
			.includes(searchfield.toLowerCase())
		})

		// using ternary operator
		return !robots.length ?
				<h2 className='tc'>Loading...</h2> :
				(
					<div className='tc'>
						<h1 className='ttu f1'>Robofriends</h1>
						<SearchBox searchChange={this.onSearcChange}/>
						<Scroll>
							<ErrorBoundary>
								<CardList robots={filteredRobots} />
							</ErrorBoundary>
						</Scroll>
					</div>
				);
	}
}

export default App;
