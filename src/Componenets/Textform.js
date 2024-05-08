import React ,{useState} from 'react';
// import  PropTypes  from 'react';


export default function  Textform(props)
{
  const [Text, setText] = useState (""); 

  const handleupclick = ()=> {

   let newText = Text.toUpperCase();
   setText(newText);
   props.showAlert("Converted To UpperCase","success")
  }

  const handlelowerclick = ()=> {

   let newText2 = Text.toLowerCase();
   setText(newText2);
   props.showAlert("Converted To LowerCase","success")
  }

  const handleChange = (event)=>{

   setText(event.target.value);

  }
  const handleclear = ()=> {

   let newText3 = "";
   setText(newText3);
   props.showAlert("Text Cleared","success");
  }

  const handleFirstLetterUppercase = () =>{
   function capitalize(str) {
     return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
   }
   const upper = Text.split(' ').map(capitalize).join(' ');
   setText(upper)
 }
 
 const handleExtraSpaces = ()=>
 {
   let newtext = Text.split(/[ ]+/);
   setText(newtext.join(" "));
   props.showAlert("Removed Extra Spaces","success")
 }

 const lengthOfWord= ()=> {
  let count = 0
  for (let i = 0; i < Text.split(" ").length; i++) {
      if (Text.split(" ")[i] === "") {
          count++
      }
  }
  return Text.split(" ").length - count
}

  


   
   return(
      <>
      
   <div className='container' style={{color : props.mode==='dark'?'white':'black'}}>
   <h1 style={{color : props.mode==='dark'?'Yellow':'black'}}> {props.heading} </h1>
   
 <div className="box">
  <label htmlFor="textarea1" class="form-label"></label>
  <textarea className="form-control" value={Text} onChange={handleChange} style={{backgroundColor : props.mode==='dark'?'grey':'white' , color :props.mode==='dark'?'white':'black' }} rows="5"></textarea>
  <button className="btn btn-outline-primary mx-3" onClick={handleupclick}> Convert To Uppercase</button>       
  <button className="btn btn-outline-primary mx-2" onClick={handlelowerclick}> Convert To Lowercase</button>
  <button className="btn btn-outline-primary mx-2" onClick={handleFirstLetterUppercase}> First Letter To Upper</button>
  <button className="btn btn-outline-primary mx-2" onClick={handleExtraSpaces}> Remove Extra Space</button>
  <button className="btn btn-outline-success mx-2" onClick={handleclear}> Clear Text</button>
  </div>
   </div> 
   <div className="container my-4">
      <h2 style={{color : props.mode==='dark'?'Yellow':'black'}}> Your Text Summary </h2>
      <p className='para' style={{backgroundColor : props.mode==='dark'?'darkgrey':'white'}} > No of Words are = {lengthOfWord()} <br/>
          No of Chracters are = {Text.length} <br/>
          Minutes To Read = {0.008 * Text.split(" ").length} <br/>
      </p>
    <h3 style={{color : props.mode==='dark'?'Yellow':'black'}} >Preview</h3>
    <p2 style={{color : props.mode==='dark'?'white':'black'}}>{Text.length>0?Text:"Enter Something in TextArea to Preview"}</p2>
   </div>
   </>
   )
}