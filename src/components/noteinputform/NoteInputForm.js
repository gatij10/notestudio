import React, { useState } from "react";
import './NoteInputForm.css'
import { IoIosAdd } from "react-icons/io";

function NoteInputForm({ notes, setNotes }) {
    const [isExpanded, setExpanded] = useState(false);


    const [note, setNote] = useState({
        id: new Date().valueOf().toString(),
        title: "",
        content: "",
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setNote((preValue) => {
            return {
                ...preValue,
                [name]: value,
            };
        });
    }

    function handleExpanded() {
        setExpanded(true);
    }

    function submitButton(event) {
        event.preventDefault();
        setNote({
            id: new Date().valueOf().toString(),
            title: "",
            content: "",
        });

        setNotes([
            ...notes,
            note
        ])
    }


    return (
        <div className="form">
            <form>
                {isExpanded && (
                    <input
                        value={note.title}
                        type="text"
                        placeholder="Title"
                        name="title"
                        onChange={handleChange}
                    />
                )}

                <textarea
                    value={note.content}
                    onClick={handleExpanded}
                    name="content"
                    placeholder="Take a note..."
                    onChange={handleChange}
                    rows={isExpanded ? 3 : 1}
                ></textarea>

                <button onClick={submitButton}>
                    <IoIosAdd size={40} />
                </button>
            </form>
        </div>
    );
}

export default NoteInputForm;