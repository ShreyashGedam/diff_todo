import { useEffect } from "react"
import { useDispatch , useSelector } from "react-redux"
import { todoData, todoDone, todoProgress } from "../redux/todos/action"

export const Home = () => {
 

    const data = useSelector( store => store.createTask.todo)
    const progressData = useSelector( store => store.createTask.progress)
    const done = useSelector( store => store.createTask.done)

    const dispatch = useDispatch()

    useEffect( () => {

        dispatch(todoProgress())
        dispatch(todoData())
        dispatch(todoDone())

    },[dispatch])



    return (
        <div style={{display : 'flex'}}>
            <div className="todoMain">
                <h3 style={{textAlign : 'center'}}>TODO</h3>
              {data.map( (item) =>(
                <div key={item.id} className='todoCards'>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                </div>
              ))}  
            </div>
            <div className="todoMain">
                <h3 style={{textAlign : 'center'}}>PROGRESS</h3>
              {progressData.map( (item) =>(
                <div key={item.id} className='todoCards'>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                </div>
              ))}  
            </div>
            <div className="todoMain">
                <h3 style={{textAlign : 'center'}}>DONE</h3>
              {done.map( (item) =>(
                <div key={item.id} className='todoCards'>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                </div>
              ))}  
            </div> 
            </div>
    )
}