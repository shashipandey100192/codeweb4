import React, { useEffect } from 'react';
import { useState } from 'react';

export default function Mystate() {


const a = "this is react js";
 const [abc,xyz]=useState(a);

const myupdate = ()=>{
    xyz("noida up");
}

// useEffect(()=>{
//     alert("welcome");
// })


const [mytext , mytextupdate] = useState("default value");

const myinputchange = (p)=>{
    console.log(p.target.value);
    mytextupdate(p.target.value);

}

  return (
    <div>Mystate
        <h1>{abc}</h1>

        <input type='button' value="change value" onClick={myupdate}/>
<input type='text'  value={mytext} onInput={myinputchange} />

<h2>{mytext}</h2>

    </div>
  )
}
