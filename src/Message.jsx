import React from 'react';
import './index.css';
const date=new Date(2020,8,30,1);
var hour=date.getHours();
var msg="";
var colors="";
console.log(hour);
if(hour>=0 && hour<12)
{
  msg="Good Morning!";
  colors="green";
}
else if(hour>=12 && hour<18)
{
    msg="Good Afternoon!";
    colors="red";
}
else
{
  colors="blue"
  msg="Good Night!";  
}

function Message()
{
return(
    <div id="rootsecond">
    <div className="greetingmsg">
    <span className="msg">{`Hello, `}</span>
    <span className="msg" id="showgreeting" style={{color:colors}}>{msg}</span>
    </div>
    </div>
);
}

export default Message;