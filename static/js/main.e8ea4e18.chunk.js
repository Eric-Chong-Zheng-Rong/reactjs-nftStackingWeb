(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{103:function(e,a,t){},104:function(e,a,t){},145:function(e,a,t){},146:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(35),c=t.n(r),o=(t(103),t(17)),s=t(18),m=t(32),i=t(31),u=(t(104),t(64)),d=t(62),f=t(9),b=t(38),h=t(72),p=t(93),E=t(78),k=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:""},l.a.createElement(E.a,{collapseOnSelect:!0,expand:"lg",className:"navbar-bg-orange navbar-height"},l.a.createElement(b.a,{fluid:!0},l.a.createElement(E.a.Brand,{as:d.b,to:"/"},l.a.createElement("h3",null,"Spooky Birds")),l.a.createElement(h.a,{className:""},l.a.createElement(p.a,{className:"badge-bg-gray-8 font-size-1"},"0x32r2\u2026\u202623gd")))))}}]),t}(n.Component),g=t(8),y=t(1),S=t(75),v=t.n(S),F=t(94),O=(t(125),t(43)),j=t(22),w=t(10),I=t(44),N=t(50),x=t(63),C=t(41),M=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(N.a,{size:"sm","aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:this.props.modalSuccessForm.modalShow},l.a.createElement(N.a.Body,{className:"show-grid"},l.a.createElement(b.a,{fluid:!0,className:"text-center m-2"},l.a.createElement(j.a,null,l.a.createElement(w.a,null,l.a.createElement(x.a,{icon:C.a,size:"3x",className:"mb-3 text-success"}))),l.a.createElement(j.a,null,l.a.createElement(w.a,null,l.a.createElement("h4",null,"Success"))),l.a.createElement(j.a,null,l.a.createElement(w.a,null,l.a.createElement("p",null,this.props.modalSuccessForm.successMsg))),l.a.createElement(j.a,null,l.a.createElement(w.a,null,l.a.createElement(I.a,{variant:"success",onClick:function(){return e.props.dynamicSetForm(O.modalSuccessForm,O.modalShow,!1)},className:"rounded-pill width-100p"},"Close"))))))}}]),t}(n.Component),_=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(N.a,{size:"sm","aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:this.props.modalFailedForm.modalShow},l.a.createElement(N.a.Body,{className:"show-grid"},l.a.createElement(b.a,{fluid:!0,className:"text-center m-2"},l.a.createElement(j.a,null,l.a.createElement(w.a,null,l.a.createElement(x.a,{icon:C.b,size:"3x",className:"mb-3 text-danger"}))),l.a.createElement(j.a,null,l.a.createElement(w.a,null,l.a.createElement("h4",null,"Failed"))),l.a.createElement(j.a,null,l.a.createElement(w.a,null,l.a.createElement("p",null,this.props.modalFailedForm.errMsg))),l.a.createElement(j.a,null,l.a.createElement(w.a,null,l.a.createElement(I.a,{variant:"danger",onClick:function(){return e.props.dynamicSetForm(O.modalFailedForm,O.modalShow,!1)},className:"rounded-pill width-100p"},"Close"))))))}}]),t}(n.Component),J=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={stakeInfo:{numImage:0,numImageAvailable:4,staked:!1,stakedDays:0},modalSuccessForm:{modalShow:!1},modalFailedForm:{modalShow:!1,errMsg:""}},e.apiConnectWallet=Object(F.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.request({method:"eth_requestAccounts"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),e.setStakeInfo=function(a,t){switch(console.log("setStakeInfo"),console.log("type: "+a),console.log("value: "+t),a){case"numImage":t=t<4?t:e.state.stakeInfo.numImageAvailable}e.setState({stakeInfo:Object(y.a)(Object(y.a)({},e.state.stakeInfo),{},Object(g.a)({},a,t))},console.log("stakeInfo: "+JSON.stringify(e.state.stakeInfo)))},e.dynamicSetForm=function(a,t,n){console.log("dynamicSetForm"),console.log("type: "+t),e.setState(Object(g.a)({},a,Object(y.a)(Object(y.a)({},e.state[a]),{},Object(g.a)({},t,n))),(function(){console.log("dynamicSetForm: "+a+" "+JSON.stringify(e.state[a]))}))},e.actionStack=function(){e.state.stakeInfo.numImage<4?e.setState({modalFailedForm:Object(y.a)(Object(y.a)({},e.state.modalFailedForm),{},{modalShow:!0,errMsg:"Insufficient Candies to be staked. 4 candies are required in order to stake."})}):e.setState({modalSuccessForm:Object(y.a)(Object(y.a)({},e.state.modalSuccessForm),{},{modalShow:!0,successMsg:"Successfully staked Candies"}),stakeInfo:Object(y.a)(Object(y.a)({},e.state.stakeInfo),{},{staked:!0})})},e.actionMintZombie=function(){e.state.stakeInfo.stakedDays<30&&e.setState({modalFailedForm:Object(y.a)(Object(y.a)({},e.state.modalFailedForm),{},{modalShow:!0,errMsg:"Candies need to be staked for 30 days."})})},e}return Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(M,{modalSuccessForm:this.state.modalSuccessForm,dynamicSetForm:this.dynamicSetForm}),l.a.createElement(_,{modalFailedForm:this.state.modalFailedForm,dynamicSetForm:this.dynamicSetForm}),l.a.createElement(b.a,{fluid:!0,className:"bg-orange row-height-100vh"},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(j.a,null,l.a.createElement(w.a,{style:{display:"flex",justifyContent:"center"}},l.a.createElement(w.a,{sm:4,lg:2,className:"m-2 p-2 bg-none border-2-black border-radius-10"},l.a.createElement(w.a,{className:"height-20vh d-flex align-items-center justify-content-center",onClick:function(){return e.setStakeInfo("numImage",e.state.stakeInfo.numImage+1)}},l.a.createElement("img",{height:150,src:"/reactjs-nftStackingWeb/assets/candy.png"}),l.a.createElement("h5",null,"x",this.state.stakeInfo.numImage))),l.a.createElement(w.a,{sm:4,lg:2,className:"m-2 p-2 bg-none border-2-black border-radius-10"},l.a.createElement(w.a,{className:"height-20vh d-flex align-items-center justify-content-center"},l.a.createElement("span",null,"+"))))),l.a.createElement("br",null),l.a.createElement(j.a,null,l.a.createElement(w.a,{style:{display:"flex",justifyContent:"center"}},this.state.stakeInfo.staked?l.a.createElement(I.a,{className:"",variant:"secondary",size:"lg",onClick:function(){return e.actionMintZombie()}},"Mint Zombie Birds"):l.a.createElement(I.a,{className:"",variant:"secondary",size:"lg",onClick:function(){return e.actionStack()}},"Stack"))),l.a.createElement("br",null),l.a.createElement(j.a,null,l.a.createElement(w.a,{style:{display:"flex",justifyContent:"center"}},this.state.stakeInfo.staked?l.a.createElement("h5",{className:"font-weight-bold",onClick:function(){return e.setStakeInfo("stakedDays",e.state.stakeInfo.stakedDays+10)}},"Days Staked : ",this.state.stakeInfo.stakedDays):l.a.createElement("h5",{className:"font-weight-bold"},"Candies Available : ",this.state.stakeInfo.numImageAvailable)))))}}]),t}(n.Component),z=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("header",null,l.a.createElement(k,null)),l.a.createElement(f.d,null,l.a.createElement(f.b,{path:"/v1/stack/view",component:J}),l.a.createElement(f.a,{to:"/v1/stack/view",component:J})),l.a.createElement("footer",null))}}]),t}(n.Component),B=Object(u.b)()(z);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=t(77),W={en:{translation:t(95)},cn_simp:{translation:t(96)},cn_trad:{translation:t(97)}};D.a.use(u.a).init({resources:W,lng:"en",keySeparator:!1,interpolation:{escapeValue:!1}});D.a,t(144),t(145);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},43:function(e){e.exports=JSON.parse('{"modalFailedForm":"modalFailedForm","modalSuccessForm":"modalSuccessForm","end":"end"}')},95:function(e){e.exports=JSON.parse('{"welcome_to_react":"Willkommen bei react und react-i18next"}')},96:function(e){e.exports=JSON.parse('{"wlecome_to_react":"Willkommen bei react und react-i18next"}')},97:function(e){e.exports=JSON.parse('{"wlecome_to_react":"Willkommen bei react und react-i18next"}')},98:function(e,a,t){e.exports=t(146)}},[[98,1,2]]]);
//# sourceMappingURL=main.e8ea4e18.chunk.js.map