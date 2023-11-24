import React, { useState } from "react";










export default function Textform(props) {

  



  const handleUpClick = () => {
    // console.log("upper-case was clicked")
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("The text has been converted to Upper Case","success");
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("The text has been converted to Lower Case","success");
  };
  const handleOnChange = (event) => {
    // console.log("on change")
    setText(event.target.value);
  };

  const clearText = () => {
    setText(" ");
    props.showAlert("The text has been cleared","success");
  };
  const reverseText = () => {
    let str = text.toString();
    let newText = str.split("").reverse().join("");
    setText(newText);
    props.showAlert("The text has been reversed","success");
  };

  const handleCopy=()=>{
    let my_box= document.getElementById("my_box")
    my_box.select();
    document.execCommand('copy');
    props.showAlert("The text has been copied","success");

  }
  const handleExtraspce=(text)=>{
    let newText= text.toString().replace(/\s+/g ," ");
    setText(newText)

  }

  const countWords = (text) => {
    text = text.toString();
    if (text.split(" ").length < 0) {
      return 0;
    } else {
      return text.split(" ").length - 1;
    }
  };
  const countChar = (text) => {
    text = text.toString();
    let count = 0;
    for (let char of text) {
      if (char !== " ") {
        count += 1;
      }
    }
    return count;
  };



  const [text, setText] = useState("");
 

  return (
    <div className={`contentbox  ${props.mode}_theme `}  >
      <div className="contentarea" >
        <h1>Enter The Text to Analyze Below</h1>

        <div className="textcontainer">
          <textarea
            className="textarea"
            id="my_box"
            name="my-text"
            placeholder="ENTER THE TEXT HERE"
            cols="120"
            onChange={handleOnChange}
            value={text}
            rows="8"
          ></textarea>
        </div>
        <div className="buttonarea">
          <button className="btn" onClick={handleUpClick}>
            Convert To Upper Case
          </button>
          <button className="btn" onClick={handleLowClick}>
            Convert To Lower Case
          </button>
          <button className="btn" onClick={clearText}>
            Clear Text
          </button>
          <button className="btn" onClick={reverseText}>
            Reverse Text
          </button>
          
          <button className="btn" onClick={props.togglemode}>
            {props.btntext}
          </button>
          <button className="btn" onClick={handleCopy}>
            Copy Text
          </button>
          <button className="btn" onClick={handleExtraspce}>
            Remove Extra Space
          </button>
          
        </div>
        <div>
          <h1>Your Text Summary</h1>
          <p>
            {" "}
            {countWords(text)} words and {countChar(text)} characters
          </p>
          <p> {countWords(text) * 0.008} Minutes Read </p>
        </div>
      </div>
    </div>
  );
}
