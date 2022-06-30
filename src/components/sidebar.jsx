import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import "./sidebar.css"


export const Sidebar = () => {

    const [official,setOfficial] = useState(0)
    const [personal,setPersonal] = useState(0)
    const [others,setOthers] = useState(0)

    const data = useSelector( store => store.createTask.todo)
    const progressData = useSelector( store => store.createTask.progress)
    const done = useSelector( store => store.createTask.done)

    // console.log(data)
    // console.log(progressData)
    // console.log(done)

    // console.log(data)

    useEffect(() =>{
        var off_count = 0
        var per_count = 0
        var oth_count = 0
        data.map( (item) => {
            item.tag.map( (e) => {
                // console.log(e)
                if(e == 'Official')
                {
                    off_count++
                }
                else if( e == "Personal")
                {
                    per_count++
                }
                else
                {
                    oth_count++
                }
            })
        })

        progressData.map( (item) => {
            item.tag.map( (e) => {
                // console.log(e)
                if(e == 'Official')
                {
                    off_count++
                }
                else if( e == "Personal")
                {
                    per_count++
                }
                else
                {
                    oth_count++
                }
            })
        })

        done.map( (item) => {
            item.tag.map( (e) => {
                // console.log(e)
                if(e == 'Official')
                {
                    off_count++
                }
                else if( e == "Personal")
                {
                    per_count++
                }
                else
                {
                    oth_count++
                }
            })
        })
 
        setOfficial(off_count)
        setPersonal(per_count)
        setOthers(oth_count)
        // console.log(off_count)
        // console.log(per_count)
        // console.log(oth_count)

    },[data,progressData,done])
    
  

    
    return (
        <div className="sidebarmain">
            <div style={{marginTop : '20px' , backgroundColor : "lightblue" , border : "3px solid darkblue"}}><p>Total : {personal+official+others}</p></div>
            <div style={{backgroundColor : "lightGreen" , border : "3px solid darkgreen" }}><p>Personal : {personal}</p></div>
            <div style={{backgroundColor : "lightpink" , border : "3px solid darkpink" }}><p>Official : {official}</p></div>
            <div style={{backgroundColor : "lightyellow" , border : "3px solid darkyellow" }}><p>Others : {others}</p></div>
        </div>
    )
}