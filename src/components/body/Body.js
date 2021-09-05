import React from 'react'
import Note from '../note/Note'

const Body = () => {
    const data = [
        {
            id: 1,
            title: 'Michael Scott',
            content: ' is accomplished but he gets to be the center of attention.'
        },
        {
            id: 2,
            title: 'Dwight Schrute',
            content: 'te about paper and is constantly trying to impress Michael. Dwight is also the '
        },
        {
            id: 3,
            title: 'Jim Halpert',
            content: 'Jim is ack attitude and abili Pam Beasleper saspntertaining hntertain Pam. Several videos on the site demonstrate how Jims work ethic is reflected by the incentive structure the company has in place.'
        },
        {
            id: 4,
            title: 'Pam Beasley',
            content: 'Pam is the secretary at Dunder Mifflin and tries to keep Michael somewhat focused on work and being productive. Pam is unaware of Jims romantic interest in her during the early seasons of the show. Pam eventually becomes the office manager who demonstrates an understanding of budgets and cost constraints.'
        },
        {
            id: 5,
            title: 'Stanley Hudson',
            content: 'Stanley is a fairly successful salesman who resents spending time in an office where he typically is not productive. Stanley tolerates Michael long and typically pointless conference room meetings by spending his time completing crossword puzzles.'
        },
        {
            id: 6,
            title: 'Phyllis Lapin',
            content: 'back and quiet she is very protective of her position in the company and her sales commissions.'
        },
        {
            id: 7,
            title: 'Stanley Hudson',
            content: 'Stanley is a fairly successful salesman who resents spending time in an office where he typically is not productive. Stanley tolerates Michael long and typically pointless conference room meetings by spending his time completing crossword puzzles.'
        },
        {
            id: 8,
            title: 'Stanley Hudson',
            content: 'Stanley is a fairly successful salesman who resents spending time in an office where he typically is not productive. Stanley tolerates Michael long and typically pointless conference room meetings by spending his time completing crossword puzzles.'
        },
        {
            id: 9,
            title: 'Stanley Hudson',
            content: 'Stanley is a fairly successful salesman who resents spending time in an office where he typically is not productive. Stanley tolerates Michael long and typically pointless conference room meetings by spending his time completing crossword puzzles.'
        },
    ]

    return (
        <div style={{ margin: "2%" }}>
            {
                data.map((d) => {
                    return (
                        <Note title={d.title} content={d.content} key={d.id} />
                    )
                })
            }
        </div>
    )
}

export default Body
