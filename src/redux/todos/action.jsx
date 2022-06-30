import axios from "axios"

export const actionTypes = {
    FETCH_TODO_REQUEST : "FETCH_TODO_REQUEST",
    FETCH_TODO_SUCCESS : "FETCH_TODO_SUCCESS",
    FETCH_TODO_FAILURE : "FETCH_TODO_FAILURE",
    ADD_NEW_TASK_REQUEST : "ADD_NEW_TASK_REQUEST",
    ADD_NEW_TASK_SUCCESS : "ADD_NEW_TASK_SUCCESS",
    ADD_NEW_TASK_FAILURE : "ADD_NEW_TASK_FAILURE",
    FETCH_PROGRESS_REQUEST : "FETCH_PROGRESS_REQUEST",
    FETCH_PROGRESS_SUCCESS : "FETCH_PROGRESS_SUCCESS",
    FETCH_PROGRESS_FAILURE : "FETCH_PROGRESS_FAILURE",
    FETCH_DONE_REQUEST : "FETCH_DONE_REQUEST",
    FETCH_DONE_SUCCESS : "FETCH_DONE_SUCCESS",
    FETCH_DONE_FAILURE : "FETCH_DONE_FAILURE", 
  
} 

export const todoDataRequest = () => {
    return {
        type : actionTypes.FETCH_TODO_REQUEST
    }
}

export const todoDataSuccess = (payload) => {
    return {
        type : actionTypes.FETCH_TODO_SUCCESS,
        payload
    }
}

export const todoDataFailure = () => {
    return {
        type : actionTypes.FETCH_TODO_FAILURE,
        payload
    }
}

export const todoData = () => (dispatch) => {

    const dataRequest = todoDataRequest()
    dispatch(dataRequest)

    axios({
        url : "http://localhost:8000/todo",
        method : "GET",
    })
    .then( (res) => {
        const dataSuccess = todoDataSuccess(res.data)
        dispatch(dataSuccess)
    })
    .catch( (err) => {
        const dataFailure = todoDataFailure()
        dispatch(dataFailure)
    })
}

// ............................................................

export const todoProgressRequest = () => {
    return {
        type : actionTypes.FETCH_PROGRESS_REQUEST
    }
}

export const todoProgressSuccess = (payload) => {
    return {
        type : actionTypes.FETCH_PROGRESS_SUCCESS,
        payload
    }
}

export const todoProgressFailure = () => {
    return {
        type : actionTypes.FETCH_PROGRESS_REQUEST,
        payload
    }
}

export const todoProgress = () => (dispatch) => {

    const dataRequest = todoProgressRequest()
    dispatch(dataRequest)

    axios({
        url : "http://localhost:8000/progress",
        method : "GET",
    })
    .then( (res) => {
        const dataSuccess = todoProgressSuccess(res.data)
        dispatch(dataSuccess)
    })
    .catch( (err) => {
        const dataFailure = todoProgressFailure()
        dispatch(dataFailure)
    })
}



// .........................................................................................

export const todoDoneRequest = () => {
    return {
        type : actionTypes.FETCH_DONE_REQUEST
    }
}

export const todoDoneSuccess = (payload) => {
    return {
        type : actionTypes.FETCH_DONE_SUCCESS,
        payload
    }
}

export const todoDoneFailure = () => {
    return {
        type : actionTypes.FETCH_DONE_FAILURE        
    }
}

export const todoDone = () => (dispatch) => {

    const dataRequest = todoDoneRequest()
    dispatch(dataRequest)

    axios({
        url : "http://localhost:8000/done",
        method : "GET",
    })
    .then( (res) => {
        const dataSuccess = todoDoneSuccess(res.data)
        dispatch(dataSuccess)
    })
    .catch( (err) => {
        const dataFailure = todoDoneFailure()
        dispatch(dataFailure)
    })
}


// ............................................................................................

export const addTodoRequest = () => {
    return {
        type : actionTypes.ADD_NEW_TASK_REQUEST     
    }
}

export const addTodoSuccess = (payload) => {
    return {
        type : actionTypes.ADD_NEW_TASK_SUCCESS,
        payload
    }
}

export const addTodoFailure = () => {
    return {
        type : actionTypes.ADD_NEW_TASK_FAILURE      
    }
}

export const addTodo = (todo,desc,check,tag) => dispatch => {

    dispatch(addTodoRequest())

    axios({
        url : `http://localhost:8000/${check}`,
        method : "POST",
        data : {
            title : todo,
            description : desc,
            tag : tag
        }
    })
    .then( () => {
        dispatch(todoData())
    })
    .then( r => 
        // console.log(r)
        dispatch(addTodoSuccess(r.data))
        )
    .catch( e => dispatch(addTodoFailure()))
}


