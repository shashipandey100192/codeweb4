import React, {Fragment} from "react";

import mysrcimg from './images/bg.jpg';
import { Mypage, Mypage1 } from "./About";
const myimgs = "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
function Contact()
{

    const first = true;
    const a = ()=>{
        alert("welcome to react.js");
    }

    return( <Fragment>
        <h1>this is contactus component</h1>
        <p>this is paragraph</p>
        <input/>
        <p>tis is heading </p>
        <img src={myimgs} alt="sjdfkljimage"/>
        <h1>sdfsdfsdf</h1>
        <img src={mysrcimg} alt="srcimagedis" width="300"/>
        <h1>img from public</h1>
        <img src="photos/bg.jpg" alt="publicimg" width="400"/>
        <h1>{80+90}</h1>
        <div>this is extern { first ? <Mypage1/> : <Mypage/>}</div>
        <input type="button" value="submit" onClick={a} /> 

        </Fragment>
    )
}

export default Contact