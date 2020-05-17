(this.webpackJsonpstickee=this.webpackJsonpstickee||[]).push([[0],{73:function(e,t,n){e.exports=n(85)},84:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),i=n(64),c=n(20),s=n(34),l=n(54),u=Object(s.b)({loggedIn:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOG_OUT":return!1;case"LOG_IN":return!0;default:return e}},user_id:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_ID":return t.value;default:return e}},note_id:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTE_ID":return t.value;default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_NOTES":return t.value;case"ADD_NOTE":return[].concat(Object(l.a)(e),[t.value]);case"DELETE_NOTE":var n=Object(l.a)(e),a=n.filter((function(e){return e.note_id!==t.value}));return a;default:return e}},cookie:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_COOKIE":return t.value;default:return e}}}),p={user_id:1,note_id:1,notes:[],loggedIn:!1,cookie:null},d=Object(s.c)(u,p),m=n(7),h=function(e){return{type:"SET_NOTE_ID",value:e}},g=n(16),f=n.n(g),v=n(26),k=n(65),w=n(35),E=n(36),b=n(37),y=n(38),O=n(115),N=n(121),S=n(120),_=function(e){var t=e.handleLoginButtonClick,n=e.handleSignupButtonClick,a=e.handleInputChange,o=e.toggleNewUserView,i=e.email,c=e.password,s=e.isNewUser;return r.a.createElement(O.a,{className:"landing-page-component",maxWidth:"xs"},r.a.createElement("form",{onSubmit:s?n:t,className:"login-form"},r.a.createElement(N.a,{style:{backgroundColor:"white",borderRadius:"5px",marginBottom:"2px"},required:!0,onChange:a,value:i,name:"email",label:"email",type:"text"}),r.a.createElement(N.a,{style:{backgroundColor:"white",borderRadius:"5px",marginBottom:"15px"},required:!0,onChange:a,value:c,name:"password",label:"password",type:"text"}),r.a.createElement(S.a,{style:{marginBottom:"2px"},type:"submit",variant:"contained",color:"primary"},s?"Sign Up":"Log In")),r.a.createElement(S.a,{style:{width:"100%"},onClick:o,color:"secondary",variant:"contained"},s?"Back To Login":"Create User"))},I="https://getstickee.herokuapp.com",C=function(e){Object(y.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(w.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:"",isNewUser:!1},e.handleInputChange=function(t){var n=Object(k.a)({},e.state);n[t.target.name]=t.target.value,e.setState(n)},e.toggleNewUserView=function(){var t=!e.state.isNewUser;t?(e.setState({email:"",password:"",isNewUser:t}),e.props.history.push("/signup")):(e.setState({email:"",password:"",isNewUser:t}),e.props.history.push("/"))},e.handleLoginButtonClick=function(){var t=Object(v.a)(f.a.mark((function t(n){var a,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n.preventDefault(),t.next=4,fetch("".concat(I,"/"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.email,password:e.state.password})});case 4:return a=t.sent,t.next=7,a.json();case 7:r=t.sent,console.log("JWT on login: ",r.token),void 0===r.token&&window.alert("Invalid Password"),void 0!==r.token&&(e.props.setCookie(r.token),e.props.logIn(),e.props.setUserId(r.user.id),e.props.history.push("/stickee/".concat(r.user.id))),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),window.alert("Unexpected error: ".concat(t.t0));case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(e){return t.apply(this,arguments)}}(),e.handleSignupButtonClick=function(){var t=Object(v.a)(f.a.mark((function t(n){var a,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n.preventDefault(),t.next=4,fetch("".concat(I,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.email,password:e.state.password})});case 4:return a=t.sent,t.next=7,a.json();case 7:(r=t.sent).new_user.id&&(e.props.setUserId(r.new_user.id),window.alert("Success! Please log in to continue"),e.toggleNewUserView()),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),window.alert("Unexpected error: ".concat(t.t0));case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(E.a)(n,[{key:"render",value:function(){return r.a.createElement(_,{handleLoginButtonClick:this.handleLoginButtonClick,handleSignupButtonClick:this.handleSignupButtonClick,handleInputChange:this.handleInputChange,email:this.state.email,password:this.state.password,isNewUser:this.state.isNewUser,toggleNewUserView:this.toggleNewUserView})}}]),n}(r.a.Component),j=Object(c.b)(null,(function(e){return{setUserId:function(t){return e(function(e){return{type:"SET_USER_ID",value:e}}(t))},logIn:function(){return e({type:"LOG_IN"})},setCookie:function(t){return e(function(e){return{type:"SET_COOKIE",value:e}}(t))}}}))(C),x=function(){return r.a.createElement("h1",null,"ONBOARDING")},T=function(e){var t=e.message,n=e.removeStickee,a=e.priority,o=e.id;return r.a.createElement("button",{name:a,id:o,className:"stickee",onClick:n},t)},U=function(e){var t=e.notes,n=e.removeStickee,a=function(e){var t=e.notes,a=e.priority,o=t.filter((function(e){return e.note_type===a}));return r.a.createElement("div",{className:"individual-priority-display-field"},r.a.createElement("h5",null,o.length>0?a.toUpperCase():""),r.a.createElement("div",{className:a},o.map((function(e){return r.a.createElement(T,{key:e.note_id,id:e.note_id,priority:a,message:e.note_message,removeStickee:n})}))))};return r.a.createElement("div",{className:"priority-display-field-container"},r.a.createElement(a,{notes:t,priority:"do"}),r.a.createElement(a,{notes:t,priority:"plan"}),r.a.createElement(a,{notes:t,priority:"delegate"}),r.a.createElement(a,{notes:t,priority:"delete"}))},D=function(e){Object(y.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(w.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).fetchNotesOnLogin=function(){var e=Object(v.a)(f.a.mark((function e(t,n){var a,r,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,n);case 3:return a=e.sent,e.next=6,a.json();case 6:r=e.sent,o=r.results,this.props.getNotes(o),this.props.setNoteId(r.next_note_id),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),window.alert("Unexpected error while fetching data: ".concat(e.t0));case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));return function(t,n){return e.apply(this,arguments)}}(),e.removeStickee=function(){var t=Object(v.a)(f.a.mark((function t(n){var a,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=parseInt(n.target.id),t.next=4,fetch("".concat(I,"/stickee/"),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:e.props.cookie},body:JSON.stringify({note_id:a,user_id:e.props.user_id})});case 4:return r=t.sent,t.next=7,r.json();case 7:t.sent,e.props.deleteNote(a),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),window.alert("Unexpected error: ".concat(t.t0));case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(E.a)(n,[{key:"componentDidMount",value:function(){console.log("cookie passed through redux: ",this.props.cookie);var e=window.location.pathname.split("/"),t=parseInt(e[e.length-1]);this.fetchNotesOnLogin("".concat(I,"/stickee/").concat(t),{method:"GET",headers:{"Content-Type":"application/json",Authorization:this.props.cookie}})}},{key:"render",value:function(){return r.a.createElement(U,{notes:this.props.notes,removeStickee:this.removeStickee})}}]),n}(r.a.Component),L=Object(c.b)((function(e){return{notes:e.notes,user_id:e.user_id,cookie:e.cookie}}),(function(e){return{getNotes:function(t){return e(function(e){return{type:"GET_NOTES",value:e}}(t))},deleteNote:function(t){return e(function(e){return{type:"DELETE_NOTE",value:e}}(t))},setNoteId:function(t){return e(h(t))}}}))(D),A=n(123),B=n(124),F=function(e){return r.a.createElement("div",null,r.a.createElement("button",{onClick:e.toggleAddStickeeForm,className:"toggle-dialog-btn"},"+"),r.a.createElement(B.a,{open:e.stickeeFormOpen,className:"add-stickee-dialog-component"},r.a.createElement("form",{className:"add-stickee-form-wrap",onSubmit:e.handleSubmit},r.a.createElement("div",{className:"form-left-side"},r.a.createElement("label",null,"I need to...."),r.a.createElement("textarea",{rows:"5",value:e.message,onChange:e.handleInputChange})),r.a.createElement("div",{className:"form-right-side"},r.a.createElement("div",{className:"switch"},r.a.createElement("label",null,"Is it important?"),r.a.createElement("br",null),"no",r.a.createElement(A.a,{id:"important",checked:e.important,onChange:e.handleImportantSwitch}),"yes"),r.a.createElement("div",{className:"switch"},r.a.createElement("label",null,"Is it urgent?"),r.a.createElement("br",null),"no",r.a.createElement(A.a,{id:"urgent",checked:e.urgent,onChange:e.handleUrgentSwitch}),"yes"),r.a.createElement("button",{type:"submit"},"Stick It!"))),r.a.createElement("button",{className:"stickee-form-back-btn",onClick:function(){return e.toggleAddStickeeForm(!0)}},"Back")))},G=function(e){Object(y.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(w.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={stickeeFormOpen:!1,message:"",important:!0,urgent:!0,note_id:e.props.note_id,user_id:e.props.user_id},e.toggleAddStickeeForm=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=!e.state.stickeeFormOpen;t&&e.setState({message:"",important:!0,urgent:!0}),e.setState({stickeeFormOpen:n})},e.handleImportantSwitch=function(){var t=!e.state.important;e.setState({important:t})},e.handleUrgentSwitch=function(){var t=!e.state.urgent;e.setState({urgent:t})},e.handleInputChange=function(t){e.setState({message:t.target.value})},e.createNewStickeeObject=function(){var t,n=e.state.message,a=e.state.urgent,r=e.state.important;return r&&a&&(t="do"),r&&!a&&(t="plan"),!r&&a&&(t="delegate"),!r&&!a&&(t="delete"),{user_id:e.state.user_id,note_id:e.props.note_id,note_type:t,note_message:n}},e.handleSubmit=function(){var t=Object(v.a)(f.a.mark((function t(n){var a,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,fetch("".concat(I,"/stickee/add"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:e.props.cookie},body:JSON.stringify({newNote:e.createNewStickeeObject()})});case 3:return a=t.sent,t.next=6,a.json();case 6:r=t.sent,e.props.setNoteId(r.results),e.props.addNote(e.createNewStickeeObject()),e.setState({message:""}),e.toggleAddStickeeForm();case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(E.a)(n,[{key:"render",value:function(){return r.a.createElement(F,{stickeeFormOpen:this.state.stickeeFormOpen,toggleAddStickeeForm:this.toggleAddStickeeForm,handleInputChange:this.handleInputChange,handleUrgentSwitch:this.handleUrgentSwitch,handleImportantSwitch:this.handleImportantSwitch,handleSubmit:this.handleSubmit,urgent:this.state.urgent,important:this.state.important,message:this.state.message})}}]),n}(r.a.Component),J=Object(c.b)((function(e){return{note_id:e.note_id,user_id:e.user_id,cookie:e.cookie}}),(function(e){return{addNote:function(t){return e(function(e){return{type:"ADD_NOTE",value:e}}(t))},setNoteId:function(t){return e(h(t))}}}))(G),P=function(){return r.a.createElement("div",{className:"main-display-component"},r.a.createElement(L,null),r.a.createElement(J,null))},R=function(){return r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/",component:j}),r.a.createElement(m.a,{exact:!0,path:"/signup",component:j}),r.a.createElement(m.a,{path:"/onboarding",component:x}),r.a.createElement(m.a,{path:"/stickee",component:P}))},V=function(e){return r.a.createElement("div",{className:"header-display-component"},r.a.createElement("h1",{className:"heading"},"STICKEE"),e.loggedIn&&r.a.createElement("button",{className:"logout",onClick:function(){window.location.replace("/"),e.logOut()}},"Log Out"))},z=Object(c.b)((function(e){return{loggedIn:e.loggedIn}}),(function(e){return{logOut:function(){return e({type:"LOG_OUT"})}}}))(V);var K=function(){return r.a.createElement(c.a,{store:d},r.a.createElement(i.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(z,null),r.a.createElement(R,null))))};n(84);Object(o.render)(r.a.createElement(K,null),document.getElementById("root"))}},[[73,1,2]]]);
//# sourceMappingURL=main.0f246225.chunk.js.map