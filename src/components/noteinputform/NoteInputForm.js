import React, { useState, useContext } from "react";
import './NoteInputForm.css'
import { IoIosAdd } from "react-icons/io";
import UserContext from "../../context/usercontext/UserContext";
import NoteContext from "../../context/notecontext/NoteContext";

function NoteInputForm() {
    const [isExpanded, setExpanded] = useState(false);

    const { user } = useContext(UserContext);
    const { addNote, notes, setNotes } = useContext(NoteContext);

    const [note, setNote] = useState({
        id: user.uid,
        title: "",
        content: "",
        timestamp: new Date().valueOf().toString(),
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

        setNotes([
            ...notes,
            note
        ])

        addNote(note);
        setNote({
            id: user.uid,
            title: "",
            content: "",
            timestamp: new Date().valueOf().toString()
        });
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