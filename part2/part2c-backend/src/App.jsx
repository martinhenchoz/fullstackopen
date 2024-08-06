import { useState, useEffect } from 'react'
import Note from './components/Note'
import axios from 'axios'
import noteService from './services/notes'

const App = () => {

  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("Una nueva nota")
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    noteService.getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  },[])

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5
    }
    noteService.create(noteObject)
      .then(note => {
        setNotes(notes.concat(note))
        setNewNote('')
      })
  }

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
  }

  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
    noteService.update(id, changedNote)
      .then(changedNote => {
        setNotes(notes.map(note => note.id !== id ? note : changedNote))
      })
      .catch(error => {
        alert(`the note '${note.content}' was already deleted from server`)
        setNotes(notes.filter(n => n.id !== id))
      })
  }

  const notesToShow = showAll ? 
    notes : 
    notes.filter( note => note.important === true )

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          Show {showAll ? 'Important' : 'All' }
        </button>
      </div>
      <table>
        <tbody>
          {notesToShow.map(note => 
            <Note 
              key={note.id} 
              note={note} 
              toggleImportance={() => toggleImportanceOf(note.id)}
            />
          )}
        </tbody>
      </table>
      <form onSubmit={addNote}>
        <input 
          value={newNote}
          onChange={handleNoteChange} 
        />
        <button type="submit">Save</button>
      </form>   
   </div>
  )
}

export default App