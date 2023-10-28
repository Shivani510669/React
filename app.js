import React from "react";
import  ReactDOM  from "react-dom/client";


 const parent= React.createElement( "div",
 {id:"parent"},[
 React.createElement
 ("div"
 ,{id:"child"},
 [React.createElement("h1",{}," This is Namaste React im a h1 tag"),
 React.createElement("h2",{},"im Shivani"),
]), 
React.createElement
("div"
,{id:"child2"},
[React.createElement("h1",{},"im a h1 tag"),
React.createElement("h2",{},"im a h2 tag"),
])]
);
 console.log(parent);//js object
 const root=ReactDOM.createRoot(document.getElementById("root"));
 root.render(parent);





/*to create hello world

const heading= React.createElement( "h1",
{id:"heading"},
"Hello world from React");
console.log(heading);//js object
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/