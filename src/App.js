import { useState } from "react";
import ReactMarkdown from "react-markdown";
import image from './profileEnhanced.svg';

function App() {
  const initText = "# The main heading of React MarkDown Application \n\n## Try this for sub-heading\n### everything can be done with this app:\n\nyou may just type normal paragraphs\n\nAlso, you can add [links](https://github.com/amfazary).\n\nWant to display a line of code like `username=input('Enter username: ')`? \n\nOr, would you like to throw some multi line coding?\n```\nfirstname=input('Enter firstname')\nlastname=input('Enter lastname')\nfullname=firstname+' '+lastname\n```\nFeel free to make your text **Bold** or _Italic_ or **_Both!_** or type some \n> “Quotes!” \n\nHere is some bulleted list\n- level 1\n  - level 2 \n\nHere is some numbererd list:\n1. first element\n2. second element\n3. third element \n\nthis Markdown app was made by Ayman Mahmoud \n\n![amfazary Image]("+image+")"
  const [input, setInput] = useState(initText);
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      setInput(input + "  ")
    }
  } 

  return (
    <div className="App">
      <div className="container-textarea">
        <textarea 
          autoFocus
          className="text-area"
          id="editor" 
          value={ input }
          onChange={ (e)=> setInput(e.target.value) }
          onKeyDown={ (e)=> handleEnter(e) }
          >
        </textarea>
      </div>
      <div className="container-markdown" id="preview">
        <ReactMarkdown 
          className="markdown" 
          children={ input }
        />
      </div>
    </div>
  );
}

export default App;
