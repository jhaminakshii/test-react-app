import React,{useState} from 'react'

const TxtForms = (props) => {
    const [Text,setText] = useState("Enter Text Here");
    const handleUpperCase = ()=>{
        console.log('clicked upper case');
        let newText = Text.toUpperCase();
        setText(newText);
    }
    const handleLowerCase = () => {
      let newText = Text.toLowerCase();
      setText(newText);
    };
    const handleClearClick =()=>{
    let newText = "";
    setText(newText);
    }

    const handleChangeClick =(event)=>{
        setText(event.target.value);
        console.log('clicked change');
    }
  return (
    <div>
      <div className="container my-4">
        <h1>{props.heading}</h1>
        <div className="form-group">
          <textarea className="form-control" id="boxId" value={Text} onChange={handleChangeClick} rows="8"></textarea>

          <button className="btn btn-primary my-2 mx-1" onClick={handleUpperCase}>Convert to UpperCase</button>
          <button className="btn btn-primary my-2 mx-1" onClick={handleLowerCase}>Convert to LowerCase</button>
          <button className="btn btn-primary my-2  mx-1" onClick={handleClearClick}>Clear Text</button>
          <button className="btn btn-primary my-2 mx-1">toUpperCase</button>
        </div>
      </div>
    </div>
  );
}


export default TxtForms
