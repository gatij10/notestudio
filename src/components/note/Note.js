import React from 'react'
import './Note.css'

const Note = ({ title, content, timestamp }) => {

    const onDragStart = (event, note_id) => {
        event.dataTransfer.setData("note_id", note_id);
    }

    return (
        <div className="note" draggable onDragStart={(event) => onDragStart(event, timestamp)} id={timestamp}>
            <h1 id={timestamp}>{title}</h1>
            <p id={timestamp}>{content}</p>
        </div>
    )
}

export default Note
