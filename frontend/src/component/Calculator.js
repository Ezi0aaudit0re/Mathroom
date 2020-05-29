
import React from 'react';

import { EquationResultPlaceHolder } from './EquationResultPlaceholder'

class Calculator extends React.Component {



    state = {string_equation: "", result: "", loading: false}



    componentDidMount(){

		try{

            let socket = this.props.socket

            // mount socket to update any new equation solved 
            socket.on("newSolvedEquation", data => {
                if(data.code === 200){
                    this.props.addNewEquation()
                } 
            

            })

            // message to be only updated by the current user 
            // this updates the results window where calculation is showed
            socket.on("myEquation", data => {
                if(data.code !== 200){
                    this.props.notification("Please enter a correct equation", "Failure")
                    return
                } 
                let new_information = data.data
                this.setState(prevState => {
                    return {...prevState, result:new_information.result, loading:false}
                })
  

            })
		
		}
		catch (error){
            console.log(error)
            console.log("calculation failed")
            this.props.notification(error, "Failure")
		}
    }

    /**
     * Handle the equation being entered by the user
     */
    updateEquation = e => {


        e.preventDefault();
        // set the previous result to empty string if its not already an empty string 
        if(this.state.result !== ""){
            this.setState({result: ""})
        }

        let s = e.target.value
        this.setState(prevState => {
            return {...prevState, string_equation: s }
        })

    }




    /**  Make a socket request to the server to solve the equation */
    submitEquation = (e) => {
        e.preventDefault();

        let socket = this.props.socket

        // show the loading icon 
        this.setState({loading: true})

        socket.emit("solveEquation", {equation: this.state.string_equation, username: this.props.username})




      

    }


    render(){
        return (
            <div className="col-7 px-0"> 
                {/*  User equations result is stored here  */}
                <div className="px-4 py-5 equation-solution-box bg-white">
                    {
                         (this.state.result !== "")
                         ?<div className="equation-solution"> <h1> {this.state.string_equation} = {this.state.result} </h1>  </div>
                         : <EquationResultPlaceHolder loading={this.state.loading} />
                         
                     

                
                    }
    
                </div>
    
                {/* Form to calculate  */}
                <form action="#" className="bg-light">
                  <div className="input-group">
                    <input type="text" placeholder="Enter Calculation" aria-describedby="button-addon2" className="form-control rounded-0 border-0 py-4 bg-light"
                     onChange={this.updateEquation}

                     onKeyPress={event => {
                        /* handle enter press */
                         if (event.key === "Enter"){
                             this.submitEquation(event)
                         }
                     } }

                    />
                    <div className="input-group-append">
                      <button id="button-addon2" type="submit" className="btn btn-link"> 
                           <span className="glyphicon glyphicon-send" aria-hidden="true" onClick={this.submitEquation}>Calculate</span>
                       </button>
                    </div>
                  </div>
                </form>
    
            </div>
        )
    
    }
 
}


export default Calculator