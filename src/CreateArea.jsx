import React, { useState } from "react";
import "./styles1.css";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div className="note">
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />

        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note.."
          rows="3"
        />
      </form>
      <button className="addbtn" onClick={submitNote}>
        Add{" "}
      </button>
    </div>
  );
}

export default CreateArea;
