import React from "react";
import {connect} from "react-redux";
import {addSmurf} from "./../actions/index"

class SmurfForm extends React.Component{

    constructor(){
        super();
        this.state={

            inputName:"",
            inputAge: null,
            inputHeight:null,
        }
    }

    changeHandler=event=>{
        event.preventDefault()
        this.setState({[event.target.name]:event.target.value})
    }

    clickHandler=event=>{
        event.preventDefault();
        let smurf={
            name:this.state.inputName,
            age:this.state.inputAge,
            height:this.state.inputHeight
        }
        this.props.addSmurf(smurf)
        this.setState({inputValue:"",inputAge:null,inputHeight:null})
    }

    render(){

        return(
            <div>

                <form>

                    <input type ="text" placeholder="Name" name="inputName"
                           onChange={this.changeHandler}/>

                    <input type ="number" placeholder="Age" name="inputAge"
                           onChange={this.changeHandler}/>

                    <input type ="number" placeholder="Height" name="inputHeight"
                           onChange={this.changeHandler}/>

                    <button onClick={this.clickHandler}>Add Smurf</button>

                </form>




            </div>



        )


    }

}


export default connect(null,{addSmurf})(SmurfForm)