import React from 'react';
import { render } from 'react-dom';
import './index.css';
import  Login  from './component/Login'
import  Mathroom  from './component/Mathroom'







class Library extends React.Component {


	// TODO change to empty
	state = {username: "Aman"}

	


	updateUserState = (username) => {
		this.setState(prevState => {
			// TODO set user in local storage and get from local storage 
			return {...prevState, username: username}
		})
	}


	render(){
		return(
			<div className="component-render">
				{
					// (this.state.username === "") 
					// ? <Login updateUsername={this.updateUserState} setName={this.setName} />
					// : <Mathroom username={this.state.username} equations={this.state.equations}/>
					<Mathroom username={this.state.username} equations={this.state.equations}/>
				}

				
		
			</div>
		)
	}
}


render(
	<Library />,
	document.getElementById("root")
)