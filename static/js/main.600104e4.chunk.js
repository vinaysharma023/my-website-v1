(this["webpackJsonpmy-website-v1"]=this["webpackJsonpmy-website-v1"]||[]).push([[0],{48:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),c=a.n(s),i=a(18),r=a.n(i),o=(a(47),a(48),a(49),a(50),a(51),a(52),a(53),a(54),a(55),a(4)),l=a.n(o);l.a.easing.jswing=l.a.easing.swing,l.a.extend(l.a.easing,{def:"easeOutQuad",swing:function(e,t,a,n,s){return l.a.easing[l.a.easing.def](e,t,a,n,s)},easeInQuad:function(e,t,a,n,s){return n*(t/=s)*t+a},easeOutQuad:function(e,t,a,n,s){return-n*(t/=s)*(t-2)+a},easeInOutQuad:function(e,t,a,n,s){return(t/=s/2)<1?n/2*t*t+a:-n/2*(--t*(t-2)-1)+a},easeInCubic:function(e,t,a,n,s){return n*(t/=s)*t*t+a},easeOutCubic:function(e,t,a,n,s){return n*((t=t/s-1)*t*t+1)+a},easeInOutCubic:function(e,t,a,n,s){return(t/=s/2)<1?n/2*t*t*t+a:n/2*((t-=2)*t*t+2)+a},easeInQuart:function(e,t,a,n,s){return n*(t/=s)*t*t*t+a},easeOutQuart:function(e,t,a,n,s){return-n*((t=t/s-1)*t*t*t-1)+a},easeInOutQuart:function(e,t,a,n,s){return(t/=s/2)<1?n/2*t*t*t*t+a:-n/2*((t-=2)*t*t*t-2)+a},easeInQuint:function(e,t,a,n,s){return n*(t/=s)*t*t*t*t+a},easeOutQuint:function(e,t,a,n,s){return n*((t=t/s-1)*t*t*t*t+1)+a},easeInOutQuint:function(e,t,a,n,s){return(t/=s/2)<1?n/2*t*t*t*t*t+a:n/2*((t-=2)*t*t*t*t+2)+a},easeInSine:function(e,t,a,n,s){return-n*Math.cos(t/s*(Math.PI/2))+n+a},easeOutSine:function(e,t,a,n,s){return n*Math.sin(t/s*(Math.PI/2))+a},easeInOutSine:function(e,t,a,n,s){return-n/2*(Math.cos(Math.PI*t/s)-1)+a},easeInExpo:function(e,t,a,n,s){return 0==t?a:n*Math.pow(2,10*(t/s-1))+a},easeOutExpo:function(e,t,a,n,s){return t==s?a+n:n*(1-Math.pow(2,-10*t/s))+a},easeInOutExpo:function(e,t,a,n,s){return 0==t?a:t==s?a+n:(t/=s/2)<1?n/2*Math.pow(2,10*(t-1))+a:n/2*(2-Math.pow(2,-10*--t))+a},easeInCirc:function(e,t,a,n,s){return-n*(Math.sqrt(1-(t/=s)*t)-1)+a},easeOutCirc:function(e,t,a,n,s){return n*Math.sqrt(1-(t=t/s-1)*t)+a},easeInOutCirc:function(e,t,a,n,s){return(t/=s/2)<1?-n/2*(Math.sqrt(1-t*t)-1)+a:n/2*(Math.sqrt(1-(t-=2)*t)+1)+a},easeInElastic:function(e,t,a,n,s){var c=1.70158,i=0,r=n;if(0==t)return a;if(1==(t/=s))return a+n;if(i||(i=.3*s),r<Math.abs(n)){r=n;c=i/4}else c=i/(2*Math.PI)*Math.asin(n/r);return-r*Math.pow(2,10*(t-=1))*Math.sin((t*s-c)*(2*Math.PI)/i)+a},easeOutElastic:function(e,t,a,n,s){var c=1.70158,i=0,r=n;if(0==t)return a;if(1==(t/=s))return a+n;if(i||(i=.3*s),r<Math.abs(n)){r=n;c=i/4}else c=i/(2*Math.PI)*Math.asin(n/r);return r*Math.pow(2,-10*t)*Math.sin((t*s-c)*(2*Math.PI)/i)+n+a},easeInOutElastic:function(e,t,a,n,s){var c=1.70158,i=0,r=n;if(0==t)return a;if(2==(t/=s/2))return a+n;if(i||(i=s*(.3*1.5)),r<Math.abs(n)){r=n;c=i/4}else c=i/(2*Math.PI)*Math.asin(n/r);return t<1?r*Math.pow(2,10*(t-=1))*Math.sin((t*s-c)*(2*Math.PI)/i)*-.5+a:r*Math.pow(2,-10*(t-=1))*Math.sin((t*s-c)*(2*Math.PI)/i)*.5+n+a},easeInBack:function(e,t,a,n,s,c){return void 0==c&&(c=1.70158),n*(t/=s)*t*((c+1)*t-c)+a},easeOutBack:function(e,t,a,n,s,c){return void 0==c&&(c=1.70158),n*((t=t/s-1)*t*((c+1)*t+c)+1)+a},easeInOutBack:function(e,t,a,n,s,c){return void 0==c&&(c=1.70158),(t/=s/2)<1?n/2*(t*t*((1+(c*=1.525))*t-c))+a:n/2*((t-=2)*t*((1+(c*=1.525))*t+c)+2)+a},easeInBounce:function(e,t,a,n,s){return n-l.a.easing.easeOutBounce(e,s-t,0,n,s)+a},easeOutBounce:function(e,t,a,n,s){return(t/=s)<1/2.75?n*(7.5625*t*t)+a:t<2/2.75?n*(7.5625*(t-=1.5/2.75)*t+.75)+a:t<2.5/2.75?n*(7.5625*(t-=2.25/2.75)*t+.9375)+a:n*(7.5625*(t-=2.625/2.75)*t+.984375)+a},easeInOutBounce:function(e,t,a,n,s){return t<s/2?.5*l.a.easing.easeInBounce(e,2*t,0,n,s)+a:.5*l.a.easing.easeOutBounce(e,2*t-s,0,n,s)+.5*n+a}});a(58),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var d=a(9),u=a(10),h=a(12),j=a(11),m=a.p+"static/media/male1.33b5179e.png",b=a.p+"static/media/male.cadeca2c.png",p=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={logo:m},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=l()("nav").outerHeight();l()(".navbar-toggler").on("click",(function(){l()("#mainNav").hasClass("navbar-reduce")||l()("#mainNav").addClass("navbar-reduce")})),l()("body").scrollspy({target:"#mainNav",offset:t}),l()(".js-scroll").on("click",(function(){l()(".navbar-collapse").collapse("hide")})),window.addEventListener("scroll",(function(){window.pageYOffset>50?(document.querySelector(".navbar-expand-md").classList.add("navbar-reduce"),document.querySelector(".navbar-expand-md").classList.remove("navbar-trans"),e.setState({logo:b})):(document.querySelector(".navbar-expand-md").classList.add("navbar-trans"),document.querySelector(".navbar-expand-md").classList.remove("navbar-reduce"),e.setState({logo:m}))})),l()('a.js-scroll[href*="#"]:not([href="#"])').on("click",(function(){if(window.location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&window.location.hostname===this.hostname){var e=l()(this.hash);if((e=e.length?e:l()("[name="+this.hash.slice(1)+"]")).length)return l()("html, body").animate({scrollTop:e.offset().top-t+5},1e3,"easeInExpo"),!1}})),l()(".js-scroll").on("click",(function(){l()(".navbar-collapse").collapse("hide")}))}},{key:"render",value:function(){return Object(n.jsx)("nav",{className:"navbar navbar-b navbar-trans navbar-expand-md fixed-top",id:"mainNav",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("a",{className:"navbar-brand js-scroll",href:"#page-top",children:Object(n.jsx)("img",{src:this.state.logo,alt:"logo",style:{maxWidth:"100px"}})}),Object(n.jsxs)("button",{className:"navbar-toggler collapsed",type:"button","data-toggle":"collapse","data-target":"#navbarDefault","aria-controls":"navbarDefault","aria-expanded":"false","aria-label":"Toggle navigation",children:[Object(n.jsx)("span",{}),Object(n.jsx)("span",{}),Object(n.jsx)("span",{})]}),Object(n.jsx)("div",{className:"navbar-collapse collapse justify-content-end",id:"navbarDefault",children:Object(n.jsxs)("ul",{className:"navbar-nav",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("a",{className:"nav-link js-scroll active",href:"#home",children:"Home"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("a",{className:"nav-link js-scroll",href:"#about",children:"About"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("a",{className:"nav-link js-scroll",href:"#work",children:"Work"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)("a",{className:"nav-link js-scroll",href:"#contact",children:"Contact"})})]})})]})})}}]),a}(c.a.Component),v=(a(59),a(31)),f=a.n(v);a(60);var O=function(){var e=c.a.useRef(),t=[],a=100,i=0,r=function(e,t){return Math.floor(Math.random()*(t-e)+e)},o=function(e){void 0===e&&(e=!1),this.velX=r(-2,2),this.velY=r(-1,-3),this.currentX=e.pageX||r(0,e.pageX),this.currentY=e.pageY||e.pageY+a,this.radius=r(5,10)};return Object(s.useEffect)((function(){var n=e.current.getContext("2d"),s=0,c=function(){this.velX=r(-2,2),this.velY=r(-1,-3),this.currentX=r(0,n.canvas.width),this.currentY=r(0,n.canvas.width),this.radius=r(5,10)},o=function(e){void 0===e&&(e=!1),this.velX=r(-2,2),this.velY=r(-1,-3),this.currentX=e.pageX||r(0,n.canvas.width),this.currentY=e.pageY||n.canvas.height+a,this.radius=r(5,10)};var l=!0;setInterval((function(){n.canvas.width=window.innerWidth,n.canvas.height=window.innerHeight,s=(n.canvas.width+n.canvas.height)/20;for(var e=0;e<t.length-1;e++){for(var r=e+1;r<t.length-1;r++){var d=Math.hypot(Math.abs(t[e].currentX-t[r].currentX),Math.abs(t[e].currentY-t[r].currentY));d<120&&(m=t[e],b=t[r],n.globalAlpha=.1,n.beginPath(),n.moveTo(m.currentX,m.currentY),n.lineTo(b.currentX,b.currentY),n.strokeStyle="#ffcb9a",n.stroke())}u=t[e].currentX,h=t[e].currentY,j=t[e].radius,n.globalAlpha=.2,n.beginPath(),n.arc(u,h,j,0,2*Math.PI),n.fillStyle="#ffcb9a",n.fill(),n.closePath(),t[e].currentX+=t[e].velX,t[e].currentY+=t[e].velY,(t[e].currentX>n.canvas.width+a||t[e].currentX<-100||t[e].currentY<-100)&&(t.splice(e,1),i--)}var u,h,j,m,b;if(i<s)if(!1===l){var p=new o;t.push(p),i++}else{var v=new c;t.push(v),++i>s-20&&(l=!1)}}),10)})),Object(n.jsx)("canvas",{className:"canvas",ref:e,onClick:function(e){for(var a=5;a>0;a--){var n=new o(e);t.push(n),i++}}})},x=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{id:"home",className:"intro route",children:[Object(n.jsx)("div",{className:"intro-content display-table",children:Object(n.jsx)("div",{className:"table-cell",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)("h1",{className:"intro-title mb-4",children:"Hello, I am Vinay Sharma"}),Object(n.jsxs)("p",{className:"intro-subtitle",children:[Object(n.jsx)("span",{className:"text-slider-items"}),Object(n.jsx)("strong",{className:"text-slider",children:Object(n.jsx)(f.a,{strings:["Front End Developer","Back End Developer","Web Designer"],typeSpeed:80,backDelay:1100,backSpeed:30,loop:!0})})]}),Object(n.jsx)("p",{className:"pt-3",children:Object(n.jsx)("a",{className:"btn btn-primary btn js-scroll px-4",href:"#work",role:"button",children:"View My Work"})})]})})}),Object(n.jsx)(O,{})]})}}]),a}(c.a.Component),g=(a.p,function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).state={skills:[{id:"ReactJS_Skill",content:"React JS",porcentage:"80%",value:"80"},{id:"Redux",content:"Redux",porcentage:"85%",value:"85"},{id:"JavaScript_skill",content:"JavaScript",porcentage:"90%",value:"90"},{id:"NodeJS_skill",content:"Node js",porcentage:"70%",value:"70"},{id:"ExpressJS_skill",content:"Express JS",porcentage:"80%",value:"80"},{id:"Firebase_skill",content:"Firebase",porcentage:"80%",value:"80"},{id:"MongoDB_skill",content:"Mongo DB",porcentage:"70%",value:"70"},{id:"VanillaJS_skill",content:"VanillaJS",porcentage:"85%",value:"85"}],about_me:[{id:"first-p-about",content:"Hi, I am a fourth year engineering student at Delhi Technological University (formerly DCE), India with engineering specialisation in Electronics and Communication Engineering. "},{id:"second-p-about",content:"I have always taken keen interest in coding and Web Development, and have consequently worked on my skills to build good industry level projects. I have always liked the challenge of learning a new technology, so i have worked with a wide array of technologies given the requirements of the projects. I also like solving challenging problems and have experience in Data Structures & Algorithms and SQL. I also have good understanding of computer fundamentals subjects like Operating Systems, Database Management System, Linux, System Design...."},{id:"third-p-about",content:"Over the course of my college education I have worked on several projects which helped me build my skills. Some of which are displayed in the work section. All necessary link of the projects such as github repositories ans live links are in the display as well. "}]},e}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsx)("section",{id:"about",className:"about-mf sect-pt4 route",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-sm-12",children:Object(n.jsx)("div",{className:"box-shadow-full",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-md-6",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-sm-6 col-md-5",style:{margin:"0 auto"},children:Object(n.jsx)("div",{className:"about-img",style:{textAlign:"center"},children:Object(n.jsx)("img",{className:"img-fluid rounded b-shadow-a",alt:""})})})}),Object(n.jsx)("div",{className:"skill-mf",children:this.state.skills.map((function(e){return Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)("span",{children:e.content})," ",Object(n.jsx)("span",{className:"pull-right",children:e.porcentage}),Object(n.jsx)("div",{className:"progress",children:Object(n.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:e.porcentage},"aria-valuenow":e.value,"aria-valuemin":"0","aria-valuemax":"100"})})]},e.id)}))})]}),Object(n.jsx)("div",{className:"col-md-6",children:Object(n.jsxs)("div",{className:"about-me pt-4 pt-md-0",children:[Object(n.jsx)("div",{className:"title-box-2",children:Object(n.jsx)("h5",{className:"title-left",children:"About Me"})}),this.state.about_me.map((function(e){return Object(n.jsx)("p",{className:"lead",children:e.content},e.id)}))]})})]})})})})})})}}]),a}(c.a.Component)),N=(a.p,function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("section",{className:"paralax-mf footer-paralax  sect-mt4 route",children:[Object(n.jsx)("div",{className:"overlay-mf"}),Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-sm-12",children:Object(n.jsx)("div",{className:"contact-mf",children:Object(n.jsx)("div",{id:"contact",className:"box-shadow-full",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-md-6",children:[Object(n.jsx)("div",{className:"title-box-2",children:Object(n.jsx)("h5",{className:"title-left",children:"Send A Message"})}),Object(n.jsx)("div",{children:Object(n.jsxs)("form",{action:"https://formspree.io/f/xqkglleg",method:"POST",className:"contactForm",children:[Object(n.jsx)("div",{id:"sendmessage",children:"Your message has been sent. Thank you!"}),Object(n.jsx)("div",{id:"errormessage"}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-12 mb-3",children:Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("input",{type:"text",name:"name",className:"form-control",id:"name",placeholder:"Your Name","data-rule":"minlen:4","data-msg":"Please enter at least 4 chars"}),Object(n.jsx)("div",{className:"validation"})]})}),Object(n.jsx)("div",{className:"col-md-12 mb-3",children:Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("input",{type:"email",className:"form-control",name:"email",id:"email",placeholder:"Your Email","data-rule":"email","data-msg":"Please enter a valid email"}),Object(n.jsx)("div",{className:"validation"})]})}),Object(n.jsx)("div",{className:"col-md-12 mb-3",children:Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("input",{type:"text",className:"form-control",name:"subject",id:"subject",placeholder:"Subject","data-rule":"minlen:4","data-msg":"Please enter at least 8 chars of subject"}),Object(n.jsx)("div",{className:"validation"})]})}),Object(n.jsx)("div",{className:"col-md-12 mb-3",children:Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("textarea",{className:"form-control",name:"message",rows:"5","data-rule":"required","data-msg":"Please write something for us",placeholder:"Message"}),Object(n.jsx)("div",{className:"validation"})]})}),Object(n.jsx)("div",{className:"col-md-12",children:Object(n.jsx)("button",{type:"submit",className:"button button-a button-big button-rouded",children:"Send Message"})})]})]})})]}),Object(n.jsxs)("div",{className:"col-md-6",children:[Object(n.jsx)("div",{className:"title-box-2 pt-4 pt-md-0",children:Object(n.jsx)("h5",{className:"title-left",children:"Get in Touch"})}),Object(n.jsx)("div",{className:"more-info",children:Object(n.jsxs)("p",{className:"lead",children:["Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.",Object(n.jsx)("br",{}),"Simply fill the from and send me an email."]})}),Object(n.jsx)("div",{className:"socials",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)("span",{className:"ico-circle",children:Object(n.jsx)("i",{className:"ion-social-codepen"})})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://github.com/vinaysharma023",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)("span",{className:"ico-circle",children:Object(n.jsx)("i",{className:"ion-social-github"})})})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"https://www.linkedin.com/in/vinay-sharma-8954941a9/",target:"_blank",rel:"noopener noreferrer",children:Object(n.jsx)("span",{className:"ico-circle",children:Object(n.jsx)("i",{className:"ion-social-linkedin"})})})})]})})]})]})})})})})}),Object(n.jsx)("footer",{children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-sm-12",children:Object(n.jsx)("div",{className:"copyright-box"})})})})})]})}}]),a}(c.a.Component)),k=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){l()(".back-to-top").click((function(){return l()("html, body").animate({scrollTop:0},1500,"easeInOutExpo"),!1})),window.addEventListener("scroll",(function(){window.pageYOffset>100?(document.querySelector(".back-to-top").classList.remove("fadeOut"),document.querySelector(".back-to-top").style.display="block",document.querySelector(".back-to-top").classList.add("fadeIn")):(document.querySelector(".back-to-top").classList.remove("fadeIn"),document.querySelector(".back-to-top").classList.add("fadeOut"))}))}},{key:"render",value:function(){return Object(n.jsx)("a",{href:"#",className:"back-to-top animated",children:Object(n.jsx)("i",{className:"fa fa-chevron-up"})})}}]),a}(c.a.Component),y=function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){l()(window).on("load",(function(){l()("#preloader").length&&l()("#preloader").delay(100).fadeOut("slow",(function(){l()(this).remove()}))}))}},{key:"render",value:function(){return Object(n.jsx)("div",{id:"preloader"})}}]),a}(c.a.Component),w=a.p+"static/media/blogApp.bdd4755e.png",M=a.p+"static/media/chatApp.54fdb657.png",I=[{title:"E-Commerce App",image:a.p+"static/media/ecommerce.4c766ea6.png",liveLink:"https://myclothingline-live.herokuapp.com",repoLink:"https://github.com/vinaysharma023/Crown-Clothing",techUsed:["React JS","Redux","Hooks","Javascript","Firebase"],features:["A e-commerce platform with full functionality for online shopping","Registration and Login using Firebase","Payment method integration using Stripe","A full end to end application with all features of e-commerce application.","Hosted on Heroku"]},{title:"Web Chat App",image:M,liveLink:"https://react-slack-app-7d6d5.web.app",repoLink:"https://github.com/vinaysharma023/ChatApp",techUsed:["React JS","Redux","Javascript","semantic-ui-react","Firebase"],features:["App to chat with people in channels as well as through Direct messages","Registration and Login using firebase","Chatting features like upload media files, message search in chats","Metadata about channels displayed in the side."]},{title:"Portfolio",image:a.p+"static/media/portfolio.4023fdd0.png",liveLink:"https://webdevpat.com",repoLink:"https://github.com/Drasek-25/Portfolio",techUsed:["React","Material UI","Canvas","Apache"],features:["Fully Responsive UI","Canvas integrated into React","Email service workaround via Google Forms","Other projects displayed with necessary links provided.","JQuery used for making app responsive","Hosted on AWS"]},{title:"BlogApp",image:w,repoLink:"https://github.com/vinaysharma023/BlogApp",techUsed:["JS","Bootstrap","JQuery"],features:["Fully functioning Blog application","RESTful routing implemented","CRUD functionality is implemented"]},{title:"YelpCamp",image:a.p+"static/media/yelpcamp.6804ada3.png",repoLink:"https://github.com/vinaysharma023/YelpCamp",techUsed:["JavaScript","Bootstrap","JQuery","MongoDB"],features:["User registration and login","User upload and comment","Animation is interactable with mouse click"]}],S=a(29),C=a(35),L=a(81),Y=a(89),A=a(82),E=a(86),P=a(83),D=a(84),B=a(85),J=a(87),R=a(80),X=Object(R.a)({card:{backgroundColor:"#47504F",marginLeft:"auto",marginRight:"auto"},cardTransparent:{backgroundColor:"transparent",marginLeft:"auto",marginRight:"auto"},media:{height:200}});var q=function(e){var t=e.title,a=e.image,c=e.liveLink,i=e.repoLink,r=e.techUsed,o=e.features,l=X(),d=Object(s.useState)(l.card),u=Object(C.a)(d,2),h=u[0],j=u[1];return Object(n.jsx)(L.a,{item:!0,xs:12,sm:12,md:6,lg:4,children:Object(n.jsxs)(Y.a,{className:h,elevation:10,children:[Object(n.jsx)(A.a,{variant:"h5",color:"primary",component:"div",noWrap:!0,children:Object(n.jsx)(E.a,{m:".5rem",children:t})}),h!==l.card?Object(n.jsx)(E.a,{mt:"200px"}):Object(n.jsx)(P.a,{className:l.media,image:a,title:t}),Object(n.jsxs)(D.a,{children:[Object(n.jsxs)(A.a,{children:[Object(n.jsx)("b",{children:"Tech Used:"}),Object(n.jsx)("br",{}),r.map((function(e,t){return t<r.length-1?e+" , ":" "+e})),Object(n.jsx)("br",{}),Object(n.jsx)("br",{})]}),Object(n.jsx)(E.a,{ref:function(e){e&&console.log(e.getBoundingClientRect().height)},children:Object(n.jsxs)(A.a,{noWrap:!1,children:[Object(n.jsx)("b",{children:"Features:"}),Object(n.jsx)("br",{}),o.map((function(e,t){return Object(n.jsxs)("span",{children:[Object(n.jsx)(n.Fragment,{children:"\u2022 "+e}),Object(n.jsx)("br",{})]},e)}))]})})]}),Object(n.jsxs)(B.a,{children:[c&&Object(n.jsx)(J.a,Object(S.a)(Object(S.a)({},"Constellation Animation"===t?{onClick:function(){h===l.card?j(l.cardTransparent):j(l.card)}}:{href:c}),{},{variant:"contained",color:"secondary",children:Object(n.jsx)(A.a,{color:"primary",children:"Live View"})})),Object(n.jsx)(J.a,{href:i,variant:"contained",color:"secondary",children:Object(n.jsx)(A.a,{color:"primary",children:"Repo"})})]})]})})},F=function(){return Object(n.jsxs)("section",{id:"work",className:"portfolio-mf sect-pt4 route",children:[Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-sm-12",children:Object(n.jsxs)("div",{className:"title-box text-center",children:[Object(n.jsx)("h3",{className:"title-a",children:"Portfolio"}),Object(n.jsx)("p",{className:"subtitle-a",children:"A collection of the works and things that i have built!"}),Object(n.jsx)("div",{className:"line-mf"})]})})})}),Object(n.jsx)(E.a,{mt:"7rem",mx:"auto",maxWidth:"1280px",width:"90%",children:Object(n.jsx)(L.a,{container:!0,spacing:4,justify:"center",alignItems:"center",children:I.map((function(e,t){return Object(n.jsx)(q,{title:e.title,image:e.image,liveLink:e.liveLink,repoLink:e.repoLink,techUsed:e.techUsed,features:e.features},e.title)}))})})]})};r.a.render(Object(n.jsxs)(c.a.Fragment,{children:[Object(n.jsx)(p,{}),Object(n.jsx)(x,{}),Object(n.jsx)(g,{}),Object(n.jsx)(F,{}),Object(n.jsx)(N,{}),Object(n.jsx)(k,{}),Object(n.jsx)(y,{})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[65,1,2]]]);
//# sourceMappingURL=main.600104e4.chunk.js.map