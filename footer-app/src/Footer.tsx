import React,{useEffect,useState,useContext} from "react";
import Utils from "../../microfrontend-utils"
const channel=window.__channel;
export default function Footer() {
  const ThemeContext=Utils.getContext("ThemeContext");
  

  const ctx=useContext(ThemeContext?ThemeContext:{});
 
  const [theme, setThemeFromChannel]=useState("");
  console.log(ctx)
  const channelHook=()=>{
    if(channel){
    channel.onmessage=({data})=>{
      console.log(data,"footer")
      setThemeFromChannel(data);
    }
    return ()=>channel.close();
  }
  }
  //eslint-disable-next-block react-hooks/exhaustive-deps
  {
  useEffect(channelHook,[channel])
  }
  return (
    <div>
          {ctx && <p className={Object.values(ctx).join(" ")}>Styled element</p>}
      
      <div>
        <ul>
          <li>footer 1</li>

          <li>footer 2</li>

          <li>footer 3</li>

          <li>footer 4</li>
          {theme &&<li>{theme}</li>}
    
        </ul>
      </div>
    </div>
  );
}
