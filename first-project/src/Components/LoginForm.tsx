import { useRef, useState } from "react";
import imagetoAdd from '../assets/go.jpeg';
export default function () {
  const nameRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const [nameErr,setNameErr]=useState('');
  function loginSubmit() {
    console.log("loginSubmit Called!!!!!");
    if (nameRef.current !== null) {
        console.log(nameRef.current.value);
        let temp=nameRef.current.value;
        if(temp.length==0){
            setNameErr('Name is required');
        }
        else if(temp.length<20){
            setNameErr('min length is 20 chars');
        }
    }
    if (passRef.current !== null) console.log(passRef.current.value);

  }
  return (
    <div className="container"><center>
      <div className="m-5 bg-secondary p-5 border border-2 border-dark rounded-5" >
      <img src={imagetoAdd} alt="" width={350}/>
      <br />
        <label>UserName</label>
        <br />
        <input type="text" ref={nameRef} className="border border-2 border-dark rounded-3" />
        <br />
        <p>{nameErr}</p>
        <label>Password</label>
        <br />
        <input type="text" ref={passRef} className="border border-2 border-dark rounded-3" />
        <br />
        <button className="btn btn-dark mt-2" onClick={loginSubmit}>
          Press
        </button>
      </div>
      </center></div>
  );
}
