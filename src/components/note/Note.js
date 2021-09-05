import React from 'react'
import './Note.css'

const Note = ({ title, content, id }) => {

    const onDragStart = (event, note_id) => {
        console.log('dragstart on div: ', note_id);
        event.dataTransfer.setData("note_id", note_id);
    }

    return (

        <div className="note" draggable onDragStart={(event) => onDragStart(event, id)} id={id}>
            <h1 id={id}>{title}</h1>
            <p id={id}>{content}</p>
        </div>


    )
}

export default Note
