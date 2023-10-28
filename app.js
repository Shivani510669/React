/*
to create str like
<div id="parent">
    < div id="child">
<h1>Im a h 1 tag</h1>
<h2>im a h2 tag</h2>

        </div>
 </div>
 */

 const parent= React.createElement( "div",
 {id:"parent"},[
 React.createElement
 ("div"
 ,{id:"child"},
 [React.createElement("h1",{},"im a h1 tag"),
 React.createElement("h2",{},"im a h2 tag"),
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