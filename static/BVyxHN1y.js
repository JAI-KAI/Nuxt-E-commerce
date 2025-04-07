import{_ as v}from"./BPydkDMu.js";import y from"./CJQaT46z.js";import{u as A}from"./CShGznjS.js";import{u as i}from"./CPVXNTEh.js";import{y as k,c as r,o as c,E as B,a as t,h as s,F as C,g as D,t as d,b as l,w as h,d as g,G as F,H as L}from"./Dyxc-QYZ.js";const N={key:0},V={class:"flex-1"},j={class:"w-2/12 text-gray-600"},S={class:"flex w-3/12 items-center space-x-2"},E=["disabled","onClick"],z=["disabled","onClick"],G=["onClick"],H={key:1,class:"text-gray-500"},J={class:"mt-4 pt-4"},K={class:"flex justify-between text-lg font-semibold"},O={__name:"CartDrawer",setup($){const{minusAmount:p,addAmount:x,deleteItem:f}=A(),u=i("showCart"),o=i("cartItems"),a=k(()=>o.value.reduce((m,e)=>m+e.amount*e.price,0).toFixed(2)),_=()=>{u.value=!1};return(m,e)=>{const b=y,I=v;return c(),r("div",null,[s(u)?(c(),r("div",{key:0,class:"fixed inset-0 bg-black/50",onClick:_})):B("",!0),t("aside",{class:F(["fixed right-0 top-0 h-full w-115 bg-white shadow-lg p-4 transition-transform duration-300 overflow-y-scroll",s(u)?"translate-x-0":"translate-x-full"])},[e[2]||(e[2]=t("h2",{class:"text-lg font-bold mb-4"},"🛒購物車",-1)),s(o).length>0?(c(),r("ul",N,[(c(!0),r(C,null,D(s(o),n=>(c(),r("li",{key:n.id,class:"flex justify-between items-center space-x-3 p-3 border-b"},[t("span",V,d(n.title),1),t("span",j,"$"+d(n.price),1),t("div",S,[t("button",{class:"flex items-center p-1 rounded bg-gray-200 hover:bg-gray-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",disabled:n.amount<=1,onClick:w=>s(p)(n)},[l(b,{name:"i-ic-round-minus",class:"text-xl"})],8,E),t("span",null,d(n.amount),1),t("button",{class:"flex items-center p-1 rounded bg-gray-200 hover:bg-gray-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",disabled:n.amount>=10,onClick:w=>s(x)(n)},[l(b,{name:"i-ic-round-add",class:"text-xl"})],8,z)]),t("button",{class:"flex w-1/12 item-center text-red-500 rounded-full hover:text-red-600 cursor-pointer",onClick:w=>s(f)(n)},[l(b,{name:"i-material-symbols-delete-rounded",class:"text-2xl"})],8,G)]))),128))])):(c(),r("p",H,"購物車是空的")),t("div",J,[t("div",K,[e[1]||(e[1]=t("span",null,"總計",-1)),t("span",null,"$"+d(s(a)),1)]),l(I,{to:s(o).length>0?"/checkout":"/",onClick:e[0]||(e[0]=()=>u.value=!1),class:"block text-center mt-4 w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition cursor-pointer"},{default:h(()=>[g(d(s(o).length>0?"前往結帳":"前往選購"),1)]),_:1},8,["to"])]),e[3]||(e[3]=t("div",{class:"mt-4 pt-4"},[t("p",null," ※ 同一商品數量不得大於10 ")],-1))],2)])}}},P={class:"flex flex-col min-h-screen"},T={class:"bg-blue-600 text-white py-4 shadow-lg"},Y={class:"container mx-auto flex justify-between items-center px-4"},q={class:"flex space-x-6"},M={class:"absolute -top-2 -right-2 bg-red-500 text-xs text-white rounded-full px-2"},Q={class:"flex-1 container mx-auto p-6"},R={class:"bg-gray-800 text-white text-center py-4"},et={__name:"default",setup($){const p=i("showCart",()=>!1);i("showLightBox",()=>!1),i("isAmountOver",()=>!1);const x=i("cartItems",()=>[]);i("category",()=>"ALL");const f=k(()=>x.value.reduce((o,a)=>o+a.amount,0)),u=()=>{p.value=!0};return(o,a)=>{const _=v,m=y,e=O;return c(),r(C,null,[t("div",P,[t("header",T,[t("div",Y,[t("nav",q,[l(_,{to:"/",class:"hover:text-gray-200 font-semibold"},{default:h(()=>a[0]||(a[0]=[g("首頁")])),_:1}),l(_,{to:"/about",class:"hover:text-gray-200 font-semibold"},{default:h(()=>a[1]||(a[1]=[g("關於")])),_:1})]),t("button",{class:"relative cursor-pointer",onClick:u},[l(m,{class:"text-3xl text-white-500",name:"i-material-symbols-shopping-cart-rounded"}),t("span",M,d(s(f)),1)])])]),t("main",Q,[L(o.$slots,"default")]),t("footer",R,[t("p",null,"JAIKAI版權所有 © "+d(new Date().getFullYear()),1)])]),l(e)],64)}}};export{et as default};
