import k from"./CJQaT46z.js";import{_ as v}from"./BPydkDMu.js";import{y,c as r,a as t,C,h as s,b as a,F as x,g as $,t as n,w as _,D as F,o as c,d as p}from"./Dyxc-QYZ.js";import{u as I}from"./CShGznjS.js";import{u as B}from"./CPVXNTEh.js";const D={class:"max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg"},N={key:0},S=["src"],V={class:"flex-1"},j={class:"text-lg font-semibold"},A={class:"text-gray-500"},E={class:"flex items-center w-2/12 space-x-2"},L=["disabled","onClick"],P={class:"text-lg"},T=["disabled","onClick"],q={class:"w-1/12 text-right font-semibold"},z=["onClick"],G={class:"flex justify-between items-center mt-6 text-xl font-bold"},H={key:1,class:"text-center text-gray-500"},U={__name:"checkout",setup(J){const{minusAmount:b,addAmount:g,deleteItem:h}=I(),l=B("cartItems"),f=y(()=>l.value.reduce((i,o)=>i+o.price*o.amount,0)),w=()=>{l.value=[]};return(i,o)=>{const d=k,u=v;return c(),r(x,null,[t("div",D,[o[2]||(o[2]=t("h1",{class:"text-2xl font-bold mb-4"},"結帳頁面",-1)),s(l).length>0?(c(),r("div",N,[t("ul",null,[(c(!0),r(x,null,$(s(l),e=>(c(),r("li",{key:e.id,class:"flex items-center w-full border-b py-4 space-x-3"},[t("img",{src:e.image,alt:"商品圖片",class:"w-1/12 h-16 object-contain rounded-lg mr-4"},null,8,S),t("div",V,[t("h2",j,n(e.title),1),t("p",A,"$"+n(e.price)+" x "+n(e.amount),1)]),t("div",E,[t("button",{class:"flex items-center p-2 bg-gray-200 hover:bg-gray-300 rounded cursor-pointer disabled:cursor-not-allowed",disabled:e.amount<=1,onClick:m=>s(b)(e)},[a(d,{name:"i-ic-round-minus",class:"text-lg"})],8,L),t("span",P,n(e.amount),1),t("button",{class:"flex items-center p-2 bg-gray-200 hover:bg-gray-300 rounded cursor-pointer disabled:cursor-not-allowed",disabled:e.amount>=10,onClick:m=>s(g)(e)},[a(d,{name:"i-ic-round-add",class:"text-lg"})],8,T)]),t("p",q,"$"+n((e.price*e.amount).toFixed(2)),1),t("button",{class:"flex item-center w-1/12 text-red-500 rounded-full hover:text-red-600 cursor-pointer",onClick:m=>s(h)(e)},[a(d,{name:"i-material-symbols-delete-rounded",class:"text-2xl"})],8,z)]))),128))]),t("div",G,[o[0]||(o[0]=t("span",null,"總金額：",-1)),t("span",null,"$"+n(s(f).toFixed(2)),1)]),a(u,{to:"/orderComplete",class:"block text-center mt-6 w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition cursor-pointer",onClick:w},{default:_(()=>o[1]||(o[1]=[p(" 確認結帳 ")])),_:1})])):(c(),r("p",H,"購物車內沒有商品"))]),C(a(u,{to:"/",class:"max-w-3xl mx-auto block text-center mt-6 w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition cursor-pointer"},{default:_(()=>o[3]||(o[3]=[p(" 前往商品頁面進行選購 ")])),_:1},512),[[F,s(l).length===0]])],64)}}};export{U as default};
