
import React from 'react';
import '../index.css';
import  Login  from './Login'
import  Mathroom  from './Mathroom'

import axios from 'axios'
import { SERVER_URL } from '../Config';

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure()

class Library extends React.Component {


	state = {username: ""}

	
	/**
	 * This method makes the API request to insert user in the database
	 */
	addUserDatabase = (username) => {
		axios.post(SERVER_URL + "api/user", {username: username})
        .then(({data}) => {
            // handle if an error is generated
            if(data.code !== 200){
                console.log("Incorrect data: " + data.message)
                return
            }
            else{
				console.log("User successfully saved to database")

            }

        })

    }
    

    notification = (message, type="Success") => {
        if(type === "Success"){
            toast.success(message, {autoClose: 1500})
        }
        else{
            toast.error(message, {autoClose: 3000})

        }

        console.log("Toasting")
    }



	updateUserState = (username) => {
		this.setState(prevState => {
			return {...prevState, username: username}
		})

		// add the user to the database
		this.addUserDatabase(username)
	}


	render(){
		return(
			<div className="component-render">
				{
					(this.state.username === "") 
					? <Login updateUsername={this.updateUserState} setName={this.setName} />
					: <Mathroom username={this.state.username} equations={this.state.equations} notification={this.notification}/>
				}

				
		
			</div>
		)
	}
}


export default Library