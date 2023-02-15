import { useState } from "react";
import ReactMarkdown from "react-markdown";

function App() {
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <div className="container-textarea">
        <textarea 
          autoFocus
          className="text-area"
          id="editor" 
          value={ input }
          onChange={ (e)=> setInput(e.target.value) }
          >
        </textarea>
      </div>
      <div className="container-markdown">
        <ReactMarkdown 
          className="markdown" 
          id="preview"
          children={ input }
        />
      </div>
    </div>
  );
}

export default App;
