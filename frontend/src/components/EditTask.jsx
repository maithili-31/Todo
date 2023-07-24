import React from "react";

function EditTask(){
    function handleEdit(e){
        preventDefault();
        console.log(e.target.title.value);
        console.log(e.target.description.value);
    }

    return(
        <div>
            <form onSubmit={handleEdit}>
                <h1>Edit Note</h1>
                <label>Title: </label>
                <input type="text" name="title" placeholder="Title" />
                <br></br>
                <label>Description</label>
                <textarea name="description" id="w3review" rows="4" cols="50" placeholder="Description" />
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default EditTask;

// https://reactrouter.com/en/main/router-components/browser-router