import{r as i,j as e}from"./index-4bnI98Gt.js";const r="https://Balanss.github.io/stamp/assets/like-65wzA0En.png";function d({currentStamp:s,modalIsOpen:l,setModalIsOpen:o}){const t=()=>{o(!1)};return i.useEffect(()=>(l?document.body.style.overflow="hidden":document.body.style.overflow="auto",()=>{document.body.style.overflow="auto"}),[l]),e.jsx("div",{className:"overflow-hidden ",children:l&&e.jsx("section",{className:"bg-slate-200 fixed w-full h-screen z-[1000] inset-0 flex items-center justify-center",children:e.jsxs("div",{className:"flex flex-col items-center gap-10",children:[e.jsx("img",{src:s.imageUrl,alt:"Stamp",className:"h-[400px] w-[300px] border-2 border-blue-black rounded-xl"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-5xl font-bold",children:s.title}),e.jsxs("p",{className:"text-xl",children:["Price: ",s.price]}),e.jsxs("p",{children:["From: ",s.From]}),e.jsxs("p",{children:["Likes: ",s.likes]}),e.jsxs("p",{className:"text-black",children:[" Description: ",s.description," "]})]}),e.jsx("button",{onClick:t,className:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",children:"Close"})]})})})}export{d as M,r as l};