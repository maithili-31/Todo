import React from "react";

function Task(props){
    function funEdit(){
        
    }

    function funDelete(){

    }
    return(
        <div style={{border: "2px solid white"}}>
            <label>Title : </label>
            <h3>{props.title}</h3>
            <label>Description : </label>
            <div name="dtn" >{props.dtn}</div>
            <br></br>
            <button onClick={funEdit}>Edit</button>
            <button onClick={funDelete}>Delete</button>
        </div>
    )
}

export default Task;