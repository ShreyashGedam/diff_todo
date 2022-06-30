import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { todoData, todoDone, todoProgress } from "../redux/todos/action"
import "./pages.css"

export const Summary = () => {

    const data = useSelector( store => store.createTask.todo)
    const progressData = useSelector( store => store.createTask.progress)
    const done = useSelector( store => store.createTask.done)

    const todo = data.length
    const pro = progressData.length
    const do_ = done.length

    const dispatch = useDispatch()

    useEffect( () => {

        dispatch(todoProgress())
        dispatch(todoData())
        dispatch(todoDone())

    },[dispatch])

      

    return (
        <div className="summaryMain">
            <h2>Summary</h2>
            <div className="cards">
                <div><p>Todo : {todo}</p></div>
                <div><p>Done : {do_}</p></div>
                <div><p>In Progress : {pro}</p></div>
            </div>
        </div>
    )
}