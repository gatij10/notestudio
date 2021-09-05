import React, { useState } from 'react'
import './Body.css'
import Note from '../note/Note'
import NoteInputForm from '../noteinputform/NoteInputForm'

const Body = () => {
    const [notes, setNotes] = useState([]);

    const onDragOver = (event) => {
        event.preventDefault();
    }

    const findIndex = (arr, idx) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id === idx) {
                console.log(arr[i])
                return i
            }
        }
    }

    const swap = (arr, src, target) => {
        var tmp = arr[src];
        arr[src] = arr[target];
        arr[target] = tmp;

        return arr
    }


    const onDrop = (event) => {
        let noteSourceId = event.dataTransfer.getData("note_id");
        let noteTargetId = event.target.id

        console.log(typeof noteSourceId)

        let data = [...notes]

        let src_idx = findIndex(data, noteSourceId);
        let target_idx = findIndex(data, noteTargetId);
        swap(data, src_idx, target_idx);
        setNotes(data)

    }

    return (
        <div>
            <NoteInputForm notes={notes} setNotes={setNotes} />
            <div className="note-container" onDragOver={(event) => onDragOver(event)}
                onDrop={(event) => onDrop(event)}>
                {
                    notes.map((n) => {
                        return (
                            <Note title={n.title} content={n.content} key={n.id} id={n.id} />
                        )
                    })
                }
            </div >
        </div>
    )
}

export default Body
