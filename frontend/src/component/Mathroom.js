import React from 'react';

import { Recent } from './Recent'
import  Calculator  from "./Calculator"
import  {SERVER_URL} from '../Config'
import axios from 'axios'
import io from "socket.io-client";


class Mathroom extends React.Component{



    state = {equations: [], equation_result: ""}
    serverUrl = SERVER_URL

    socket = io(SERVER_URL)

    // get last 10 chats from the server
	componentDidMount(){

		try{

               // get equations data
            this.getLatestEquations();

		}
		catch (error){
			console.log(error)
		}
    }


    updateEquations = (new_information) => {
        this.setState(prevState => {
            return {...prevState, equations: (() => {

                let temp_list = [...this.state.equations]
                if(temp_list.length == 10){
                    // pop last element if length is = 10 to accomodate for new value
                    temp_list.pop()
                }

                // append data to equations 
                temp_list.unshift(new_information)
                return temp_list

            })()}
        })
    }
    
    /**
     * This method is used to get the basic equations data from the database
     */
    getLatestEquations() {
        axios.get(this.serverUrl + "api/equations")
        .then(({data}) => {

            if(data.code !== 200) throw("All data request failed");

            this.setState(prevState => {
                return {...prevState, equations: data.data}
            })

        }) 
    }










    // override method
    render(){
        return (
            <div>
                <div className="container py-5 px-4">
                    <header className="text-center">
                        <h1 className="display-4 text-white">Welcome {this.props.username}</h1>
                    </header>
                    
                    <div className="row rounded-lg overflow-hidden shadow">
                        <Recent equations={this.state.equations} />
                        <Calculator submitEquation={this.submitEquation} serverUrl={this.serverUrl} username={this.props.username} socket={this.socket} addNewEquation={this.updateEquations}/>
                    </div>
                    
                  


                </div>
                    
                    
            
            </div>

           
        )
    }

}


export default Mathroom