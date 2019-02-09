import React from "react";
import {deleteSmurf} from "./../actions"
import {connect} from "react-redux"

class Smurf extends React.Component{

    constructor(){
        super();
        this.state={

        }
    }
    deleteHandler=()=>{
        this.props.deleteSmurf(this.props.smurf.id)
    }
    render(){
        return <div className="myCard">
            <button onClick={this.deleteHandler}>X</button>
            <div>ID : {this.props.smurf.id} </div>
            <div className="each">
                <div className="left">Name:</div>
                <div className="update"> {this.props.smurf.name}</div>
            </div>
            <div className="each">
                <div className="left">Age:</div>
                <div className="update"> {this.props.smurf.age}</div>
            </div>
            <div className="each">
                <div className="left">Height:</div>
                <div className="update">{this.props.smurf.height}</div>

            </div>

        </div>
    }
}

export default connect(null,{deleteSmurf}) (Smurf);