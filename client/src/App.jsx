import { useState, useEffect } from "react";
import axios from 'axios';
import { useDeferredValue } from "react";


function App() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");

  useEffect(()=>{
    const getData=async()=>{
      const res=await axios.get("https://mern-backend-latest-f6qp.onrender.com/api/notes")
      console.log(res.data);
    }
    getData()
  },[])

  const addNote=async()=>{
    try {
       const res=await axios.post("https://mern-backend-latest-f6qp.onrender.com/api/notes",{text});
       setNotes([...notes, res.data]); // update UI
        setText(""); // clear input
       console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 500, margin: "40px auto" }}>
      <h2>📝 MERN Docker App</h2>
      <input value={text} onChange={e => setText(e.target.value)}
        placeholder="Enter a note..." style={{ padding: 8, width: "70%" }} />
      <button onClick={addNote} style={{ padding: 8, marginLeft: 8 }}>Add</button>
      <ul>
        {notes.map(n => <li key={n._id}>{n.text}</li>)}
      </ul>
    </div>
  );
}
export default App;