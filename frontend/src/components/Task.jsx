import React from "react";

function Task(props){
    return(
        <div style={{border: "2px solid white"}}>
            <label>Title : </label>
            <h3>{props.title}</h3>
            <label>Description : </label>
            <div name="dtn" >{props.dtn}</div>
            <br></br>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default Task;