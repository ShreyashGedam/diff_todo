import {  useState } from "react"
import { useDispatch , useSelector } from "react-redux"

import { addTodo} from "../redux/todos/action"
import "./pages.css"

export const Newtask = () => {

    const [text , setText] = useState("")
    const [desc, setDesc] = useState("")
    const [check , setCheck] = useState("")
    const [checked, setChecked] = useState([]);

    var tag = ["Official" , "Personal" , "Others"]

    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
          updatedList = [...checked, event.target.value];
        } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
      };

      

    const checkList = (event) => {
        
        if(event.target.checked)
        {
            
            setCheck(event.target.value)
        }              
    }

    const dispatch = useDispatch()

    // console.log(checked)

    const handleadd = (text,desc,check,checked) => {
        
       if(check.length == 0)
       {
        alert("Enter type of todo")
       }
       else
       {
        dispatch(addTodo(text,desc,check,checked))     
       }        
    }

   

    return (
        <div className="main">
            <input type={'text'} placeholder="Add todod" onChange={ e => setText(e.target.value)}></input>
            <textarea type={'text'} placeholder="Description" onChange={ e => setDesc(e.target.value)}></textarea>
            <br></br>
            <br></br>
            <br></br>
            <br></br>



            <div style={{border : '1px solid ' , marginBottom : '10px'}}>
            <input value={'todo'} type="checkbox" onChange={checkList}/>
            <span>Todo</span>
            <br></br>
            <input value={'progress'} type="checkbox" onChange={checkList}/>
            <span>In Progress</span>
            <br></br>
            <input value={'done'} type="checkbox" onChange={checkList}/>
            <span>Done</span>
            </div>
            
            {/* ........... ADDING PERSONAL OR OFFICIAL */}
            <div style={{border : '1px solid ' , marginBottom : '10px'}}>
            {tag.map( (item,i) => (
                <div key={i}>
                    <input type={'checkbox'} value={item} onChange={handleCheck}></input>
                    <span>{item}</span>
                </div>
            ))}
            </div>


            <button onClick= { () => handleadd(text,desc,check,checked)} >Add Todo</button>
            
                                   
        </div>
    )
}