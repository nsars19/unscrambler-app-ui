(this["webpackJsonpscrambler-ui"]=this["webpackJsonpscrambler-ui"]||[]).push([[0],{24:function(n,e,t){"use strict";t.r(e);var r,o,i=t(2),a=t(1),s=t.n(a),c=t(12),d=t.n(c),p=t(4),b=t(7),l=t.n(b),x=t(13),h=t(3),u="#1e2022",j="#52616b",f="#c9d6df",m="#f0f5f9",g="#faaba9",O=t(0),v=h.b.div(r||(r=Object(i.a)(["\n  display: ",";\n  position: absolute;\n  bottom: -75px;\n  padding: 10px;\n  border-radius: 18px;\n  background: ",";\n  max-width: 300px;\n  font-size: 0.9rem;\n  animation: appear 300ms ease;\n\n  & .arrow {\n    height: 20px;\n    width: 20px;\n    background: ",";\n    position: absolute;\n    top: -6px;\n    left: 18px;\n    transform: rotate(45deg);\n  }\n\n  @keyframes appear {\n    from {\n      bottom: -50px;\n      opacity: 0;\n      transform: scale(0.7);\n    }\n    top {\n      bottom: -75px;\n      opacity: 1;\n      transform: scale(1);\n    }\n  }\n"])),(function(n){return n.vis?"flex":"none"}),g,g);function w(n){var e=n.vis,t=n.setLengthError;return Object(O.jsxs)(v,{vis:e,onClick:function(n){t(!1)},children:[Object(O.jsx)("p",{children:"Please try a word less than 8 letters. Anything more takes a very long time."}),Object(O.jsx)("div",{className:"arrow"})]})}var y,k=h.b.div(o||(o=Object(i.a)(["\n  display: ",";\n  align-items: center;\n  position: fixed;\n  top: calc(50% - 85px);\n  left: calc(50% - 150px);\n  height: 170px;\n  width: 300px;\n  background: ",";\n  color: ",";\n  border: 50px solid ",";\n  border-top-color: ",";\n  border-radius: 28px;\n  overflow: hidden;\n  animation: lights 1500ms ease infinite;\n\n  span {\n    display: inline-block;\n    height: 20px;\n    width: 20px;\n    border-radius: 50%;\n    background: ",";\n    animation: goLeft 2000ms ease infinite;\n    margin-right: -15px;\n    position: absolute;\n    right: 0;\n  }\n\n  span:first-child {\n    animation-delay: 0;\n  }\n\n  span:nth-child(2) {\n    animation-delay: 500ms;\n  }\n\n  span:nth-child(3) {\n    animation-delay: 1000ms;\n  }\n\n  @keyframes goLeft {\n    0% {\n      right: 0;\n    }\n    25% {\n      transform: scale(2.5);\n    }\n    75% {\n      transform: scale(1);\n    }\n    100% {\n      right: 340px;\n      transform: scale(1);\n    }\n  }\n\n  @keyframes lights {\n    25% {\n      border-top-color: ",";\n      border-right-color: ",";\n      border-bottom-color: ",";\n      border-left-color: ",";\n    }\n    50% {\n      border-top-color: ",";\n      border-right-color: ",";\n      border-bottom-color: ",";\n      border-left-color: ",";\n    }\n    75% {\n      border-top-color: ",";\n      border-right-color: ",";\n      border-bottom-color: ",";\n      border-left-color: ",";\n    }\n    100% {\n      border-top-color: ",";\n      border-right-color: ",";\n      border-bottom-color: ",";\n      border-left-color: ",";\n    }\n  }\n"])),(function(n){return n.vis?"flex":"none"}),f,u,j,g,j,g,j,j,j,j,g,j,j,j,j,g,j,j,j,j,g);function C(n){var e=n.vis;return Object(O.jsxs)(k,{vis:e,children:[Object(O.jsx)("span",{}),Object(O.jsx)("span",{}),Object(O.jsx)("span",{})]})}var z,L=h.b.form(y||(y=Object(i.a)(["\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n\n  h2 {\n    margin-bottom: 8px;\n    margin-left: 3px;\n  }\n\n  .input-wrap {\n    position: relative;\n\n    .field-wrap {\n      display: flex;\n      align-items: center;\n    }\n  }\n\n  input {\n    padding: 13px 6px;\n    height: 50px;\n    border-style: none;\n    border: 1px solid ",";\n    outline: none;\n\n    &:focus {\n      box-shadow: 0 0 1.5px ",", 0 0 2px ",';\n    }\n  }\n\n  input[type="text"] {\n    font-size: 1rem;\n    min-height: 50px;\n    width: 400px;\n    border-right: none;\n    border-top-left-radius: 8px;\n    border-bottom-left-radius: 8px;\n  }\n\n  input[type="submit"] {\n    font-size: 16px;\n    padding-left: 25px;\n    padding-right: 25px;\n    border: 1px solid transparent;\n    border-left: none;\n    border-top-right-radius: 8px;\n    border-bottom-right-radius: 8px;\n    cursor: pointer;\n    background: ',";\n    color: ",';\n\n    &:hover,\n    &:active {\n      filter: brightness(1.1);\n    }\n  }\n\n  @media (max-width: 540px) {\n    input[type="text"] {\n      width: 230px;\n    }\n\n    input[type="submit"] {\n      padding-left: 12px;\n      padding-right: 12px;\n    }\n  }\n'])),f,j,j,j,m);function S(n){var e=n.setWords,t=Object(a.useState)(""),r=Object(p.a)(t,2),o=r[0],i=r[1],s=Object(a.useState)(!1),c=Object(p.a)(s,2),d=c[0],b=c[1],h=Object(a.useState)(!1),u=Object(p.a)(h,2),j=u[0],f=u[1],m=function(){var n=Object(x.a)(l.a.mark((function n(t){var r,i,a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),o){n.next=5;break}return n.abrupt("return");case 5:if(!(o.length>8)){n.next=8;break}return b(!0),n.abrupt("return");case 8:return f(!0),b(!1),r="https://guarded-shore-53197.herokuapp.com/unscramble?word="+o,n.next=13,fetch(r).catch((function(n){return console.error(n)}));case 13:return i=n.sent,n.next=16,i.json();case 16:a=n.sent,e(a),f(!1);case 19:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(L,{onSubmit:m,children:Object(O.jsxs)("div",{className:"input-wrap",children:[Object(O.jsx)("h2",{children:"Type a word and get started!"}),Object(O.jsxs)("div",{className:"field-wrap",children:[Object(O.jsx)("input",{type:"text",value:o,onChange:function(n){return i(n.target.value)}}),Object(O.jsx)("input",{type:"submit",value:"Scramble!"})]}),Object(O.jsx)(w,{vis:d,setLengthError:b})]})}),Object(O.jsx)(C,{vis:j})]})}var F,N=h.b.div(z||(z=Object(i.a)(["\n  position: absolute;\n  width: 100%;\n"])));function E(){return Object(O.jsx)(N,{children:Object(O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320",children:Object(O.jsx)("path",{fill:"#faaba9",fillOpacity:"1",d:"M0,288L60,293.3C120,299,240,309,360,304C480,299,600,277,720,250.7C840,224,960,192,1080,192C1200,192,1320,224,1380,240L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"})})})}var B=h.b.header(F||(F=Object(i.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding-left: 20px;\n  padding-top: 20px;\n\n  h1 {\n    font-size: 3rem;\n  }\n\n  h3 {\n    font-size: 1.2rem;\n  }\n"])));function J(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(E,{}),Object(O.jsxs)(B,{children:[Object(O.jsx)("h1",{children:"Scrambler"}),Object(O.jsx)("h3",{children:"words within words"})]})]})}var M,W=t(9),A=t.n(W),D=h.b.div(M||(M=Object(i.a)(["\n  div.section-wrap {\n    padding: 10px 20px;\n    width: 100%;\n    flex-direction: column;\n    align-items: center;\n\n    h2 {\n      font-size: 2rem;\n    }\n\n    div {\n      font-size: 1.1rem;\n      max-width: 600px;\n      text-align: center;\n    }\n\n    &:last-child {\n      margin-bottom: 30px;\n    }\n  }\n"])));function I(n){var e=n.words;return Object(O.jsx)(D,{children:Object.entries(e).map((function(n){var e=Object(p.a)(n,2),t=e[0],r=e[1];return Object(O.jsxs)("div",{className:"section-wrap",style:{display:r.length>0?"flex":"none"},children:[Object(O.jsx)("h2",{children:t}),Object(O.jsx)("div",{children:r.map((function(n,e){return Object(O.jsx)(s.a.Fragment,{children:e===r.length-1?n:n+", "},A()())}))})]},A()())}))})}var P,T=function(){var n=Object(a.useState)({}),e=Object(p.a)(n,2),t=e[0],r=e[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(J,{}),Object(O.jsx)(S,{setWords:r}),Object(O.jsx)(I,{words:t})]})},Z=Object(h.a)(P||(P=Object(i.a)(["\n  *,\n  *::before,\n  *::after {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    font-family: 'Oswald', Courier, sans-serif;\n    font-size: 16px;\n    background: ",";\n    color: ",";\n  }\n"])),m,u);d.a.render(Object(O.jsxs)(s.a.StrictMode,{children:[Object(O.jsx)(Z,{}),Object(O.jsx)(T,{})]}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.d66619a7.chunk.js.map