(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(4),s=n.n(r),o=(n(13),n(5)),i=n(6),a=n(8),h=n(7),l=(n(3),n(0)),d=function(e){var t=e.name,n=e.email,c=e.id;return Object(l.jsxs)("div",{className:"roboBody grow",children:[Object(l.jsx)("img",{src:"https://robohash.org/".concat(c,"?200*200"),alt:"Robots"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:t}),Object(l.jsx)("p",{children:n})]})]})},u=function(e){var t=e.robots;return Object(l.jsx)("div",{children:t.map((function(e,n){return Object(l.jsx)(d,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},b=function(e){e.searchfield;var t=e.searchChange;return Object(l.jsx)("div",{className:"pa2",children:Object(l.jsx)("input",{className:"pa3 b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},j=function(e){return Object(l.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"800px"},children:e.children})},f=(n(15),function(e){Object(a.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return 0===t.length?Object(l.jsx)("h1",{children:"Loading"}):Object(l.jsxs)("div",{className:"tc",children:[Object(l.jsx)("h1",{className:"f1",children:"Robo Friends"}),Object(l.jsx)(b,{searchChange:this.onSearchChange}),Object(l.jsx)(j,{children:Object(l.jsx)(u,{robots:c})})]})}}]),n}(c.Component)),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))};s.a.render(Object(l.jsx)(f,{}),document.getElementById("root")),g()},3:function(e,t,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.811e5e03.chunk.js.map