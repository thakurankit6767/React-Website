import React, { useState } from "react";
import CreateNote from "./CreateNote";
import { Footer } from "./Footer";
import Header from "./Header";
import Note from "./Note";

const Googlekeep = () => {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
    //alert("i m click");
    setAddItem((prevData) => {
      return [...prevData, note];
    });

    console.log(note);
  };

  const onDelete = (id) => {
    setAddItem((olddata) =>
      olddata.filter((currdata, index) => {
        return index !== id;
      })
    );
  };

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />
      <Note />
      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
      <Footer />
    </>
  );
};

export default Googlekeep;
