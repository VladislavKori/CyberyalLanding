(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[695,126,323],{7962:function(e,t,a){"use strict";var i,n=a(7294);function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}t.Z=function(e){return n.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 25 24"},e),i||(i=n.createElement("path",{d:"m21.28 12.531-6.75 6.75a.75.75 0 1 1-1.06-1.061l5.47-5.47H4.25a.75.75 0 1 1 0-1.5h14.69l-5.47-5.469a.75.75 0 1 1 1.06-1.061l6.75 6.75a.748.748 0 0 1 0 1.061Z"})))}},6144:function(e,t,a){"use strict";var i,n=a(7294);function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}t.Z=function(e){return n.createElement("svg",r({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,fill:"none"},e),i||(i=n.createElement("path",{d:"m10 10 8 8M2 18l8-8-8 8ZM18 2l-8.002 8L18 2Zm-8.002 8L2 2l7.998 8Z"})))}},7338:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/affiliate",function(){return a(27)}])},4294:function(e,t,a){"use strict";var i=a(6154);let n=i.Z.create({baseURL:"https://cyberyal.com/",headers:{"X-Requested-With":"XMLHttpRequest"},withCredentials:!0});t.Z=n},2126:function(e,t,a){"use strict";a.r(t);var i=a(5893),n=a(7294),r=a(9238),s=a(1163),o=a(1664),l=a.n(o),c=a(2474);t.default=function(){let e=(0,s.useRouter)();var t=document.getElementById("ref");let a="/privacy"===e.pathname,o="/termsofuse"===e.pathname,m="/home"===e.pathname;e.pathname;let d=e.pathname,[u,h]=(0,n.useState)(!1),f=()=>null==t?void 0:t.scrollIntoView();return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("header",{className:"header",children:[(0,i.jsxs)("div",{className:"header__left",children:[(0,i.jsx)(l(),{href:"/",children:(0,i.jsx)("div",{className:"header__logo",children:(0,i.jsx)(r.Z,{className:"header__logo-img"})})}),(0,i.jsxs)("nav",{className:"header__navbar",children:[(0,i.jsx)(l(),{className:"header__link ".concat("/about"===d?"active_link":""),href:"/about",children:"About"}),(0,i.jsx)(l(),{className:"header__link ".concat("/affiliate"===d?"active_link":""),href:"/affiliate",children:"Affiliate"})]})]}),(0,i.jsx)("div",{className:"header__btn_container",children:a||o?"":m?(0,i.jsx)("button",{className:"header__btn",onClick:f,children:"Subscribe"}):(0,i.jsx)("div",{className:"header__btns",children:(0,i.jsx)(c.Z,{})})})]})})}},6581:function(e,t,a){"use strict";var i=a(5893);a(7294);var n=a(1664),r=a.n(n),s=a(2809),o=a(5426),l=a(5188);t.Z=function(){return(0,i.jsxs)("div",{className:"socials",children:[(0,i.jsx)("h1",{className:"socials__title",children:"Our social networks"}),(0,i.jsx)("ul",{className:"socials__list",children:s.U.map((e,t)=>(0,i.jsx)(o.E.li,{...(0,l.Iw)(.5,t/5),className:"socials__item socials__item_discord",children:(0,i.jsx)(r(),{href:e.link,target:"_blank",style:{textDecoration:"none"},children:(0,i.jsxs)("div",{className:"socials__card",style:{padding:"16px"},children:[(0,i.jsx)("div",{children:e.icon()}),(0,i.jsxs)("div",{className:"socials__card-info",children:[(0,i.jsx)("h2",{className:"socials__card-title",children:e.title}),(0,i.jsx)("p",{className:"socials__card-text",children:e.text})]})]})})}))})]})}},2474:function(e,t,a){"use strict";var i=a(5893),n=a(7294),r=a(1163),s=a(1664),o=a.n(s),l=a(7536),c=a(6312),m=a(1604),d=a(4294),u=a(3253),h=a.n(u),f=a(2091),p=a(6144),y=a(7962);t.Z=function(e){var t,a;let{className:s}=e,u=(0,r.useRouter)();document.getElementById("ref"),u.pathname,u.pathname,u.pathname;let[g,v]=(0,n.useState)({});(0,n.useEffect)(()=>()=>{{let e=e=>{let t=new URL(window.location.toString()).searchParams;return t.get(e)||""},t=e("utm_source"),a=e("utm_medium"),i=e("utm_campaign"),n=e("utm_content"),r=e("utm_term"),s=e("utm_sky");v({utm_source:t,utm_medium:a,utm_campaign:i,utm_content:n,utm_term:r,utm_sky:s})}},[]);let x=m.z.object({email:m.z.string().min(1,{message:"Please write your email"}).email({message:"You entered your email incorrectly"}),privacy:m.z.literal(!0,{errorMap:()=>({message:"You must accept Privacy Policy and Terms of use"})})}),{register:_,handleSubmit:j,reset:w,formState:b,formState:{errors:N,isSubmitSuccessful:k}}=(0,l.cI)({resolver:(0,c.F)(x)}),A=e=>{d.Z.post("api/v1/cyberyal/set",{utm:g,email:e.email}).then(e=>{O(!1),C(!0)}).catch(e=>{console.log(e.message)})};(0,n.useEffect)(()=>{b.isSubmitSuccessful&&w({email:""})},[b,w]);let[E,O]=n.useState(!1),[Z,C]=n.useState(!1),I={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h(),{isOpen:E,onRequestClose:()=>O(!1),style:I,overlayClassName:"Overlay",className:"Modal",contentLabel:"Example Modal",children:(0,i.jsxs)("div",{className:"modal",children:[(0,i.jsx)(p.Z,{onClick:()=>O(!1),className:"modal__close"}),(0,i.jsxs)("div",{className:"modal__content",children:[(0,i.jsx)("h3",{className:"modal__title",children:"Cyberyal ID"}),(0,i.jsx)("p",{className:"modal__text",children:"Challenge players of your own skill level in your preferred games. Participate in tournaments and secure your portion of rewards. Join now!"}),(0,i.jsxs)("form",{className:"cidmodal__form",onSubmit:j(A),children:[(0,i.jsx)(f.Z,{id:"email",register:_,type:"text",errors:N.email,placeholder:"Enter your Email",lable:"Your Email"}),(0,i.jsxs)("label",{className:"cidmodal__checkbox-lable",style:{marginTop:"8px"},children:[(0,i.jsx)("input",{..._("privacy"),type:"checkbox",className:"cidmodal__checkbox ".concat(N.email?"hero__section_2__subscribe__checkbox_error":"")}),(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"5px",flexWrap:"wrap"},children:["I agree with the",(0,i.jsx)(o(),{href:"/privacy",className:"modal__link",children:"Privacy Policy"}),"and",(0,i.jsx)(o(),{href:"/termsofuse",className:"modal__link",children:"Terms of use"})]})]}),(0,i.jsx)("div",{className:"modal__error",children:N.email||N.privacy?(0,i.jsxs)("div",{className:"modal__error-text",children:[(0,i.jsx)("div",{children:null===(t=N.email)||void 0===t?void 0:t.message})," ",(0,i.jsx)("div",{children:null===(a=N.privacy)||void 0===a?void 0:a.message})]}):""}),(0,i.jsx)("div",{style:{width:"100%",marginTop:"auto"},children:(0,i.jsxs)("button",{className:"header__btn modal__btn cidmodal__btn",type:"submit",children:["Create Cyberyal ID",(0,i.jsx)(y.Z,{className:"modal__arrow-right"})]})})]})]})]})}),(0,i.jsx)(h(),{isOpen:Z,onRequestClose:()=>C(!1),style:I,overlayClassName:"Overlay",className:"Modal",contentLabel:"Example Modal",children:(0,i.jsxs)("div",{className:"modal",children:[(0,i.jsx)(p.Z,{onClick:()=>C(!1),className:"modal__close"}),(0,i.jsxs)("div",{className:"modal__content",style:{textAlign:"center"},children:[(0,i.jsx)("h3",{className:"modal__title",children:"Congratulations"}),(0,i.jsx)("p",{className:"modal__text",children:"You have successfully subscribed to our email newsletter. News, promotions and notifications will be sent to the email address you specified."}),(0,i.jsx)("p",{className:"modal__text",children:"Thank you for your attention to our product"}),(0,i.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center",marginBottom:"10px"},children:(0,i.jsx)("button",{className:"modal__button",onClick:()=>C(!1),children:"Confirm"})})]})]})}),(0,i.jsx)("button",{className:"header__btn "+s,style:{display:"flex",alignItems:"center"},onClick:()=>O(!0),children:"Create Cyberyal ID"})]})}},2091:function(e,t,a){"use strict";var i=a(5893);a(7294),t.Z=function(e){let{register:t,className:a,lable:n,id:r,errors:s,...o}=e;return(0,i.jsxs)("div",{className:a?"input "+a:"input",children:[n?(0,i.jsx)("h2",{className:"input-lable",children:n}):null,(0,i.jsx)("input",{...t(r),...o,className:"".concat(s?"input_error":"")})]})}},5188:function(e,t,a){"use strict";a.d(t,{Iw:function(){return i},TG:function(){return r},il:function(){return s},n3:function(){return n}});let i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{ease:"easeInOut",duration:e,delay:t}}},n=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{initial:{opacity:0,y:-20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{ease:"easeInOut",duration:e,delay:t}}},r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{ease:"easeInOut",duration:e,delay:t}}},s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{initial:{opacity:0,x:-40},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{ease:"easeInOut",duration:e,delay:t}}}},27:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return U}});var i,n,r,s,o,l,c=a(5893),m=a(7294),d=a(9008),u=a.n(d),h=a(180),f=a(2126),p=a(5426),y=a(2474);let g=e=>({initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{ease:"easeInOut",duration:.5,delay:.2+e/10}});var v=function(){let[e,t]=m.useState(!1);return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(p.E.div,{initial:{opacity:0},whileInView:{opacity:1},transition:{duration:.5},viewport:{once:!0},className:"affiliate-hero",children:(0,c.jsx)("div",{className:"affiliate-container",children:(0,c.jsxs)("div",{className:"affiliate-hero__inside",children:[(0,c.jsx)(p.E.h1,{...g(1),className:"affiliate-hero__title",children:"Cyberyal Affiliate program"}),(0,c.jsxs)(p.E.p,{...g(2),className:"affiliate-hero__subtitle",children:["Earn commissions promoting product"," "]}),(0,c.jsx)(p.E.div,{...g(3),className:"affiliate-hero__btn",children:(0,c.jsx)(y.Z,{})})]})})})})},x=a(6581);let _={initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{ease:"easeInOut",duration:.5,delay:.5}};var j=function(){return(0,c.jsx)(p.E.div,{..._,className:"affiliate-join",children:(0,c.jsxs)("div",{className:"problems_container",children:[(0,c.jsx)("div",{className:"problems_container_image"}),(0,c.jsxs)("div",{className:"affiliate-join__content",children:[(0,c.jsx)("p",{className:"affiliate-join__text",children:"Join Cyberyal affiliate program, promote our gaming platform with provided resources, and earn commissions from successful referrals. Boost your income while sharing your gaming passion!"}),(0,c.jsx)("div",{className:"affiliate-join__btn",children:(0,c.jsx)(y.Z,{})})]})]})})};let w=[{title:"What are the requirements to participate in the gaming platform's affiliate program?",text:"The main requirements to participate in the gaming platform's affiliate program may include an age restriction (usually 18+), registration on our website, and agreement to the terms of the affiliate program."},{title:"How can I receive my earned commissions?",text:"Earned commissions are paid out through your chosen method of payment, such as bank transfer or payment systems. You can set up your payout preferences in your partner account."},{title:"What advertising materials are provided to affiliates of the gaming platform?",text:"We provide various advertising materials, including banners, text links, graphical elements. You can use these materials on your website, blog, or social media platforms to drive traffic and recommend the gaming platform's products."},{title:"How is my activity tracked within the affiliate program?",text:"Your activity is tracked using unique affiliate links that you use for recommendations. When someone clicks on your link and makes a purchase, the system tracks that activity and associates it with your affiliate account."},{title:"Can I become an affiliate if I don't have my own website or a YouTube channel?",text:"Yes, you can become an affiliate of the gaming platform even if you don't have your own website or YouTube channel. You can use social media platforms, blogs, forums, or any other online platforms to distribute your affiliate links and recommendations."}];function b(){return(b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var N=function(e){return m.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",width:25,height:24,fill:"none"},e),i||(i=m.createElement("path",{stroke:"#222",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:.5,strokeWidth:2,d:"M12.5 8v8m-4-4h8m6 0c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10Z"})))};function k(){return(k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var A=function(e){return m.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",width:25,height:26,fill:"none"},e),n||(n=m.createElement("path",{stroke:"#222",strokeLinecap:"round",strokeLinejoin:"round",strokeOpacity:.5,strokeWidth:2,d:"M8.5 14h8m6 0c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10Z"})))},E=function(e){let{title:t,text:a,active:i,changeActiveRow:n,index:r}=e,s=()=>{i?n(null):n(r)};return(0,c.jsxs)("div",{className:"faq__item",children:[(0,c.jsxs)("header",{className:"faq__item-header",children:[(0,c.jsx)("h2",{className:"faq__item-title",onClick:()=>s(),children:t}),(0,c.jsx)("button",{onClick:()=>s(),className:"faq__item-btn",children:i?(0,c.jsx)(A,{}):(0,c.jsx)(N,{})})]}),i?(0,c.jsx)("div",{className:"faq__item-body",children:(0,c.jsx)(p.E.p,{initial:{opacity:0,y:-30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{ease:"easeInOut",duration:.4,delay:.1},className:"faq__item-text",children:a})}):null]})};let O={initial:{opacity:0,y:50},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{ease:"easeInOut",duration:.5,delay:.5}};var Z=function(){let[e,t]=(0,m.useState)(w.map(e=>{let t={...e,active:!1};return t}));function a(a){t(e.map(e=>(e.active=!1,e))),t(e.map((e,t)=>(t==a&&(e.active=!0),e)))}return(0,c.jsx)("div",{className:"faq",children:(0,c.jsx)("div",{className:"affiliate-container",children:(0,c.jsxs)(p.E.div,{...O,className:"faq__inside",children:[(0,c.jsx)("h1",{className:"faq__title",children:"Frequently asked questions"}),e.map((e,t)=>(0,c.jsx)(m.Fragment,{children:(0,c.jsx)(E,{...e,index:t,changeActiveRow:a})},t))]})})})},C=function(e){let{social:t="",icon:a,title:i,text:n}=e;return(0,c.jsxs)("div",{className:"required__cards__card ".concat(t),children:[(0,c.jsx)("div",{className:"required__icon",children:a()}),(0,c.jsx)("h4",{className:"required__title",children:i}),(0,c.jsx)("p",{className:"required__desc",children:n})]})};function I(){return(I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}function q(){return(q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}function P(){return(P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}function M(){return(M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}let H=[{icon:function(e){return m.createElement("svg",I({xmlns:"http://www.w3.org/2000/svg",width:40,height:38,fill:"none"},e),r||(r=m.createElement("path",{fill:"#fff",d:"M36.5 9h-6V3a3 3 0 0 0-3-3h-24a3 3 0 0 0-3 3v24a1.5 1.5 0 0 0 2.438 1.166L9.5 22.875V28.5a3 3 0 0 0 3 3h17.548l7.015 5.666A1.5 1.5 0 0 0 38 37.5a1.5 1.5 0 0 0 1.5-1.5V12a3 3 0 0 0-3-3ZM8.478 19.834 3.5 23.859V3h24v16.5H9.421a1.5 1.5 0 0 0-.943.334ZM36.5 32.859l-4.978-4.025a1.5 1.5 0 0 0-.938-.334H12.5v-6h15a3 3 0 0 0 3-3V12h6v20.86Z"})))},title:"Social Media",text:"Promote on social media, engage followers, and earn commissions as an affiliate by sharing your unique referral link with captivating content."},{icon:function(e){return m.createElement("svg",q({xmlns:"http://www.w3.org/2000/svg",width:42,height:36,fill:"none"},e),s||(s=m.createElement("path",{fill:"#fff",d:"M39 0H27a7.5 7.5 0 0 0-6 3 7.5 7.5 0 0 0-6-3H3a3 3 0 0 0-3 3v24a3 3 0 0 0 3 3h12a4.5 4.5 0 0 1 4.5 4.5 1.5 1.5 0 1 0 3 0A4.5 4.5 0 0 1 27 30h12a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3ZM15 27H3V3h12a4.5 4.5 0 0 1 4.5 4.5v21A7.464 7.464 0 0 0 15 27Zm24 0H27a7.464 7.464 0 0 0-4.5 1.5v-21A4.5 4.5 0 0 1 27 3h12v24ZM27 7.5h7.5a1.5 1.5 0 0 1 0 3H27a1.5 1.5 0 1 1 0-3Zm9 7.5a1.5 1.5 0 0 1-1.5 1.5H27a1.5 1.5 0 1 1 0-3h7.5A1.5 1.5 0 0 1 36 15Zm0 6a1.5 1.5 0 0 1-1.5 1.5H27a1.5 1.5 0 1 1 0-3h7.5A1.5 1.5 0 0 1 36 21Z"})))},title:"Blog",text:"Share affiliate links in blog posts, provide valuable insights, and earn commissions from conversions generated by your engaging content."},{icon:function(e){return m.createElement("svg",P({xmlns:"http://www.w3.org/2000/svg",width:40,height:34,fill:"none"},e),o||(o=m.createElement("path",{fill:"#fff",d:"M36.5.5h-33a3 3 0 0 0-3 3v27a3 3 0 0 0 3 3h33a3 3 0 0 0 3-3v-27a3 3 0 0 0-3-3Zm0 3V11h-33V3.5h33ZM3.5 14H14v16.5H3.5V14Zm33 16.5H17V14h19.5v16.5Z"})))},title:"Website",text:"Feature affiliate links on your website, drive traffic through targeted promotions, and earn commissions from successful conversions."},{icon:function(e){return m.createElement("svg",M({xmlns:"http://www.w3.org/2000/svg",width:36,height:34,fill:"none"},e),l||(l=m.createElement("path",{fill:"#fff",d:"M36 17a1.5 1.5 0 0 1-1.5 1.5H18a1.5 1.5 0 0 1 0-3h16.5A1.5 1.5 0 0 1 36 17ZM18 6.5h16.5a1.5 1.5 0 0 0 0-3H18a1.5 1.5 0 1 0 0 3Zm16.5 21H18a1.5 1.5 0 1 0 0 3h16.5a1.5 1.5 0 0 0 0-3ZM9.439.939l-4.94 4.94-1.938-1.94A1.5 1.5 0 0 0 .44 6.06l3 3a1.5 1.5 0 0 0 2.122 0l6-6A1.5 1.5 0 1 0 9.44.94Zm0 12-4.94 4.94-1.938-1.94A1.5 1.5 0 1 0 .44 18.06l3 3a1.5 1.5 0 0 0 2.122 0l6-6A1.5 1.5 0 1 0 9.44 12.94Zm0 12-4.94 4.94-1.938-1.94A1.5 1.5 0 1 0 .44 30.06l3 3a1.5 1.5 0 0 0 2.122 0l6-6A1.5 1.5 0 1 0 9.44 24.94Z"})))},title:"Other",text:"Leverage your affiliate links with your audience, and earn commissions through their engagement and conversions."}],V=e=>({initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{ease:"easeInOut",duration:.5,delay:e}});var S=function(){return(0,c.jsx)("div",{className:"partnerconditions",children:(0,c.jsx)("div",{className:"affiliate-container",children:(0,c.jsxs)("div",{className:"required",children:[(0,c.jsxs)("div",{className:"required__text partnerconditions__info",children:[(0,c.jsx)(p.E.h2,{...V(.4),className:"required__main_header partnerconditions__title",children:"What is required for beginners to start in an affiliate program?"}),(0,c.jsx)(p.E.p,{...V(.6),className:"required__main_text partnerconditions__text",children:"To become a successful partner, you'll need to have a strong online presence, such as a blog, social media account, or website, where you can effectively promote services. Engage with your audience by creating high-quality, relevant content that showcases the value and benefits of the offerings. Be consistent and authentic in your approach, and utilize marketing tools like banners, promotional materials, and your unique referral link. As you drive traffic and conversions, you'll not only help grow the brand but also earn commissions for your work."}),(0,c.jsx)(p.E.div,{...V(.7),className:"partnerconditions__btn",children:(0,c.jsx)(y.Z,{})})]}),(0,c.jsx)("div",{className:"required__cards",children:H.map((e,t)=>(0,m.createElement)(p.E.div,{...V(t/5),className:"required__card",key:t},(0,c.jsx)(C,{...e})))})]})})})};let W=[{id:1,title:"Create Cyberyal ID",text:"You must register with us using your details. This will allow us to track your participation in the program, as well as provide you with the necessary information about tasks and rewards."},{id:2,title:"Get Ready",text:"We will provide everything you need to spread the word—your unique referral link for download, banners, and guidelines."},{id:3,title:"Promote",text:"Maximize exposure and drive traffic by sharing your unique referral link across various platforms, engaging with potential customers, and leveraging eye-catching promotional materials provided by the program."},{id:4,title:"Earn",text:"Earn rewards for each referred user who installs and registers through your unique link, transforming your promotional efforts into a lucrative income stream while expanding the program's user base."}],T=e=>({initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{ease:"easeInOut",duration:.5,delay:e/10}});var Y=function(){return(0,c.jsx)("div",{className:"affiliate-container",children:(0,c.jsxs)("div",{className:"haw",children:[(0,c.jsx)("h1",{className:"haw__title",children:"How our affiliate campaign works"}),(0,c.jsx)("ul",{className:"haw__list",children:W.map(e=>(0,c.jsx)(m.Fragment,{children:(0,c.jsxs)(p.E.li,{...T(e.id),className:"haw__item",children:[(0,c.jsx)("div",{className:"haw__circle",children:(0,c.jsx)("h1",{className:"haw__circle-title",children:e.id})}),(0,c.jsx)("h1",{className:"haw__item-title",children:e.title}),(0,c.jsx)("p",{className:"haw__item-text",children:e.text})]})},e.id))})]})})},F={src:"/_next/static/media/homepage.95a74d86.png",height:4096,width:3840,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEUNDhLIEmYoP5iUEFgTHzMuKFMkMkQQEBYZGSEGDAlHF20cGT9OSURLCic4Qr89CyZROdA/FFpxFJFyTHeMWoOZwSMPAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAPUlEQVR4nB2IWxKAIAwDw6O0oSgK3v+sTsnHzm5gIj6+l7AmPnYnas69lEn4/ayULsJorQKA6VlI5HmCqj9KFAGsVypdZAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},R=a(5188),L=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(p.E.div,{...(0,R.TG)(.6,.2),className:"aboutaffiliate",children:[(0,c.jsxs)("div",{className:"aboutaffiliate__textblock",children:[(0,c.jsx)("h1",{className:"aboutaffiliate__title",children:"Cyberyal Affliate Program"}),(0,c.jsx)("p",{className:"aboutaffiliate__text",children:"Embrace the opportunity to earn with Cyberyal Gaming Platform's affiliate program, designed to empower you with valuable resources and tools to effectively promote the platform. As you drive traffic to Cyberyal, you'll reap the benefits of impressive conversion rates and substantial payouts. With our comprehensive support, including eye-catching banners, compelling promotional materials, and your unique referral link, you'll be well-equipped to engage your audience and monetize your influence. So, join the Cyberyal success story and turn your passion for gaming into a lucrative venture, all while expanding the platform's thriving community."}),(0,c.jsx)("div",{className:"aboutaffiliate__button",children:(0,c.jsx)(y.Z,{})})]}),(0,c.jsx)("div",{className:"aboutaffiliate__imgblock",children:(0,c.jsx)("div",{className:"aboutaffiliate__imgblock_inner",style:{background:"url('".concat(F.src,"')"),backgroundRepeat:"no-repeat",backgroundSize:"cover"}})})]}),(0,c.jsx)("div",{className:"aboutaffiliate__mobile-imgblcok",style:{background:"url('".concat(F.src,"')"),backgroundRepeat:"no-repeat",backgroundSize:"cover"}})]})};function U(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(u(),{children:[(0,c.jsx)("title",{children:"Cyberyal | Take your gaming to the next level"}),(0,c.jsx)("meta",{name:"description",content:"Boost your gaming skills on our esports platform! Participate in tournaments, complete engaging tasks, and become a part of our active gaming community. Join now!"}),(0,c.jsx)("meta",{property:"og:url",content:"cyberyal.com/affiliate"}),(0,c.jsx)("meta",{property:"og:site_name",content:"Cyberyal"}),(0,c.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,c.jsx)("meta",{property:"og:type",content:"website"}),(0,c.jsx)("meta",{property:"og:title",content:"Cyberyal Gaming Platform | Affiliate Program"}),(0,c.jsx)("meta",{property:"og:description",content:"Want to monetize your passion for gaming? Join Cyberyal affiliate program and earn commissions for each new user you refer. We'll provide any promotional materials to help you succeed in promoting the platform. Join Cyberyal affiliate program and start earning today!"}),(0,c.jsx)("meta",{property:"og:image",content:"https://drive.google.com/uc?export=view&id=1xe97s0ePX0YWbxzsmGwNry2iST57HghY"}),(0,c.jsx)("meta",{property:"og:image:secure_url",content:"https://drive.google.com/uc?export=view&id=1xe97s0ePX0YWbxzsmGwNry2iST57HghY"}),(0,c.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,c.jsx)("meta",{name:"twitter:site",content:"https://www.twitter.com/PlaystarEU"}),(0,c.jsx)("meta",{name:"twitter:creator",content:"https://www.twitter.com/PlaystarEU"}),(0,c.jsx)("meta",{name:"twitter:title",content:"Cyberyal Gaming Platform | Affiliate Program"}),(0,c.jsx)("meta",{name:"twitter:description",content:"Want to monetize your passion for gaming? Join Cyberyal affiliate program and earn commissions for each new user you refer. We'll provide any promotional materials to help you succeed in promoting the platform. Join Cyberyal affiliate program and start earning today!"}),(0,c.jsx)("meta",{name:"twitter:image",content:"https://drive.google.com/uc?export=view&id=1xe97s0ePX0YWbxzsmGwNry2iST57HghY"}),(0,c.jsx)("link",{rel:"canonical",href:"https://cyberyal.com/affiliate"},"canonical"),(0,c.jsx)("link",{rel:"icon",href:"/logo.svg"})]}),(0,c.jsxs)("main",{className:"wrapper",children:[(0,c.jsx)("div",{className:"affiliate__header-wrapper content",children:(0,c.jsx)(f.default,{})}),(0,c.jsx)(v,{}),(0,c.jsxs)("div",{className:"affiliate__container-for-shy",children:[(0,c.jsx)("div",{className:"affiliate__bg-shy"}),(0,c.jsx)(Y,{}),(0,c.jsx)(S,{})]}),(0,c.jsx)("div",{className:"affiliate-container",children:(0,c.jsx)(L,{})}),(0,c.jsx)(Z,{}),(0,c.jsxs)("div",{className:"affiliate-container",children:[(0,c.jsx)(j,{}),(0,c.jsx)(x.Z,{}),(0,c.jsx)(h.Z,{})]})]})]})}}},function(e){e.O(0,[42,664,426,180,774,888,179],function(){return e(e.s=7338)}),_N_E=e.O()}]);