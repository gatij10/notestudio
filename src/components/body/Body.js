import React, { useState } from 'react'
import './Body.css'
import Note from '../note/Note'

const Body = () => {
    const [notes, setNotes] = useState([
        {
            id: "aa",
            title: 'Michael Scott',
            content: ' is accomplished but he gets to be the center of attention.'
        },
        {
            id: "bb",
            title: 'Dwight Schrute',
            content: 'te about paper and is constantly trying to impress Michael. Dwight is also the '
        },
        {
            id: "cc",
            title: 'Jim Halpert',
            content: 'Jim is ack attitude and abili Pam Beasleper saspntertaining hntertain Pam. Several videos on the site demonstrate how Jims work ethic is reflected by the incentive structure the company has in place.'
        },
        {
            id: "dd",
            title: 'Pam Beasley',
            content: 'Pam is the secretary at Dunder Mifflin and tries to keep Michael somewhat focused on work and being productive. Pam is unaware of Jims romantic interest in her during the early seasons of the show. Pam eventually becomes the office manager who demonstrates an understanding of budgets and cost constraints.'
        },
        {
            id: "ee",
            title: 'Stanley Hudson',
            content: 'Stanley is a fairly successful salesman who resents spending time in an office where he typically is not productive. Stanley tolerates Michael long and typically pointless conference room meetings by spending his time completing crossword puzzles.'
        },
        {
            id: "ff",
            title: 'Phyllis Lapin',
            content: 'back and quiet she is very protective of her position in the company and her sales commissions.'
        },
        {
            id: "gg",
            title: 'Stanley Hudson',
            content: 'Stanley is a fairly successful salesman who resents spending time in an office where he typically is not productive. Stanley tolerates Michael long and typically pointless conference room meetings by spending his time completing crossword puzzles.'
        },
        {
            id: "hh",
            title: 'Stanley Hudson',
            content: 'Stanley is a fairly successful salesman who resents spending time in an office where he typically is not productive. Stanley tolerates Michael long and typically pointless conference room meetings by spending his time completing crossword puzzles.'
        },
        {
            id: "ii",
            title: 'Stanley Hudson',
            content: 'Stanley is a fairly successful salesman who resents spending time in an office where he typically is not productive. Stanley tolerates Michael long and typically pointless conference room meetings by spending his time completing crossword puzzles.'
        },
    ])

    const onDragOver = (event) => {
        event.preventDefault();
    }

    const findIndex = (arr, idx) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id === idx) {
                return i
            }
        }
        return -1
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

        let data = [...notes]

        let src_idx = findIndex(data, noteSourceId);
        let target_idx = findIndex(data, noteTargetId);
        swap(data, src_idx, target_idx);
        setNotes(data)

    }

    return (
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
    )
}

export default Body
