import axios from "axios"



/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const FETCHING="FETCHING";
export const FETCHING_SUCCESS ="FETCHING_SUCCESS";
export const FETCHING_FAILURE = "FETCHING_FAILURE";
export const ADDING_SUCCESS = "ADDING_SUCCESS";
export const ADDING_FAILURE = "ADDING_FAILURE";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILURE = "DELETE_FAILURE";


/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export function  smurfDisplay() {
    return dispatch=> {
        dispatch({type: FETCHING, payload: []})

        console.log(smurfDisplay);
        axios.get("http://localhost:3333/smurfs/")
            .then(res => {
                console.log("FETCHING DATA", res);
                dispatch({type: FETCHING_SUCCESS, payload:res.data})


            })

            .catch(error=>{
                console.log("This is the error",error)
                dispatch({type:FETCHING_FAILURE,payload:"Smurf not found"})
            })
    }

}
export function addSmurf(smurf){

    console.log(smurf)
    return dispatch =>{
        axios.post("http://localhost:3333/smurfs",smurf)
            .then(res=>{
                console.log("POST FRESPONSE",res)
                dispatch({type:ADDING_SUCCESS,payload:res.data})
            })

            .catch(error=>{
                console.log("ERROR",error);
                dispatch({type:ADDING_FAILURE,payload:"Smurf not added"})
            })


    }



}
export function deleteSmurf(id){

    return dispatch=> {
        axios.delete("http://localhost:3333/smurfs/" + id)
            .then(res => {
                console.log("DELETE RESPONSE", res);
                dispatch({type: DELETE_SUCCESS, payload: res.data})
            })

            .catch(error => {
                console.log("Error", error)
                dispatch({type: DELETE_FAILURE, payload: "Smurf not deleted"})

            })

    }

}
