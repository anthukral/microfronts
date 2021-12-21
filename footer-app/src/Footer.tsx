import React,{useEffect,useState} from "react";

const channel=window.__channel;
export default function Footer() {
  const [theme, setThemeFromChannel]=useState("");

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
