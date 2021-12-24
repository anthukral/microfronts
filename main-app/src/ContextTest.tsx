import React,{useContext} from "react";
import Utils from "../../microfrontend-utils";

export default function ContextTest(){
    const theme=Utils.getContext("ThemeContext");
   console.log( useContext(theme));

    return (<h1>Test</h1>)
}