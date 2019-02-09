import React from "react";
import {deleteSmurf} from "./../actions"
import{updateSmurf} from "./../actions";
import {connect} from "react-redux"
import "./smurf.css";

class Smurf extends React.Component{

    constructor(props){
        super(props);
        this.state={
            inputName : this.props.smurf.name,
            inputAge  : this.props.smurf.age,
            inputHeight : this.props.smurf.height
        }
    }
    deleteHandler=()=>{
        this.props.deleteSmurf(this.props.smurf.id)
    }

    updateHandler=()=>{
        let smurf = {
          name : this.state.inputName,
          age : this.state.inputAge,
          height:   this.state.inputHeight
        }
        this.props.updateSmurf(this.props.smurf.id, smurf)
        this.setState({inputName:"",inputAge:null,inputHeight:null})

    }
    changeHandler=event=>{
        event.preventDefault()
        this.setState({[event.target.name]:event.target.value})
    }
    render(){
        return <div className="oneSmurf">
            <button onClick={this.deleteHandler} className="deleteButton">X</button>
            <button onClick={this.updateHandler}  className="updateButton">Update</button>

            <div className="each">
                <div className="inputLabel">Name </div>
                <input className="inputBox" placeholder={this.props.smurf.name} name="inputName" onChange={this.changeHandler}></input>

            </div>
            <div className="each">
                <div className="inputLabel">Age </div>
                <input className="inputBox" placeholder={this.props.smurf.age} name="inputAge" onChange={this.changeHandler}></input>
            </div>
            <div className="each">
                <div className="inputLabel">Age </div>
                <input className="inputBox" placeholder={this.props.smurf.height} name="inpuHeight" onChange={this.changeHandler}></input>

            </div>

        </div>
    }
}

export default connect(null,{deleteSmurf,updateSmurf}) (Smurf);