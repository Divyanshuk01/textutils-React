import react , {useState} from 'react';
export default function TextForm(props){
const handleupcase=()=>{
    console.log("change to uppercase");
    let newText=text.toUpperCase();
    setText(newText);
}
const handleonchange=(event)=>{
console.log("change ON");

setText(event.target.value);
}
const handlelowercase=()=>{
    console.log("change to Lower case");
    let newText=text.toLowerCase();
    setText(newText);
}
const handlelreverse =()=>{
    var s=text.split("");
    var rev= s.reverse();
    let newTexti= rev.join("");
    setText(newTexti);
}
const handleclear=()=>{
    setText("");
}
const handleextraspace=()=>{
    let newText=text.split(/ \s+/g);
    setText(newText.join(" "));
}

const[text,setText]=useState('Enter your text here');

    return(
    <>
        <div className="container" style={{color : props.mode===`dark`?`white`:`black`}}>
          <h1>{props.heading}</h1> 
  <div className="mb-3">
   
    <textarea className="form-control" value ={text}  id="myBox"  onChange={handleonchange} style={{backgroundColor : props.mode===`dark`?`grey`:`white`, color : props.mode===`dark`?`white`:`black`}}  rows='8'/>
 
  </div>
  
  
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleupcase}>Change to upperCase</button>
  <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" margin='5' onClick={handlelowercase} >Change to LowerCase</button>
  <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" margin='5' onClick={handlelreverse} >Reverse text</button>
  <button   disabled={text.length===0} className="btn btn-primary mx-1 my-1" margin='5' onClick={handleclear} >Clear</button>
  <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" margin='5' onClick={handleextraspace} >Remove ExtraSpace</button>


        </div>
                <div className="container" style={{ color : props.mode===`dark`?`white`:`black`}}>

                    <h1>TextSummary</h1>
                    <p>{text.split(" ").filter((Element)=>{return Element.length!==0}).length} words and {text.length}characters</p>
                    <p>{0.008* text.length} minutes to read the whole text</p>
                    <h2>Preview</h2>
                    <p>{text.length?text:"No Text to preview"}</p>
                </div>

</>
    )
}