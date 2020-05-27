import React from 'react';


class Login extends React.Component{

    state = {"username": ""}

    handleUsernameChange = (e) => {
		let s = e.target.value
		this.setState(prevState => {
			return {...prevState, username: s}
		})
	}
    updateUsername = e => {
        if(this.state.username === ""){
            return
        }
        this.props.updateUsername(this.state.username);
    }


    render(){
        return (
            <div className="container py-5 px-4">
                <form action="#" className="bg-light" onSubmit={this.updateUsername}>
                    <div className="input-group">
                        <input type="text" placeholder="Type a message" aria-describedby="button-addon2" className="form-control rounded-0 border-0 py-4 bg-light" onChange={this.handleUsernameChange}/>
                        <input type="submit" id="button-addon2" className="btn btn-link" />  
                    </div>
                
                </form>
            
            </div>
        )

    }
}

export default Login