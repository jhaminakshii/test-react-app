import React,{useState} from 'react'

const TxtForms = (props) => {
    const [text,setText] = useState("Enter Text Here");
    const handleUpperCase = ()=>{
       // console.log('clicked upper case');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLowerCase = () => {
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to LowerCase", "success");
    };
    const handleClearClick =()=>{
    let newText = "";
    setText(newText);
    }
    const handleCopy =()=>{
        let newText = document.getElementById("boxId");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Text copied to clipboard", "success");
    }
    const handleSpace =()=>{
        let newText = text.split(/[ ]+/).join(" ");
        setText(newText);
        props.showAlert("Extra space has removed", "success");
    }

    const handleChangeClick =(event)=>{
        setText(event.target.value);
       // console.log('clicked change');
       props.showAlert("Cleared all text", "success");
    }
  return (
    <div>
      <div className={`container my-4 text-${props.mode==='light'?'dark':'light'}`}>
        <h1>{props.heading}</h1>
        <div className="form-group">
          <textarea className={`form-control bg-${props.mode==='light'?'light':'secondary'} text-${props.mode==='light'?'dark':'light'}`} id="boxId" value={text} onChange={handleChangeClick} rows="8"></textarea>

          <button className="btn btn-primary my-2 mx-1" onClick={handleUpperCase}>Convert to UpperCase</button>
          <button className="btn btn-primary my-2 mx-1" onClick={handleLowerCase}>Convert to LowerCase</button>
          <button className="btn btn-primary my-2  mx-1" onClick={handleClearClick}>Clear Text</button>
          <button className="btn btn-primary my-2  mx-1" onClick={handleCopy}>Copy Text</button>
          <button className="btn btn-primary my-2  mx-1" onClick={handleSpace}>Remove Extra Spaces</button>
        </div>
      </div>
      <div className={`container my-4 text-${props.mode==='light'?'dark':'light'}`}>
      <h1>Your Summury</h1>
        <p>{text.split('.').length-1} Sentence, {text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008*text.split(" ").length} take minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}


export default TxtForms
