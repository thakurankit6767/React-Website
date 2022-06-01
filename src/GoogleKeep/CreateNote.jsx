import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setNote((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
    console.log(note);
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  const expandIt = () => {
    setExpand(true);
  };
const backTonrmal=()=>{
    setExpand(false)
}


  return (
    <>
    <div>
      <form action="" onDoubleClick={backTonrmal}>
        {expand ? 
          <input
            type="text"
            placeholder="Title"
            autoComplete="off"
            onChange={inputEvent}
            value={note.title}
            name="title"
          />
         : null}
        <textarea
          name="content"
          id=""
          cols="30"
          rows="10"
          placeholder="Write A Note"
          onChange={inputEvent}
          value={note.content}
          onClick={expandIt}
       
        ></textarea>

        { expand?
        <Button color="success" onClick={addEvent}>
          <AddIcon />  
        </Button>: null}
      </form>
    </div>
    </>
  );
};

export default CreateNote;
