import{r as o,j as s,w,v as y,x as C,y as f,U as N,a as S,Q as p,d as v,z as U,A as F,B as M}from"./index-4bnI98Gt.js";import{l as D,M as $}from"./Modal-8pKvsF1f.js";import{r as A}from"./right-AN99vaOx.js";function E({setStamps:n}){const r=t=>{const h=w(y(f,"FreeDealStamps"));return C(h,l=>{const c=l.docs.map(u=>{const a=u.data();return Object.keys(a).map(e=>({...a[e],stampId:e}))}).flat().sort(()=>.5-Math.random()).slice(0,t);n(c)})};return o.useEffect(()=>{const t=r(4);return()=>t()},[]),s.jsxs("section",{className:"flex items-center gap-10 justify-end",children:[s.jsx("button",{className:"bg-red-700 text-white font-bold py-2 px-4 rounded",onClick:()=>r(4),children:" Free tier "}),s.jsx("img",{src:A,alt:"right",className:"w-[30px] h-[30px] cursor-pointer",onClick:()=>{n([]),r(4)}})]})}function L(){const[n,r]=o.useState([]),{currentUser:t,isUserPremium:h,UserCompanyName:b}=o.useContext(N),[l,i]=o.useState(!1),[j,c]=o.useState(null),u=async e=>{if(console.log(e),!S.currentUser){p.error("You must be signed in to like a stamp.");return}const m=v(f,"FreeDealStamps",`Free-${b}`);await U(f,async d=>{const g=await d.get(m);if(!g.exists())throw"Document does not exist!";const x=g.data()[e];(x.likesCollection||[]).includes(t)?(d.update(m,{[`${e}.likes`]:x.likes-1,[`${e}.likesCollection`]:F(t)}),p.info("Unliked.")):(d.update(m,{[`${e}.likes`]:x.likes+1,[`${e}.likesCollection`]:M(t)}),p.info("Liked."))})},a=e=>{c(e),i(!0)};return s.jsxs("div",{className:"text-black mt-[120px] flex flex-col items-center",children:[s.jsx(E,{setStamps:r}),s.jsx("section",{className:"flex flex-row gap-10 items-center justify-center flex-wrap p-5",children:n.slice(0,8).map((e,k)=>s.jsxs("div",{className:"flex flex-col justify-between items-center  relative",children:[s.jsxs("div",{style:{position:"relative"},children:[s.jsx("img",{src:e.imageUrl,alt:"",className:"h-[400px] w-[300px] border-2 border-blue-black rounded-xl"}),s.jsx("span",{className:"bg-red-500 text-white font-bold p-2 cursor-pointer",style:{position:"absolute",top:0,left:0},onClick:()=>{a(e)},children:"  More info"})]}),s.jsxs("div",{className:"absolute bg-green-700 bottom-0 text-white w-full flex flex-row gap-10 justify-center items-center ",children:[s.jsxs("div",{className:"flex gap-1",children:[s.jsxs("p",{children:[" ",e.likes]}),s.jsx("img",{src:D,className:"w-6 h-6 cursor-pointer",onClick:()=>u(e.stampId)})]}),s.jsxs("p",{children:[" ",e.fromWho]})]})]},k))}),s.jsx($,{modalIsOpen:l,setModalIsOpen:i,currentStamp:j})]})}export{L as default};