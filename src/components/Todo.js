import { useState } from "react";

const ToDoLists = (props) => {
  const [editInput, setEditInput] = useState("");
  const [addInEdit, setAddInEdit] = useState({
    show: false
  });

  const EditItem = () => {
    console.log("edit");
    setAddInEdit({ show: true });
  };
  const funEditUpdate = (event) => {
    setEditInput(event.target.value.trim());
  };
  return (
    <>
      <div>
        <button 
          className="Delete"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          X
        </button>
        <li >{props.text}</li>
        {addInEdit.show ? (
          <>
            <br />
            <input type="text" placeholder="Edit" onChange={funEditUpdate} />
            <button
              onClick={() => {
                props.onEdit(props.id, editInput);
                setAddInEdit({ show: false });
              }}
            >
              +
            </button>
          </>
        ) : (
          <button onClick={EditItem}>
            edit
          </button>
        )}
      </div>
    </>
  );
};

export default ToDoLists;