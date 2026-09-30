import React from 'react';
import Button from './Button';
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from 'react-icons/fa';
export default function ContactForm(){
    return(
        <div className="main">
            <div className="form">
                <div className="btns">
            <Button text={"VIA SUPPORT CHAT"} icon={<MdMessage/>}/>
             <Button text={"VIA CALL"} icon={<FaPhoneAlt/>}/>
                </div>
            <Button isOutline={true} text={"VIA EMAIL FORM"} icon={<MdMessage/>}/>
            <form>
                <div className="form_container">
                <label htmlFor="name">Name</label>
                <input type="text" id="name"/>
                <label htmlFor="email">Email</label>
                <input type="email" id="email"/>
                <label htmlFor='text'>Text</label>
                <textarea id="text" rows="12" cols="50"></textarea></div>
                <div className="submit-btn">
                 <Button text={"Submit"}/>
                </div>
               
            </form>
            </div>
            <div className="image">
                <img src="/images/Support.png"/>
            </div>
        </div>
        

    )
}
