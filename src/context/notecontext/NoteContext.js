import React, { useContext, useState } from 'react';
import UserContext from '../usercontext/UserContext';
import fire from '../../utils/fire';

const NoteContext = React.createContext()

const NoteProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [notes, setNotes] = useState([]);
  let noteref = fire.firestore().collection("note_db")

  const addNote = (note) => {
    noteref.doc().set(note)
      .then(() => {
        console.log("Document successfully written!");
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
  }

  const getNotes = () => {
    noteref.where("id", "==", user.uid)
      .get()
      .then((querySnapshot) => {
        const tempdoc = []
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          tempdoc.push(doc.data())
        });
        setNotes(tempdoc);
        console.log(notes, 'after')
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  }

  return (
    <NoteContext.Provider
      value={{
        notes,
        setNotes,
        addNote,
        getNotes
      }}
    >
      {children}
    </NoteContext.Provider>
  )

}

export default NoteContext;
export { NoteProvider };