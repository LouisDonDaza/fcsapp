(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{255:function(e,t,a){e.exports=a(448)},448:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(64),s=a.n(c),o=a(15),l=a(16),i=a(18),u=a(17),m=a(19),d=a(464),p=a(462),h=a(221),g=a.n(h)()(),b=a(21),f=a(22),v=a.n(f),E=a(29),y=a(145),j=a.n(y),O=(j.a.create({baseURL:"https://skillshareapi.herokuapp.com",validateStatus:function(e){return e<400}}),j.a.create({baseURL:"https://skillshareapi.herokuapp.com"})),N=function(e){return function(){var t=Object(E.a)(v.a.mark(function t(a){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:localStorage.setItem("token",e.token),localStorage.setItem("firstName",e.user.firstName),localStorage.setItem("_id",e.user._id),localStorage.setItem("lastName",e.user.lastName),a({type:"USER_INFO",payload:e.user}),a({type:"TOKEN",payload:e.token}),g.push("/fcsapp");case 7:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(E.a)(v.a.mark(function t(a){var n;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.next=3,O.get("/posts".concat(e));case 3:n=t.sent,a({type:"FETCH_FEED",payload:n.data});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},S=a(32),C=a(460),w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={like:!1,likes:a.props.post.likes,open:!1,edit:!1,category:a.props.post.categoryName,title:a.props.post.title,Title:"",Input:"",body:a.props.post.body,user:a.props.post.author,userID:a.props.post._user},a.handleOpen=function(){return a.setState({open:!0})},a.handleClose=function(){return a.setState({open:!1})},a.editPost=function(){var e=a.state,t=e.title,n=e.body;a.setState({edit:!0,Title:t,Input:n})},a.cancelEdit=function(){a.setState({edit:!1,Title:"",Input:""})},a.handleSubmit=function(){a.cancelEdit();var e=a.state,t=e.Title,n=e.Input;a.setState({title:t,body:n})},a.handleChange=function(e,t){var n=t.name,r=t.value;a.setState(Object(S.a)({},n,r))},a.renderLike=function(){return a.state.like?r.a.createElement("i",{className:"heart icon",style:{cursor:"pointer"},onClick:a.likePost}):r.a.createElement("i",{className:"heart outline icon",style:{cursor:"pointer"},onClick:a.likePost})},a.renderButtons=function(){return null},a.renderModals=function(){var e=a.state;e.open,e.edit,e.Title,e.Input;return null},a.likePost=function(){a.state.like?a.setState(function(e,t){return{likes:e.likes-1,like:!1}}):a.setState(function(e,t){return{likes:e.likes+1,like:!0}})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.category,a=e.title,n=e.body,c=e.user,s=e.userID;return r.a.createElement("div",{className:"col-md-6 mt-lg-2 mt-3"},r.a.createElement("div",{className:"card text-center",style:{height:"100%"}},r.a.createElement("div",{className:"card-header"},t,this.renderButtons()),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},a),r.a.createElement("p",{className:"card-text"},n),r.a.createElement(C.a,{to:"/account?user=".concat(s)},c),r.a.createElement("div",{className:"float-right"},this.state.likes," ",this.renderLike()))),this.renderModals())}}]),t}(r.a.Component),x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).renderPosts=function(){var e=a.props.posts;return e.length?e.map(function(e,t){return r.a.createElement(w,{key:e._id,post:e})}):r.a.createElement("h3",null,"This section is empty. Help fill it up!")},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log("props is",this.props.posts),r.a.createElement("div",{className:"row"},this.renderPosts())}}]),t}(r.a.Component),T=function(e){function t(e){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchPosts("/trending")}},{key:"render",value:function(){return r.a.createElement("div",{className:"text-center"},r.a.createElement("h3",null,"Trending"),r.a.createElement("hr",null),r.a.createElement(x,{posts:this.props.posts}))}}]),t}(r.a.Component),_=Object(b.b)(function(e){return{posts:e.feed}},{fetchPosts:k})(T),I=a(75),M=a.n(I),L=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.user;return r.a.createElement("div",{className:"card text-white text-center bg-info mb-3"},r.a.createElement("img",{src:"https://images.pexels.com/photos/163142/glasses-notebook-wooden-business-163142.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",className:"card-img-top",alt:"User"}),r.a.createElement("div",{class:"card-header"},e.firstName," ",e.lastName),r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{class:"card-title"},e.title," at ",e.Organization),r.a.createElement("p",{class:"card-text"},e.bio),r.a.createElement("span",{class:"text-white"},"Tags: "),r.a.createElement("span",{class:"badge badge-light mx-1"},"Chemistry"),r.a.createElement("span",{class:"badge badge-light mx-1"},"Math"),r.a.createElement("span",{class:"badge badge-light mx-1"},"Physics")))}}]),t}(r.a.Component),P=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={found:!1,user:null},a.userFound=function(){var e=a.state,t=e.found,n=e.user;return t&&n?r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(L,{user:n})),r.a.createElement("div",{className:"col-lg-8"},r.a.createElement(x,{posts:a.props.posts}))):r.a.createElement("div",{class:"jumbotron jumbotron-fluid"},r.a.createElement("div",{class:"container"},r.a.createElement("h1",{class:"display-4"},"User Not Found"),r.a.createElement("p",{class:"lead"},"Redirecting you back to homepage in 3 seconds")))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.search;t.length?O.get("/account".concat(t)).then(function(a){"string"===typeof a.data&&e.redirect(),console.log("info is",a),e.setState({user:a.data,found:!0}),e.props.fetchPosts("/account".concat(t))}):this.redirect(),console.log("state is",this.state)}},{key:"redirect",value:function(){setTimeout(function(){g.push("/fcsapp")},3e3)}},{key:"render",value:function(){return r.a.createElement("div",null,this.userFound())}}]),t}(r.a.Component),R=Object(b.b)(function(e){return{posts:e.feed}},{fetchPosts:k})(P),F=a(461),D=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={activeLink:-1},a.toggleNav=function(){a.navRef.current.classList.toggle("show")},a.toggleLink=function(e){var t=a.state.activeLink;a.refArray.forEach(function(a,n){n===t?a.current.classList.toggle("active"):n===e&&a.current.classList.toggle("active")}),a.setState({activeLink:e})},a.renderSignin=function(){var e=a.props.auth,t=e.authorization,n=e.user;return t.length?[r.a.createElement("li",{style:{display:"inline-block"}},r.a.createElement("h4",{style:{color:"snow"}},"Welcome, ",n.firstName,"!")),r.a.createElement("li",{style:{display:"inline-block"}},r.a.createElement(C.a,{style:{margin:"0 5px"},to:"/",onClick:function(){a.props.signOut()},className:"btn btn-primary"},"Log Out"))]:[r.a.createElement("li",{style:{display:"inline-block"}},r.a.createElement(C.a,{style:{margin:"0 5px"},to:"/login"},r.a.createElement(F.a,{color:"green"},"Log In"))),r.a.createElement("li",{style:{display:"inline-block"}},r.a.createElement(C.a,{style:{margin:"0 5px"},to:"/register"},r.a.createElement(F.a,{primary:!0},"Register")))]},a.navRef=r.a.createRef(),a.linkOneRef=r.a.createRef(),a.linkTwoRef=r.a.createRef(),a.linkThreeRef=r.a.createRef(),a.refArray=[a.linkOneRef,a.linkTwoRef],a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.auth,a=t.authorization,n=t.user,c="";return a.length&&(c="?user="+n._id),r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement(C.a,{to:"/fcsapp",className:"navbar-brand ml-lg-5 ml-sm-3"},r.a.createElement("a",{onClick:function(){e.toggleLink(-1)}},"wisDOM")),r.a.createElement("button",{className:"navbar-toggler",type:"button",onClick:this.toggleNav},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",ref:this.navRef},r.a.createElement("ul",{className:"navbar nav mr-auto mt-2 mt-lg-0 nav nav-pills flex-column flex-lg-row"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(C.a,{to:"/trending",className:"nav-link"},r.a.createElement("a",{className:"nav-link",ref:this.linkOneRef,onClick:function(){e.toggleLink(0)}},"Trending"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(C.a,{to:"/account".concat(c),className:"nav-link"},r.a.createElement("a",{ref:this.linkTwoRef,className:"nav-link",onClick:function(){e.toggleLink(1)}},"Account")))),this.renderSignin()))}}]),t}(r.a.Component),z=Object(b.b)(function(e){return{auth:e.auth}},{signOut:function(){return g.push("/"),localStorage.removeItem("token"),localStorage.removeItem("Organization"),localStorage.removeItem("firstName"),localStorage.removeItem("_id"),{type:"SIGN_OUT"}}})(D),U=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).renderSubjects=function(){var e=a.props.subject;return r.a.createElement("div",{class:"row"},e.map(function(e){return r.a.createElement("div",{class:"col-md-4 col-lg-3 col-sm-6 my-2",style:{cursor:"pointer"}},r.a.createElement(C.a,{to:"/subject?code=".concat(e.code)},r.a.createElement("div",{class:"card text-center",style:{height:"100%"}},r.a.createElement("img",{src:e.imageURL,alt:e.name,class:"card-img-top"}),r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{class:"card-title"},e.name),r.a.createElement("p",{class:"card-text"},e.description)))))}))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"text-center mt-2"},r.a.createElement("h3",null,"Subjects"),r.a.createElement("hr",null),this.renderSubjects(),r.a.createElement(_,null))}}]),t}(r.a.Component),A=Object(b.b)(function(e){return{subject:e.subject}})(U),B=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={categories:[{_id:"5c7c64972dcb1840f87d40ee",category:350,description:"Loading...",name:"Loading..."}],selectedSub:{name:"Loading..."},subjectFound:!0},a.renderDesc=function(){var e=a.state.categories,t=a.props.location.search;return r.a.createElement("div",{className:"mt-3"},r.a.createElement(C.a,{to:"/feed".concat(t)},r.a.createElement("h1",null,a.state.selectedSub.name)),r.a.createElement("div",{className:"row"},e.map(function(e){return r.a.createElement("div",{className:"col-12"},r.a.createElement("hr",null),r.a.createElement(C.a,{to:"/feed".concat(t,"&category=").concat(e.category)},r.a.createElement("h2",null,e.category," - ",e.name)),r.a.createElement("p",{className:"lead"},e.description))})))},a.notFound=function(){if(!a.state.subjectFound)return setTimeout(function(){g.push("/")},3e3),r.a.createElement("div",{class:"jumbotron jumbotron-fluid"},r.a.createElement("div",{class:"container"},r.a.createElement("h1",{class:"display-4"},"Subject Not Found"),r.a.createElement("p",{class:"lead"},"Redirecting you back to homepage in 3 seconds")))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.search,a=+M.a.parse(t).code;this.props.subject.filter(function(e){return e.code===a});O.get("/subject".concat(t)).then(function(t){t.data.length?e.setState({selectedSub:t.data[0],categories:t.data[0].subcatdesc}):e.setState({subjectFound:!1})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"mb-3"},this.renderDesc(),this.notFound())}}]),t}(r.a.Component),G=Object(b.b)(function(e){return{subject:e.subject}})(B),H=a(459),J=a(458),W=a(457),K=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={open:!1,Title:"",Input:"",Subject:0,Category:0,subOptions:[],catOptions:[],categoryName:"",errMsg:""},a.handleOpen=function(){return a.setState({open:!0})},a.handleClose=function(){return a.setState({open:!1,errMsg:""})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(S.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.Title,r=t.Input,c=t.Subject,s=t.Category,o=t.categoryName,l=a.props.auth.user,i=l.firstName+" "+l.lastName;0!==c&&0!==s&&0===n.length&&0===r.length?(O.post("/posts/new",{title:n,text:r,Subject:c,Category:s,fullName:i,categoryName:o}),a.setState({open:!1,Title:"",Input:"",Subject:0,Category:0,errMsg:""})):a.setState({errMsg:"Pls fill in all fields"})},a.handleSubjectChange=function(e,t){t.name;var n=t.value,r=a.props.subject[n-1].subcatdesc.map(function(e,t){return{key:t,text:e.name,value:e.category}});a.setState({Subject:n,catOptions:r})},a.handleCatChange=function(e,t){var n,r=t.name,c=t.value;a.setState((n={},Object(S.a)(n,r,c),Object(S.a)(n,"categoryName",e.target.innerText),n))},a.renderModals=function(){var e=a.state,t=e.open,n=e.Title,c=e.Input,s=e.subOptions,o=e.catOptions;return r.a.createElement("div",null,r.a.createElement(H.a,{size:"small",dimmer:"blurring",open:t,onClose:a.handleClose,style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",height:"auto"}},r.a.createElement(H.a.Content,null,r.a.createElement(J.a,{onSubmit:a.handleSubmit},r.a.createElement(J.a.Group,null,r.a.createElement(J.a.Input,{name:"test",control:W.a,options:s,label:{children:"Subject",htmlFor:"form-select-control-subjects"},placeholder:"Subject",search:!0,searchInput:{id:"form-select-control-subjects"},onChange:a.handleSubjectChange}),r.a.createElement(J.a.Input,{name:"Category",control:W.a,options:o,label:{children:"Category",htmlFor:"form-select-control-categories"},placeholder:"Category",search:!0,searchInput:{id:"form-select-control-categories"},onChange:a.handleCatChange})),r.a.createElement(J.a.Input,{name:"Title",label:"Title",onChange:a.handleChange,value:n,autoFocus:!0}),r.a.createElement(J.a.Group,null,r.a.createElement(J.a.TextArea,{name:"Input",label:"Content",width:12,onChange:a.handleChange,value:c})),r.a.createElement(J.a.Group,{className:"mt-2"},r.a.createElement(F.a,{color:"red",onClick:a.handleClose,type:"button",className:"ml-2"},"Cancel"),r.a.createElement(J.a.Field,{control:F.a,color:"teal"},"Submit"))),a.renderError())))},a.renderError=function(){return a.state.errMsg?r.a.createElement("div",{className:"ui fluid red message"},r.a.createElement("p",null,a.state.errMsg)):null},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.subject.map(function(e,t){return{key:t,text:e.name,value:e.code}});this.setState({subOptions:e})}},{key:"render",value:function(){if(this.props.auth.authorization.length){var e=this.state.open;return r.a.createElement("div",null,r.a.createElement(F.a,{open:e,color:"teal",onClick:this.handleOpen},"New Post",r.a.createElement("i",{className:"magic icon right aligned"})),this.renderModals())}return null}}]),t}(r.a.Component),X=Object(b.b)(function(e){return{subject:e.subject,auth:e.auth}})(K),Z=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={selectedSub:{name:"Loading...",subcatdesc:[{_id:"5c7c64972dcb1840f87d40ee",category:350,description:"The study of carbon compounds",name:"Organic Chemistry"}]},selectedCat:"All",posts:[]},a.toggleDropdown=function(e){e.current.classList.toggle("show")},a.renderSubjects=function(){var e=a.props,t=e.subject,n=(e.location,e.fetchPosts);return t.map(function(e){return r.a.createElement(C.a,{to:"/feed?code=".concat(e.code,"&category=0"),className:"dropdown-item",onClick:function(){a.setState({selectedSub:e,selectedCat:"All"}),n("?code=".concat(e.code,"&category=0"))}},e.name)})},a.renderCategories=function(){var e=a.state.selectedSub,t=e.subcatdesc,n=e.code,c=a.props,s=c.fetchPosts;c.location;return t.map(function(e){return r.a.createElement(C.a,{to:"/feed?code=".concat(n,"&category=").concat(e.category),className:"dropdown-item",onClick:function(){a.setState({selectedCat:e.name}),s("?code=".concat(n,"&category=").concat(e.category))}},e.name)})},a.fetchPosts=Object(E.a)(v.a.mark(function e(){var t;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("/posts".concat(a.props.location.search));case 2:return t=e.sent,console.log("response is",t),e.abrupt("return",t.data);case 5:case"end":return e.stop()}},e)})),a.renderFeed=function(e){var t=a.state,n=t.selectedSub,c=t.selectedCat,s=a.props,o=(s.location,s.fetchPosts);return r.a.createElement("div",null,r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"dropdown m-2"},r.a.createElement("button",{className:"btn btn-secondary dropdown-toggle btn-lg",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",onClick:function(){return a.toggleDropdown(a.dropdownuno)}},n.name),r.a.createElement("div",{className:"dropdown-menu",ref:a.dropdownuno},a.renderSubjects())),r.a.createElement("div",{className:"dropdown m-2"},r.a.createElement("button",{className:"btn btn-secondary dropdown-toggle btn-lg",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",onClick:function(){return a.toggleDropdown(a.dropdowndos)}},c),r.a.createElement("div",{className:"dropdown-menu",ref:a.dropdowndos},r.a.createElement(C.a,{to:"/feed?code=".concat(n.code,"&category=0"),className:"dropdown-item",onClick:function(){a.setState({selectedCat:"All"}),o("?code=".concat(n.code,"&category=0"))}},"All"),a.renderCategories()))),r.a.createElement("div",{className:"row justify-content-center my-2"},r.a.createElement(X,null)))},a.dropdownuno=r.a.createRef(),a.dropdowndos=r.a.createRef(),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.subject,a=e.fetchPosts,n=e.location;a(n.search);var r=M.a.parse(n.search),c=t[r.code-1],s=c.subcatdesc.filter(function(e){return e.category===+r.category});if(s.length){var o=s[0];this.setState({selectedSub:c,selectedCat:o.name})}else this.setState({selectedSub:c,selectedCat:"Not Found"})}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderFeed(),r.a.createElement(x,{posts:this.props.posts}))}}]),t}(r.a.Component),V=Object(b.b)(function(e){return{subject:e.subject,posts:e.feed}},{fetchPosts:k})(Z),$=(r.a.Component,a(463)),q=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={errMsg:""},a.handleChange=function(e,t){var n=t.name,r=t.value;a.setState(Object(S.a)({},n,r))},a.handleSubmit=Object(E.a)(v.a.mark(function e(){var t,n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://skillshareapi.herokuapp.com/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a.state)});case 2:if(401!==(t=e.sent).status){e.next=5;break}return e.abrupt("return",a.setState({errMsg:"Incorrect email and password"}));case 5:return e.next=7,t.json();case 7:n=e.sent,a.props.saveToken(n);case 9:case"end":return e.stop()}},e)})),a.renderError=function(){return a.state.errMsg?r.a.createElement("div",{className:"ui fluid red message"},r.a.createElement("p",null,a.state.errMsg)):null},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement($.a,{className:"mt-3",inverted:!0,style:{width:"auto"}},r.a.createElement(J.a,{inverted:!0,onSubmit:this.handleSubmit},r.a.createElement(J.a.Group,null,r.a.createElement(J.a.Input,{fluid:!0,label:"Email",placeholder:"Email",name:"email",width:8,onChange:this.handleChange})),r.a.createElement(J.a.Group,null,r.a.createElement(J.a.Input,{fluid:!0,label:"Password",placeholder:"password",name:"password",type:"password",width:8,onChange:this.handleChange})),r.a.createElement(F.a,{type:"submit"},"Submit")),this.renderError())}}]),t}(r.a.Component),Q=Object(b.b)(null,{saveToken:N})(q),Y=a(51),ee=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={errMsg:[],password:"",email:"",firstName:"",lastName:"",Organization:"",title:""},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(S.a)({},n,r)),a.state.errMsg.length&&a.setState({errMsg:[]})},a.handleSubmission=function(){var e=Object(E.a)(v.a.mark(function e(t){var n,r,c,s,o,l,i,u,m,d;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.state,r=n.password,c=n.email,s=n.firstName,o=n.lastName,l=n.Organization,i=n.title,u=n.errMsg,c&&r&&s&&o&&l&&i||a.setState({errMsg:[].concat(Object(Y.a)(a.state.errMsg),["Pls fill in all fields"])}),r.length<8&&a.setState({errMsg:[].concat(Object(Y.a)(a.state.errMsg),["Password must be at least 8 characters long"])}),a.validateEmail(c)||a.setState({errMsg:[].concat(Object(Y.a)(a.state.errMsg),["Invalid Email Address"])}),t.preventDefault(),u.length){e.next=15;break}return e.next=8,fetch("http://localhost:3000/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a.state)});case 8:if(422!==(m=e.sent).status){e.next=11;break}return e.abrupt("return",a.setState({errMsg:[].concat(Object(Y.a)(a.state.errMsg),["Email already exists"])}));case 11:return e.next=13,m.json();case 13:d=e.sent,a.props.saveToken(d);case 15:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.renderError=function(){var e=a.state.errMsg;return e.length?e.map(function(e,t){return r.a.createElement("div",{key:t,className:"alert alert-warning mt-2",role:"alert"},e)}):null},a.validateEmail=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmission},r.a.createElement("div",{className:"row justify-content-center my-2"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("label",null,"First Name"),r.a.createElement("input",{type:"text",placeholder:"First name",className:"form-control",name:"firstName",onChange:this.handleChange})),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("label",null,"Last Name"),r.a.createElement("input",{type:"text",placeholder:"Last name",className:"form-control",name:"lastName",onChange:this.handleChange}))),r.a.createElement("div",{className:"row justify-content-center my-2"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",placeholder:"Email",className:"form-control",name:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",placeholder:"Password",className:"form-control",name:"password",onChange:this.handleChange}))),r.a.createElement("div",{className:"row justify-content-center my-2"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("label",null,"title"),r.a.createElement("input",{type:"text",placeholder:"title",className:"form-control",name:"title",onChange:this.handleChange}),r.a.createElement("small",{className:"form-text text-muted"},"e.g. Student, Scientist, Superhero")),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("label",null,"Organization"),r.a.createElement("input",{type:"text",placeholder:"Organization",className:"form-control",name:"Organization",onChange:this.handleChange}),r.a.createElement("small",{className:"form-text text-muted"},"e.g. All Boys High School, Example Inc."))),r.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Submit")),this.renderError())}}]),t}(r.a.Component),te=Object(b.b)(null,{saveToken:N})(ee),ae=function(e){function t(e){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchSubject(),O.defaults.headers.common.authorization=this.props.auth.authorization}},{key:"render",value:function(){return r.a.createElement(d.a,{history:g},r.a.createElement("div",null,r.a.createElement(z,null),r.a.createElement("div",{className:"container"},r.a.createElement(p.a,{path:"/fcsapp",exact:!0,component:A}),r.a.createElement(p.a,{path:"/trending",exact:!0,component:_}),r.a.createElement(p.a,{path:"/account",exact:!0,component:R}),r.a.createElement(p.a,{path:"/subject",exact:!0,component:G}),r.a.createElement(p.a,{path:"/feed",exact:!0,component:V}),r.a.createElement(p.a,{path:"/login",exact:!0,component:Q}),r.a.createElement(p.a,{path:"/register",exact:!0,component:te}))))}}]),t}(r.a.Component),ne=Object(b.b)(function(e){return{auth:e.auth}},{fetchSubject:function(){return function(){var e=Object(E.a)(v.a.mark(function e(t,a){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get("/subject");case 2:n=e.sent,t({type:"FETCH_SUBJECT",payload:n.data});case 4:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()}})(ae),re=a(47),ce=a(244),se=a(40),oe={authorization:"",user:{following:[]}},le=[{subcategories:[],imageURL:"https://images.pexels.com/photos/265076/pexels-photo-265076.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",bgColor:"#000",_id:"5c7c21e128f9053cd845bb4f",name:"Physics",description:"The study of Physics",code:1,subcatdesc:[],__v:0},{subcategories:[350],imageURL:"https://images.pexels.com/photos/265076/pexels-photo-265076.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",bgColor:"#000",_id:"5c7c21ed28f9053cd845bb50",name:"Biology",description:"The study of Biology",code:2,subcatdesc:[{_id:"5c7c64972dcb1840f87d40ee",category:350,description:"The study of carbon compounds",name:"Organic Chemistry"}],__v:0},{subcategories:[],imageURL:"https://images.pexels.com/photos/265076/pexels-photo-265076.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",bgColor:"#000",_id:"5c7c65a4f0eb650edc8c9694",name:"Chemistry",description:"The study of Chemistry",code:3,subcatdesc:[],__v:0},{subcategories:[],imageURL:"https://images.pexels.com/photos/265076/pexels-photo-265076.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",bgColor:"#000",_id:"5c7c69f4d1d0ac30c8f3b108",name:"Math",description:"The study of Math",code:4,subcatdesc:[],__v:0},{subcategories:[],imageURL:"https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",bgColor:"#000",_id:"5c7c6a34d1d0ac30c8f3b109",name:"History",description:"The study of History",code:5,subcatdesc:[],__v:0},{subcategories:[],imageURL:"https://images.pexels.com/photos/265076/pexels-photo-265076.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",bgColor:"#123",_id:"5c7c6ac24e12b30dd438c36a",name:"Geography",description:"The study of Geography",code:6,subcatdesc:[],__v:0}],ie={open:!1,edit:!1,values:{}},ue=Object(re.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOKEN":return Object(se.a)({},e,{authorization:t.payload});case"USER_INFO":return Object(se.a)({},e,{user:t.payload});case"SIGN_OUT":return Object(se.a)({},e,{authorization:"",user:{}});case"FOLLOW":case"UNFOLLOW":return Object(se.a)({},e,{user:t.payload});default:return e}},feed:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_FEED":return Object(Y.a)(t.payload);default:return e}},modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN":return Object(se.a)({},e,{open:!0});case"CLOSE":return Object(se.a)({},e,{open:!1,edit:!1,values:{}});case"EDIT_POST":return Object(se.a)({},e,{open:!0,edit:!0,values:t.payload});default:return e}},subject:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_SUBJECT":return Object(Y.a)(t.payload);default:return e}}}),me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||re.d,de=Object(re.e)(ue,{auth:{authorization:localStorage.getItem("token")||"",user:{firstName:localStorage.getItem("firstName")||"",_id:localStorage.getItem("_id")||"",lastName:localStorage.getItem("lastName")||""}}},me(Object(re.a)(ce.a)));s.a.render(r.a.createElement(b.a,{store:de},r.a.createElement(ne,null)),document.getElementById("root"))}},[[255,1,2]]]);
//# sourceMappingURL=main.7b28f140.chunk.js.map