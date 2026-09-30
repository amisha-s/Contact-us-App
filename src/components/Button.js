import React from 'react';
import { MdMessage } from "react-icons/md";
import '../styles/Button.css'

export default function Button(props){
    return(
        <button className={props.isOutline? "outline_btn":"primary_btn"}> {props.icon}{props.text}</button>
       
    )
}