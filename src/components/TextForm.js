import React, {useState} from 'react'


 function TextForm(props) {
    const handleUpClick=()=>{
       
        let newText =text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success");
    }
    const handleLowerClick=()=>{
        let newText =text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!","success");
    }
    const handleclearClick=()=>{
        let newText ="";
        setText(newText);
        props.showAlert("TextCleard","success");
    }

    const handleOnChange=(event)=>{
    setText(event.target.value)
   
    }
    const handleCopy = ()=>{
       let text =document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copy to Clipboard","success");
    }
    const [text, setText] = useState("");
        //text = "new text"      wrong way to change state
         //setText("new text")   correct way to change state
         
    return (
        <>

        <div className="container"style={{color:props.mode==="dark"?"white":"#042743"}}>
        <h1>{props.heading}</h1>
        <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"#042743"}}></textarea>
        <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>


        </div>
        <div className="container my-3" style={{color:props.mode==="dark"?"white":"#042743"}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} word and {text.length} characters</p>
            <h2>Perview</h2>
            <p>{text.length>0?text:"Enter something in textbox to preview here!"}</p>

        </div>
        </>

    )
}
export default TextForm
