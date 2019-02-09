import React from "react";
import {connect} from "react-redux";
import {smurfDisplay} from './../actions/index';
import SmurfList from "./SmurfList"

class SmurfView extends React.Component{
    constructor(){
        super();
        this.state={
        }

    }
    componentDidMount(){
        console.log("component mounted")
        this.props.smurfDisplay()

    }
    render(){
        if (this.props.fetchingSmurfs) {
            return <div> Loading smurfs...</div>
        }
        if (this.props.error) {
            return <div> Error! {this.props.error}</div>
        }
        return (
            <SmurfList smurfs={this.props.smurfs}/>

        )
    }
}
function mapStateToProps(state){
    return {
        fetchingSmurfs: state.fetchingSmurfs,
        smurfs: state.smurfs,
        error:state.error,
        addingSmurf:state.addingSmurf,
        updatingSmurf:state.updatingSmurf,
        deletingSmurf:state.deletingSmurf

    }


}
export default connect(mapStateToProps,{smurfDisplay})(SmurfView);