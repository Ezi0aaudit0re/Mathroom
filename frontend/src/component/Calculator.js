
import React from 'react';
import axios from 'axios'

import { EquationResultPlaceHolder } from './EquationResultPlaceholder'

class Calculator extends React.Component {



    state = {string_equation: "", result: ""}



    componentDidMount(){

		try{

            let socket = this.props.socket

            // mount socket 
            socket.on("newSolvedEquation", data => {
                if(data.code !== 200) throw("Internal Server Error: Cannot solve equation")
                this.props.addNewEquation()
            
  

            })

            socket.on("myEquation", data => {
                if(data.code !== 200) throw("Internal Server Error: Cannot solve equation")
                let new_information = data.data
                this.setState(prevState => {
                    return {...prevState, result:new_information.result}
                })
  

            })
		
		}
		catch (error){
			console.log(error)
		}
    }

    updateEquation = e => {


        e.preventDefault();
        // set the previous result to empty string
        this.setState({result: ""})

        let s = e.target.value
        this.setState(prevState => {
            return {...prevState, string_equation: s }
        })

    }




    /**  Make a post request to the server to solve the equation */
    submitEquation = (e) => {
        e.preventDefault();

        let socket = this.props.socket

        socket.emit("solveEquation", {equation: this.state.string_equation, username: this.props.username})
        return

      

    }


    render(){
        return (
            <div className="col-7 px-0"> 
                {/*  User equations result is stored here  */}
                <div className="px-4 py-5 equation-solution-box bg-white">
                    {
                         (this.state.result !== "")
                         ? <div className="equation-solution"> <h1> {this.state.string_equation} = {this.state.result} </h1>  </div>
                         : <EquationResultPlaceHolder />
                         
                     

                
                    }
    
                </div>
    
                {/* Form to calculate  */}
                <form action="#" className="bg-light">
                  <div className="input-group">
                    <input type="text" placeholder="Type a message" aria-describedby="button-addon2" className="form-control rounded-0 border-0 py-4 bg-light" onChange={this.updateEquation}/>
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