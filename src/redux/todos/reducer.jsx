import { actionTypes } from "./action"

const initState = {
    todo : [],
    loading : false,
    error : false,
    progress : [],
    done : [],
} 

export const todoReducer = (state = initState , action) => {

    switch(action.type){
        case actionTypes.ADD_NEW_TASK_REQUEST :
            return {
                ...state,
                loading : true,
                error : false
            }

        case actionTypes.ADD_NEW_TASK_SUCCESS : 
        return {
            ...state,
            todo : [...state , action.payload],
            loading : false
        }  
        
        case actionTypes.ADD_NEW_TASK_FAILURE :
            return {
                ...state,
                error : true
            }
         
        // ............................................................................................    
        case actionTypes.FETCH_TODO_REQUEST : 
            return {
            ...state,
            loading : true
        }
        
        case actionTypes.FETCH_TODO_SUCCESS : 
            return {
                ...state,
                loading : false,
                todo : action.payload
            }
        
        case actionTypes.FETCH_TODO_FAILURE :
            return {
                ...state,
                error : true
            }

        // .................................................................................    

        case actionTypes.FETCH_PROGRESS_FAILURE : 
            return {
            ...state,
            loading : true
        }
        
        case actionTypes.FETCH_PROGRESS_SUCCESS : 
            return {
                ...state,
                loading : false,
                progress : action.payload
            }
        
        case actionTypes.FETCH_PROGRESS_FAILURE :
            return {
                ...state,
                error : true
            }
        
        //.......................................................................................

        case actionTypes.FETCH_DONE_REQUEST : 
            return {
            ...state,
            loading : true
        }
        
        case actionTypes.FETCH_DONE_SUCCESS: 
            return {
                ...state,
                loading : false,
                done : action.payload
            }
        
        case actionTypes.FETCH_DONE_FAILURE :
            return {
                ...state,
                error : true
            }

        default : return state
    }

}