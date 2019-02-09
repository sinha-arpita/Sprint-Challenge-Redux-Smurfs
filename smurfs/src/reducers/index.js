/*
  Be sure to import in all of the action types from `../actions`
*/
import {FETCHING,FETCHING_SUCCESS,FETCHING_FAILURE,ADDING_SUCCESS,ADDING_FAILURE,DELETE_SUCCESS,DELETE_FAILURE,UPDATE_SUCCESS,UPDATE_FAILURE } from "../actions"

const initialState= {
    smurfs: [],
    fetchingSmurfs: false,
    addingSmurf: false,
    updatingSmurf: false,
    deletingSmurf: false,
    error: null


}

export  default function reducer (state=initialState,action){
    switch(action.type) {
        case FETCHING:
            return {
                ...state, smurfs: [], fetchingSmurfs: true,
                addingSmurf: false, updatingSmurf: false, deletingSmurf: false, error: null
            }

        case FETCHING_SUCCESS:
            return {
                ...state, smurfs: action.payload, fetchingSmurfs: false,
                addingSmurf: false, updatingSmurf: false, deletingSmurf: false, error: null
            }
        case FETCHING_FAILURE:
            return {
                ...state, smurfs: [], fetchingSmurfs: false,
                addingSmurf: false, updatingSmurf: false, deletingSmurf: false, error: action.payload
            }
        case ADDING_SUCCESS:
            return {
                ...state, smurfs: action.payload, fetchingSmurfs: false,
                addingSmurf:action.payload, updatingSmurf: false, deletingSmurf: false, error:false
            }
        case ADDING_FAILURE:
            return {
                ...state, smurfs: [], fetchingSmurfs: false,
                addingSmurf:false, updatingSmurf: false, deletingSmurf: false, error:action.payload
            }

        case DELETE_SUCCESS:
            return {
                ...state, smurfs: action.payload, fetchingSmurfs: false,
                addingSmurf:action.payload, updatingSmurf: false, deletingSmurf: true, error:false
            }
        case DELETE_FAILURE:
            return {
                ...state, smurfs: [], fetchingSmurfs: false,
                addingSmurf:false, updatingSmurf: false, deletingSmurf: false, error:action.payload
            }

        case UPDATE_SUCCESS:
            return {
                ...state, smurfs: action.payload, fetchingSmurfs: false,
                addingSmurf:false, updatingSmurf: action.payload, deletingSmurf: true, error:false
            }
        case UPDATE_FAILURE:
            return {
                ...state, smurfs: [], fetchingSmurfs: false,
                addingSmurf:false, updatingSmurf: false, deletingSmurf: false, error:action.payload
            }

        default:
            return state
    }
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer.
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
/**/