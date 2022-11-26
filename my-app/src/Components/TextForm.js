import React, {useState} from 'react'

export default function TextForm(probs) {
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked")
    let x = text.toUpperCase();
    setText(x)
    probs.showAlert("converted to uppercase", "success");
  }

  const handleloClick = ()=>{
    let x = text.toLowerCase();
    setText(x)
    probs.showAlert("converted to lowercase", "success");
  }

  const handleloClear = ()=>{
    let x = '';
    setText(x)
    probs.showAlert("Text cleared", "success");
  }

  const handletoSpeak = ()=>{
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    probs.showAlert("text is speaked", "success");
  }

  const handleOnChange = (event)=>{
    // console.log("On change")
    setText(event.target.value)
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className= "container" style = {{color: probs.mode === 'dark'? 'white':'black'}}>
        <h1>{probs.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value = {text} onChange = {handleOnChange} style={{backgroundColor:probs.mode === 'dark'? 'rgb(38 15 76)':'white', 
        color: probs.mode === 'dark'? 'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleloClick} >Convert to Lowercase</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleloClear} >Clear</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-1" onClick={handletoSpeak} >Speak</button>
    </div>
    <div className="container mt-3" style={{color:probs.mode === 'dark'? 'white':'black'}} >
      <h1> Your text summary </h1>
      <p>{text.length>0? text.split(/\s+/).length + "words and" + text.length + "characters" : "Please enter something" }</p>
      {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
      <p>{text.length>0? 0.008 * text.split(" ").length + "Minutes read" :""}</p>
      {/* <p> {0.008 * text.split(" ").length} Minutes read </p> */}
      <h2> Preview </h2>
      <p> {text.length>0? text: "Enter something to preview it here!"} </p>
    </div>
    </>
    
  )
}
