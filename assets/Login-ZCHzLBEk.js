import{r as l,u as m,j as e,k as x,G as p,a as i,s as f,Q as a,e as w}from"./index-sA6-8gwN.js";const v=()=>{const[n,c]=l.useState(""),[o,u]=l.useState(""),d=m(),g=async()=>{const s=new p;try{const r=(await f(i,s)).user;a.success("Signed in successfully"),setTimeout(()=>{d("/")},2e3)}catch(t){console.error(t),a.error(t.message)}},h=s=>{s.preventDefault(),w(i,n,o).then(t=>{t.user,a.success("Signed in successfully")}).catch(t=>{const r=t.message;a.error(r)})};return e.jsxs("div",{className:"bg-white flex flex-col justify-center items-center h-screen",children:[e.jsx(x,{}),e.jsxs("div",{className:"flex flex-col gap-10 w-2/5 m-auto",children:[e.jsxs("form",{className:"bg-red-500 p-10 flex flex-col gap-10 rounded-md text-white-100 font-fold",onSubmit:h,children:[e.jsx("h2",{children:"Sign In"}),e.jsx("input",{type:"email",placeholder:"Email",value:n,onChange:s=>c(s.target.value)}),e.jsx("input",{className:"text-black",type:"password",placeholder:"Password",value:o,onChange:s=>u(s.target.value)}),e.jsx("button",{children:"Sign In with Email"})]}),e.jsx("button",{type:"button",onClick:g,className:"bg-red-500 p-10 rounded-md text-white-100 font-fold",children:"Sign In with Google"})]})]})};export{v as default};
