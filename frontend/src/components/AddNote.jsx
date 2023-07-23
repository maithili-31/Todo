import React, { useState } from "react";

function AddNote(){
    function handlesubmit(e){
        e.preventDefault();
        console.log(e.target.title.value);
        console.log(e.target.description.value);
    }

    return(
        <>
            <form onSubmit={handlesubmit}>
                <h1>Add Note</h1>
                <label>Title: </label>
                <input type="text" name="title" placeholder="Title" />
                <br></br>
                <label>Desciption</label>
                <textarea name="description" id="w3review" rows="4" cols="50" placeholder="Description" />
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default AddNote;
