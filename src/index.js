import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const date=new Date(2020,8,30,1);
var hour=date.getHours();
var msg="";
var colors="";
console.log(hour);
if(hour>=0 && hour<12)
{
  console.log(1);
  msg="Good Morning!";
  colors="green";
}
else if(hour>=12 && hour<18)
{
    console.log(2);
    msg="Good Afternoon!";
    colors="red";
}
else
{
  console.log(3);
  colors="blue"
  msg="Good Night!";  
}
ReactDOM.render(
<>
<div className="greetingmsg">
<span className="msg">{`Hello, `}</span>
<span className="msg" id="showgreeting" style={{color:colors}}>{msg}</span>
</div>
</>,
  document.getElementById('root')
);

