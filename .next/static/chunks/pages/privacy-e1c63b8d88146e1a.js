(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[915,230,852],{3027:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/privacy",function(){return s(9482)}])},4892:function(e,t){"use strict";t.Z={src:"/_next/static/media/ArrowRight.ce9cc8b2.svg",height:24,width:25,blurWidth:0,blurHeight:0}},3813:function(e,t){"use strict";t.Z={src:"/_next/static/media/close_modal.a42d610c.svg",height:20,width:20,blurWidth:0,blurHeight:0}},4123:function(e,t){"use strict";t.Z={src:"/_next/static/media/logo.459cc5dd.svg",height:64,width:64,blurWidth:0,blurHeight:0}},4294:function(e,t,s){"use strict";var a=s(6154);let i=a.Z.create({baseURL:"https://cyberyal.com/",headers:{"X-Requested-With":"XMLHttpRequest"},withCredentials:!0});t.Z=i},8726:function(e,t,s){"use strict";var a=s(5893),i=s(7294),r=s(1163),o=s(5675),n=s.n(o),l=s(1664),c=s.n(l),d=s(7536),u=s(6312),h=s(1604),m=s(4294),_=s(3253),p=s.n(_),y=s(3813),v=s(4892);t.Z=function(){var e,t;let s=(0,r.useRouter)();document.getElementById("ref"),s.pathname,s.pathname,s.pathname;let[o,l]=(0,i.useState)({});(0,i.useEffect)(()=>()=>{{let e=e=>{let t=new URL(window.location.toString()).searchParams;return t.get(e)||""},t=e("utm_source"),s=e("utm_medium"),a=e("utm_campaign"),i=e("utm_content"),r=e("utm_term"),o=e("utm_sky");l({utm_source:t,utm_medium:s,utm_campaign:a,utm_content:i,utm_term:r,utm_sky:o})}},[]);let _=h.z.object({email:h.z.string().min(1,{message:"Please write your email"}).email({message:"You entered your email incorrectly"}),privacy:h.z.literal(!0,{errorMap:()=>({message:"You must accept Privacy Policy"})})}),{register:x,handleSubmit:f,formState:{errors:b}}=(0,d.cI)({resolver:(0,u.F)(_)}),g=e=>{m.Z.post("v1/cyberyal/set",{utm:o,email:e.email}).then(e=>{N(!1),k(!0)}).catch(e=>{console.log(e.message)})},[j,N]=i.useState(!1),[w,k]=i.useState(!1),C={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p(),{isOpen:j,onRequestClose:()=>N(!1),style:C,overlayClassName:"Overlay",className:"Modal",contentLabel:"Example Modal",children:(0,a.jsxs)("div",{className:"modal",children:[(0,a.jsx)(n(),{onClick:()=>N(!1),className:"modal__close",src:y.Z,alt:"so-icons"}),(0,a.jsxs)("div",{className:"modal__content",children:[(0,a.jsx)("h3",{className:"modal__title",children:"Cyberyal ID"}),(0,a.jsx)("p",{className:"modal__text",children:"Challenge players of your own skill level in your preferred games. Participate in tournaments and secure your portion of rewards. Join now!"}),(0,a.jsxs)("form",{onSubmit:f(g),children:[(0,a.jsx)("p",{className:"hero__section_2__subscribe__email",children:"Your Email"}),(0,a.jsx)("input",{...x("email"),type:"text",className:"hero__section_2__subscribe__input ".concat(b.email?"hero__section_2__subscribe__input_error":""),placeholder:"Enter your Email"}),(0,a.jsxs)("label",{className:"hero__section_2__subscribe__privacy",style:{marginTop:"8px"},children:[(0,a.jsx)("input",{...x("privacy"),type:"checkbox",className:"hero__section_2__subscribe__checkbox ".concat(b.email?"hero__section_2__subscribe__checkbox_error":"")}),"I agree with the"," ",(0,a.jsx)(c(),{href:"/privacy",className:"privacy_link",children:"Privacy Policy"})]}),(0,a.jsx)("div",{style:{height:"60px",padding:"0px 0px"},children:b.email||b.privacy?(0,a.jsxs)("div",{className:"hero__section_2__subscribe__input_text_error",children:[(0,a.jsx)("div",{children:null===(e=b.email)||void 0===e?void 0:e.message})," ",(0,a.jsx)("div",{children:null===(t=b.privacy)||void 0===t?void 0:t.message})]}):""}),(0,a.jsx)("div",{style:{width:"100%",marginTop:"auto"},children:(0,a.jsxs)("button",{className:"hero__section_2__subscribe__button",type:"submit",children:["Create Cyberyal ID ",(0,a.jsx)(n(),{src:v.Z,alt:"ArrowRight"})]})})]})]})]})}),(0,a.jsx)(p(),{isOpen:w,onRequestClose:()=>k(!1),style:C,overlayClassName:"Overlay",className:"Modal",contentLabel:"Example Modal",children:(0,a.jsxs)("div",{className:"modal",children:[(0,a.jsx)(n(),{onClick:()=>k(!1),className:"modal__close",src:y.Z,alt:"so-icons"}),(0,a.jsxs)("div",{className:"modal__content",children:[(0,a.jsx)("h3",{className:"modal__title",children:"Congratulations"}),(0,a.jsx)("p",{className:"modal__text",children:"You have successfully subscribed to our email newsletter, news, promotions and notifications will be sent to the email address you specified."}),(0,a.jsx)("p",{className:"modal__text",children:"Thank you for your attention to our product"}),(0,a.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center",marginBottom:"10px"},children:(0,a.jsx)("button",{className:"modal__button",onClick:()=>k(!1),children:"Confirm"})})]})]})}),(0,a.jsxs)("button",{className:"header__btn",style:{display:"flex",alignItems:"center"},onClick:()=>N(!0),children:["Cyberyal ID ",(0,a.jsx)(n(),{className:"header__btn-icon",src:v.Z,alt:"ArrowRight"})]})]})}},2066:function(e,t,s){"use strict";var a=s(5893);s(7294);var i=s(5675),r=s.n(i),o=s(1664),n=s.n(o),l=s(4123);t.Z=function(){return(0,a.jsxs)("footer",{className:"footer",style:{marginTop:"100px"},children:[(0,a.jsx)("div",{className:"footer__logo",children:(0,a.jsx)(r(),{className:"footer__logo-img",src:l.Z,alt:"logo"})}),(0,a.jsx)(n(),{className:"footer__link",href:"/about",children:"About"}),(0,a.jsx)(n(),{className:"footer__link",href:"/privacy",children:"Privacy Policy"})]})}},9852:function(e,t,s){"use strict";s.r(t);var a=s(5893);s(7294);var i=s(5675),r=s.n(i),o=s(4123),n=s(1163),l=s(1664),c=s.n(l),d=s(8726);t.default=function(){let e=(0,n.useRouter)();var t=document.getElementById("ref");let s="/privacy"===e.pathname,i="/home"===e.pathname;e.pathname;let l=e.pathname,u=()=>null==t?void 0:t.scrollIntoView();return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("header",{className:"header",children:[(0,a.jsxs)("div",{className:"header__left",children:[(0,a.jsx)(c(),{href:"/",children:(0,a.jsx)("div",{className:"header__logo",children:(0,a.jsx)(r(),{className:"header__logo-img",src:o.Z,alt:"logo"})})}),(0,a.jsxs)("nav",{className:"header__navbar",children:[(0,a.jsx)(c(),{className:"header__link ".concat("/"===l?"active_link":""),href:"/",children:"Home"}),(0,a.jsx)(c(),{className:"header__link ".concat("/about"===l?"active_link":""),href:"/about",children:"About"}),(0,a.jsx)(c(),{className:"header__link ".concat("/affiliate"===l?"active_link":""),href:"/affiliate",children:"Affiliate"})]})]}),s?"":i?(0,a.jsx)("button",{className:"header__btn",onClick:u,children:"Subscribe"}):(0,a.jsx)(d.Z,{})]})})}},9482:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return l}});var a=s(5893);s(7294);var i=s(9008),r=s.n(i),o=s(2066),n=s(9852);function l(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:"Cyberyal"}),(0,a.jsx)("meta",{name:"description",content:"Privacy Policy"}),(0,a.jsx)("link",{rel:"icon",href:"/logo.svg"})]}),(0,a.jsxs)("main",{className:"wrapper",children:[(0,a.jsx)(n.default,{}),(0,a.jsx)("div",{className:"content"}),(0,a.jsxs)("div",{className:"privacy__wrapper",children:[(0,a.jsx)("h1",{className:"privacy__title",children:"Privacy policy"}),(0,a.jsx)("p",{className:"privacy__default-text",children:"Last updated: 3 May, 2023"}),(0,a.jsxs)("p",{className:"privacy__default-text",children:["We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"We provide this privacy statement explaining our online information practices, so that you can decide whether and how to interact with the Website and the Service. If we decide to change our privacy policy, we will post those changes on this page"]}),(0,a.jsxs)("div",{className:"privacy__text-block",children:[(0,a.jsx)("h2",{className:"privacy__min-title",children:"Definitions"}),(0,a.jsx)("p",{className:"privacy__default-text",children:"For the purposes of this Cookies Policy:"}),(0,a.jsxs)("ul",{className:"privacy__list",children:[(0,a.jsx)("li",{className:"privacy__item",children:(0,a.jsx)("p",{className:"privacy__default-text",children:'Service (referred to as either "Website", "We", "Us" or "Our" in this Cookies Policy) represents the “Cyberyal” website accessible from https://cyberyal.com'})}),(0,a.jsx)("li",{className:"privacy__item",children:(0,a.jsx)("p",{className:"privacy__default-text",children:"You You means the individual accessing or using the Service, or the Website, or any legal entity on behalf of which such individual is accessing or using the Service, as applicable."})})]})]}),(0,a.jsxs)("div",{className:"privacy__text-block",children:[(0,a.jsx)("h2",{className:"privacy__min-title",children:"Collection of Personal Data"}),(0,a.jsxs)("p",{className:"privacy__default-text",children:["When you visit the website, we may collect personal data about your website use such as the IP address, browser settings and pages visited to facilitate your use of the website and improve our offer. This data protection declaration tells you how data are collected and the particular purposes for which they are used.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"Where permitted in our legitimate interest or with your prior consent where required by law, we will use your personal information for marketing and to provide you with promotional update communications by email about our products/services.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"By submitting your information we obtain your consent for sending you advertising material or the Newsletter. Should you no longer wish to receive notifications from the Service, you may unsubscribe from our mailing list using the option provided at the bottom of our Newsletters."]})]}),(0,a.jsxs)("div",{className:"privacy__text-block",children:[(0,a.jsx)("h2",{className:"privacy__min-title",children:"Disclosure of Personal Data"}),(0,a.jsxs)("p",{className:"privacy__default-text",children:["We may disclose data to third parties if statutory provisions so require. In addition, we may pass personal data on to third party suppliers and service providers.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"We may allow the following companies to serve advertisements on our behalf across the Internet and in applications: Google AdWords, Google analytics, Marketo, Twitter, Facebook, Adroll, Quora, Bing ads, Linkedin, Terminus, Demand base, Instagram, and Reddit using email address and cookies that are collected.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"These entities may use technologies like cookies to collect information about your use of the Service and other Websites and applications, including your IP address. This information may be used by services providers to, among other things, analyze and track data, determine the popularity of certain content, deliver advertising and content targeted to your interests. For more information about cookies, please see Cookie Policy."]})]}),(0,a.jsxs)("div",{className:"privacy__text-block",children:[(0,a.jsx)("h2",{className:"privacy__min-title",children:"Personal Data Storage"}),(0,a.jsxs)("p",{className:"privacy__default-text",children:["The Service takes organisational measures to ensure data security, in particular to protect your personal data against loss, manipulation or unauthorised access. Unfortunately, transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information submitted to us.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"We process and store your personal data as long as that is necessary to provide our contractual services or for the duration prescribed by law. We may also store personal data for as long as we need such data to enforce claims or defend ourselves against claims. To the extent that your data are no longer needed for the above purposes, they will be deleted."]})]}),(0,a.jsxs)("div",{className:"privacy__text-block",children:[(0,a.jsx)("h2",{className:"privacy__min-title",children:"Links to Other Websites"}),(0,a.jsx)("p",{className:"privacy__default-text",children:"Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit."})]}),(0,a.jsxs)("div",{className:"privacy__text-block",children:[(0,a.jsx)("h2",{className:"privacy__min-title",children:"Withdrawal of Consent"}),(0,a.jsx)("p",{className:"privacy__default-text",children:"You may withdraw consent given to us at any time by notifying us; such withdrawal will take effect for the future."})]})]}),(0,a.jsx)(o.Z,{})]})]})}},1163:function(e,t,s){e.exports=s(6885)}},function(e){e.O(0,[285,774,888,179],function(){return e(e.s=3027)}),_N_E=e.O()}]);