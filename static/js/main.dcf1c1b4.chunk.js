(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a(57)},45:function(e,t,a){},50:function(e,t,a){e.exports=a.p+"static/media/banner.6f0f91aa.png"},51:function(e,t,a){e.exports=a.p+"static/media/contact.deb0fbed.png"},57:function(e,t,a){"use strict";a.r(t);var n=a(34),c=a(0),o=a.n(c),l=a(19),r=a.n(l),i=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}a(40),a(42),a(45);var m=a(30),d=a(33),u=a(26),h=a(29),v=a(9),p=a(10),b=a(12),E=a(11),f=a(13),w=a(8),g=a(64),N=a(65),O=a(66),j=a(20),k=a.n(j),C=a(24),y=a(16),x=a.n(y),A=(o.a.Component,function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(b.a)(this,Object(E.a)(t).call(this,e))).state={selectAll:0},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"h1 mb-4"},"Corsisti"),o.a.createElement("div",{className:"w-100 row"},o.a.createElement("div",{className:"col-9 col-md-3 col-lg-3"},o.a.createElement("input",{type:"text",className:"w-100 rounded h48"})),o.a.createElement("div",{className:"col-3 col-md-1 col-lg-1 px-0"},o.a.createElement("button",{className:"btn btn-success h48 w-100"},"Cerca"))),o.a.createElement("div",{className:"row font-weight-bold mt-4"},o.a.createElement("hr",{className:"col-12"}),o.a.createElement("div",{className:"col-4 row"},o.a.createElement("div",{className:"col-2 text-center"},o.a.createElement("input",{type:"checkbox",id:"studentCheckAll",value:this.state.selecAll}),o.a.createElement("label",{htmlFor:"studentCheckAll",className:"pt-1"})),o.a.createElement("div",{className:"col-5"},"Cognome"),o.a.createElement("div",{className:"col-5"},"Nome")),o.a.createElement("div",{className:"col-3 row"},o.a.createElement("div",{className:"col-10"},"Email"),o.a.createElement("div",{className:"col-2"},"Attivo")),o.a.createElement("div",{className:"col-5 text-center"},"Azioni"),o.a.createElement("hr",{className:"col-12 mt-1"})),o.a.createElement(W,null))}}]),t}(o.a.Component)),W=function(e){function t(e){return Object(v.a)(this,t),Object(b.a)(this,Object(E.a)(t).call(this,e))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return A=[{name:"Nome 1",surname:"Cognome 1",email:"Email_1@email.com",active:1,selected:0},{name:"Nome 2",surname:"Cognome 2",email:"Email_2@email.com",active:1,selected:0},{name:"Nome 3",surname:"Cognome 3",email:"Email_3@email.com",active:0,selected:0},{name:"Nome 4",surname:"Cognome 4",email:"Email_4@email.com",active:1,selected:0},{name:"Nome 5",surname:"Cognome 5",email:"Email_5@email.com",active:1,selected:0},{name:"Nome 6",surname:"Cognome 6",email:"Email_6@email.com",active:1,selected:0},{name:"Nome 7",surname:"Cognome 7",email:"Email_7@email.com",active:0,selected:0}],o.a.createElement(o.a.Fragment,null,A.map(function(e,t){return o.a.createElement("div",{className:"row",key:"student-"+t},o.a.createElement("div",{className:"col-4 row"},o.a.createElement("div",{className:"col-2 text-center"},o.a.createElement("input",{type:"checkbox",id:"studentCheck-"+t,value:e.selected}),o.a.createElement("label",{htmlFor:"studentCheck-"+t,className:"pt-1"})),o.a.createElement("div",{className:"col-5"},e.surname),o.a.createElement("div",{className:"col-5"},e.name)),o.a.createElement("div",{className:"col-3 row"},o.a.createElement("div",{className:"col-10"},e.email),o.a.createElement("div",{className:"col-2"},e.active?"Si":"No")),o.a.createElement("div",{className:"col-5 text-center row"},o.a.createElement("div",{className:"col-1"}),o.a.createElement("div",{className:"col-3 bg-warning textWhite h30 rounded-left borderMedium shadowInsetBottom"},"Monitoraggio"),o.a.createElement("div",{className:"col-3 bg-white h30 borderMedium shadowInsetBottom"},"Modifica"),o.a.createElement("div",{className:"col-3 bg-success textWhite h30 borderMedium shadowInsetBottom"},"Accedi come"),o.a.createElement("div",{className:"col-2 bg-danger textWhite h30 rounded-right borderMedium shadowInsetBottom"},"Elimina")),o.a.createElement("hr",{className:"col-12"}))}))}}]),t}(o.a.Component),_={websiteUrl:"undefined"!==typeof window?"http://"+window.location.hostname:"http://127.0.0.1:3000",sitemapBase:"http://127.0.0.1:3000/",basePath:"https://nek97.github.io/patentino-attrezzature/",apiUrl:"undefined"!==typeof window?"http://"+window.location.hostname+":4000":"http://127.0.0.1:4000",clientPort:"3000",prerender:{enabled:!1,port:6e4,host:"http://127.0.0.1",cache_maxpages:1e3,cache_ttl:3600},path:"graphql"},z=function(e){return o.a.createElement(O.a,{basename:_.basePath},o.a.createElement("div",null,e.children,o.a.createElement(g.a,null,o.a.createElement(N.a,{path:"/",component:A}))))},B=o.a.createContext({}),U=function(e){function t(e){var a;return Object(v.a)(this,t),a=Object(b.a)(this,Object(E.a)(t).call(this,e)),x()(Object(w.a)(Object(w.a)(a))),a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(B.Provider,{value:this},o.a.createElement(B.Consumer,null,function(t){return e.props.children(t)}))}}]),t}(o.a.Component),M=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(b.a)(this,Object(E.a)(t).call(this,e))).toggle=a.toggle.bind(Object(w.a)(Object(w.a)(a))),a.state={isOpen:!1},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"componentDidMount",value:function(){window.prerenderReady=!0}},{key:"render",value:function(){return o.a.createElement(U,null,function(e){return o.a.createElement(z,null)})}}]),t}(o.a.Component),I=Object(u.a)(function(e,t){var a=t.headers,c=localStorage.getItem("AUTH_TOKEN");return{headers:Object(n.a)({},a,{authorization:c?"Bearer ".concat(c):""})}}),P=Object(h.createUploadLink)({uri:_.apiUrl+"/"+_.path}),S=(new m.a({link:I.concat(P),cache:new d.a}),o.a.createElement("div",null,o.a.createElement(M,null))),R=document.getElementById("root");R.hasChildNodes()?r.a.hydrate(S,R):r.a.render(S,R),function(e){if("serviceWorker"in navigator){if(new URL("/patentino-attrezzature",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/patentino-attrezzature","/service-worker.js");i?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):s(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):s(t,e)})}}()}},[[35,2,1]]]);
//# sourceMappingURL=main.dcf1c1b4.chunk.js.map